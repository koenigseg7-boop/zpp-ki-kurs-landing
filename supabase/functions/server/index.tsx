import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import Stripe from "npm:stripe@17.4.0";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Initialize Stripe
const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2024-12-18.acacia",
});

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-98da7db4/health", (c) => {
  return c.json({ status: "ok" });
});

// Create Stripe Checkout Session
app.post("/make-server-98da7db4/create-checkout-session", async (c) => {
  try {
    console.log("=== CREATE CHECKOUT SESSION START ===");
    
    const body = await c.req.json();
    const { firstName, lastName, email, phone, company, date, message } = body;

    console.log("Received booking data:", { firstName, lastName, email, phone, date });

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !date) {
      console.error("Validation failed - missing required fields:", { firstName, lastName, email, phone, date });
      return c.json({ error: "Fehlende Pflichtfelder" }, 400);
    }

    // Check if Stripe is initialized
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) {
      console.error("STRIPE_SECRET_KEY is not set!");
      return c.json({ error: "Stripe nicht konfiguriert", details: "STRIPE_SECRET_KEY fehlt" }, 500);
    }

    if (!stripeKey.startsWith("sk_test_") && !stripeKey.startsWith("sk_live_")) {
      console.error("Invalid STRIPE_SECRET_KEY format:", stripeKey.substring(0, 10));
      return c.json({ error: "Stripe nicht konfiguriert", details: "STRIPE_SECRET_KEY hat falsches Format" }, 500);
    }

    console.log("Stripe key found, creating checkout session...");

    // Get the origin for redirect URLs
    const origin = c.req.header("origin") || c.req.header("referer")?.split("/").slice(0, 3).join("/") || "http://localhost:5173";
    const successUrl = `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${origin}/payment/canceled`;
    
    console.log("Redirect URLs:", { origin, successUrl, cancelUrl });

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "KI-Kurs für Unternehmer - Düren",
              description: `Termin: ${date}`,
            },
            unit_amount: 29900, // €299.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: email,
      metadata: {
        firstName,
        lastName,
        email,
        phone,
        company: company || "",
        date,
        message: message || "",
      },
    });

    console.log("Stripe session created successfully:", session.id);

    // Store booking in database (pending status)
    const bookingId = `booking:${Date.now()}:${email}`;
    await kv.set(bookingId, {
      id: bookingId,
      firstName,
      lastName,
      email,
      phone,
      company: company || "",
      date,
      message: message || "",
      amount: 299,
      status: "pending",
      stripeSessionId: session.id,
      createdAt: new Date().toISOString(),
    });

    console.log(`Booking created: ${bookingId} for ${email}`);
    console.log("Checkout URL:", session.url);
    console.log("=== CREATE CHECKOUT SESSION SUCCESS ===");

    return c.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error("=== CREATE CHECKOUT SESSION ERROR ===");
    console.error("Error type:", error.constructor.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    
    return c.json(
      { 
        error: "Fehler beim Erstellen der Checkout-Session", 
        details: error.message || String(error)
      },
      500
    );
  }
});

// Stripe Webhook - Handle successful payments
app.post("/make-server-98da7db4/stripe-webhook", async (c) => {
  try {
    const signature = c.req.header("stripe-signature");
    const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");

    if (!signature || !webhookSecret) {
      return c.json({ error: "Missing webhook signature or secret" }, 400);
    }

    const body = await c.req.text();
    
    // Verify webhook signature
    let event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error("Webhook signature verification failed:", err.message);
      return c.json({ error: "Invalid signature" }, 400);
    }

    // Handle successful payment
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const metadata = session.metadata;

      // Find and update booking status
      const bookings = await kv.getByPrefix(`booking:`);
      const booking = bookings.find(
        (b) => b.value.stripeSessionId === session.id
      );

      if (booking) {
        await kv.set(booking.value.id, {
          ...booking.value,
          status: "paid",
          paidAt: new Date().toISOString(),
          stripePaymentIntent: session.payment_intent,
        });

        console.log(`Payment confirmed for booking: ${booking.value.id}`);
      }
    }

    return c.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return c.json({ error: "Webhook handler failed", details: error.message }, 500);
  }
});

// Get all bookings (for admin purposes)
app.get("/make-server-98da7db4/bookings", async (c) => {
  try {
    const bookings = await kv.getByPrefix("booking:");
    const sortedBookings = bookings
      .map((b) => b.value)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return c.json({ bookings: sortedBookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return c.json({ error: "Fehler beim Abrufen der Buchungen", details: error.message }, 500);
  }
});

Deno.serve(app.fetch);