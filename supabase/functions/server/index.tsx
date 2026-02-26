import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import Stripe from "npm:stripe@17.4.0";
import * as kv from "./kv_store.tsx";

// Helper for sending Emails via Resend
async function sendEmail(to: string, subject: string, html: string) {
  const resendKey = Deno.env.get("RESEND_API_KEY");
  if (!resendKey) {
    console.log("RESEND_API_KEY missing - skipping email to " + to);
    return;
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: "KI Kurs <info@zwischenpromptundpanik.de>", 
        to: [to],
        subject: subject,
        html: html,
      }),
    });
    if (!res.ok) console.error("Resend Error:", await res.text());
  } catch (e) {
    console.error("Resend Exception:", e);
  }
}

// Customer confirmation email template
function getCustomerEmailTemplate(firstName: string, date: string, amount: number): string {
  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Buchungsbestätigung</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #000000;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000;">
        <tr>
          <td align="center" style="padding: 40px 20px;">
            <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.5);">
              
              <!-- Header -->
              <tr>
                <td style="padding: 40px 40px 30px; text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                  <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                    ✨ Buchung bestätigt!
                  </h1>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding: 40px;">
                  <p style="margin: 0 0 20px; color: #e0e0e0; font-size: 18px; line-height: 1.6;">
                    Hallo <strong style="color: #ffffff;">${firstName}</strong>,
                  </p>
                  
                  <p style="margin: 0 0 30px; color: #b0b0b0; font-size: 16px; line-height: 1.6;">
                    vielen Dank für deine Buchung! Wir freuen uns sehr, dich beim KI-Kurs begrüßen zu dürfen.
                  </p>

                  <!-- Info Box -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(102, 126, 234, 0.1); border-radius: 12px; border-left: 4px solid #667eea; margin: 0 0 30px;">
                    <tr>
                      <td style="padding: 25px;">
                        <p style="margin: 0 0 12px; color: #a0a0a0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">
                          📅 Termin
                        </p>
                        <p style="margin: 0 0 20px; color: #ffffff; font-size: 20px; font-weight: 600;">
                          ${date}
                        </p>
                        
                        <p style="margin: 0 0 8px; color: #a0a0a0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">
                          💰 Betrag
                        </p>
                        <p style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 600;">
                          ${amount.toFixed(2)} €
                        </p>
                      </td>
                    </tr>
                  </table>

                  <!-- Next Steps -->
                  <div style="background: rgba(255, 255, 255, 0.03); border-radius: 12px; padding: 25px; margin: 0 0 30px;">
                    <h3 style="margin: 0 0 15px; color: #ffffff; font-size: 18px; font-weight: 600;">
                      🚀 Nächste Schritte:
                    </h3>
                    <ul style="margin: 0; padding-left: 20px; color: #b0b0b0; font-size: 15px; line-height: 1.8;">
                      <li style="margin-bottom: 8px;">Du erhältst ca. 7 Tage vor dem Kurs weitere Details per E-Mail</li>
                      <li style="margin-bottom: 8px;">Bereite gerne vorab Fragen vor, die du im Kurs klären möchtest</li>
                      <li style="margin-bottom: 0;">Bei Fragen sind wir jederzeit für dich da</li>
                    </ul>
                  </div>

                  <p style="margin: 0 0 8px; color: #b0b0b0; font-size: 15px; line-height: 1.6;">
                    Wir freuen uns auf dich!
                  </p>
                  <p style="margin: 0; color: #ffffff; font-size: 15px; font-weight: 500;">
                    Dein Team von Zwischen Prompt und Panik
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding: 30px 40px; background-color: #0a0a0a; border-top: 1px solid rgba(255,255,255,0.1);">
                  <p style="margin: 0 0 10px; color: #666666; font-size: 13px; text-align: center;">
                    Bei Fragen erreichst du uns unter:
                  </p>
                  <p style="margin: 0; color: #888888; font-size: 13px; text-align: center;">
                    <a href="mailto:info@zwischenpromptundpanik.de" style="color: #667eea; text-decoration: none;">info@zwischenpromptundpanik.de</a>
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

// Admin notification email template
function getAdminEmailTemplate(firstName: string, lastName: string, email: string, phone: string, date: string, company: string, amount: number): string {
  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Neue Buchung</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #000000;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000;">
        <tr>
          <td align="center" style="padding: 40px 20px;">
            <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.5);">
              
              <!-- Header -->
              <tr>
                <td style="padding: 40px 40px 30px; text-align: center; background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
                  <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                    🎉 Neue Buchung!
                  </h1>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding: 40px;">
                  <p style="margin: 0 0 30px; color: #b0b0b0; font-size: 16px; line-height: 1.6;">
                    Eine neue Buchung ist eingegangen und wurde erfolgreich bezahlt.
                  </p>

                  <!-- Customer Info -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(16, 185, 129, 0.1); border-radius: 12px; border-left: 4px solid #10b981; margin: 0 0 20px;">
                    <tr>
                      <td style="padding: 25px;">
                        <h3 style="margin: 0 0 15px; color: #ffffff; font-size: 18px; font-weight: 600;">
                          👤 Kundendaten
                        </h3>
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 8px 0; color: #888888; font-size: 14px; width: 120px;">Name:</td>
                            <td style="padding: 8px 0; color: #ffffff; font-size: 14px; font-weight: 500;">${firstName} ${lastName}</td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #888888; font-size: 14px;">E-Mail:</td>
                            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #10b981; text-decoration: none; font-size: 14px;">${email}</a></td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #888888; font-size: 14px;">Telefon:</td>
                            <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #10b981; text-decoration: none; font-size: 14px;">${phone}</a></td>
                          </tr>
                          ${company ? `
                          <tr>
                            <td style="padding: 8px 0; color: #888888; font-size: 14px;">Firma:</td>
                            <td style="padding: 8px 0; color: #ffffff; font-size: 14px; font-weight: 500;">${company}</td>
                          </tr>
                          ` : ''}
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Booking Info -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(102, 126, 234, 0.1); border-radius: 12px; border-left: 4px solid #667eea;">
                    <tr>
                      <td style="padding: 25px;">
                        <h3 style="margin: 0 0 15px; color: #ffffff; font-size: 18px; font-weight: 600;">
                          📋 Buchungsdetails
                        </h3>
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 8px 0; color: #888888; font-size: 14px; width: 120px;">Termin:</td>
                            <td style="padding: 8px 0; color: #ffffff; font-size: 14px; font-weight: 500;">${date}</td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #888888; font-size: 14px;">Betrag:</td>
                            <td style="padding: 8px 0; color: #10b981; font-size: 16px; font-weight: 600;">${amount.toFixed(2)} €</td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #888888; font-size: 14px;">Status:</td>
                            <td style="padding: 8px 0;">
                              <span style="display: inline-block; background-color: #10b981; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                ✓ Bezahlt
                              </span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding: 30px 40px; background-color: #0a0a0a; border-top: 1px solid rgba(255,255,255,0.1);">
                  <p style="margin: 0; color: #666666; font-size: 13px; text-align: center;">
                    Diese Benachrichtigung wurde automatisch generiert
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

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

        // Send notifications
        const { firstName, email, phone, date } = booking.value;
        const adminEmail = Deno.env.get("ADMIN_EMAIL");

        // 1. Email to Customer
        await sendEmail(
            email, 
            "Buchungsbestätigung: KI-Kurs", 
            getCustomerEmailTemplate(firstName, date, booking.value.amount)
        );

        // 2. Email to Admin
        if (adminEmail) {
            await sendEmail(
                adminEmail,
                "Neue Buchung!",
                getAdminEmailTemplate(firstName, lastName, email, phone, date, booking.value.company, booking.value.amount)
            );
        }
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

// Test email endpoint
app.post("/make-server-98da7db4/test-email", async (c) => {
  try {
    const body = await c.req.json();
    const { email, type } = body;

    if (!email) {
      return c.json({ error: "E-Mail-Adresse erforderlich" }, 400);
    }

    const testData = {
      firstName: "Max",
      lastName: "Mustermann",
      email: email,
      phone: "+49 151 12345678",
      company: "Mustermann GmbH",
      date: "4. April 2026, 09:00 Uhr",
      amount: 299
    };

    if (type === "customer" || !type) {
      // Send customer confirmation email
      await sendEmail(
        email,
        "TEST: Buchungsbestätigung KI-Kurs",
        getCustomerEmailTemplate(testData.firstName, testData.date, testData.amount)
      );
      console.log(`Test customer email sent to: ${email}`);
    }

    if (type === "admin" || !type) {
      // Send admin notification email
      await sendEmail(
        email,
        "TEST: Neue Buchung",
        getAdminEmailTemplate(
          testData.firstName,
          testData.lastName,
          testData.email,
          testData.phone,
          testData.date,
          testData.company,
          testData.amount
        )
      );
      console.log(`Test admin email sent to: ${email}`);
    }

    return c.json({ 
      success: true, 
      message: `Test-E-Mail(s) erfolgreich an ${email} gesendet!`,
      type: type || "both"
    });
  } catch (error) {
    console.error("Test email error:", error);
    return c.json({ error: "Fehler beim Senden der Test-E-Mail", details: error.message }, 500);
  }
});

Deno.serve(app.fetch);