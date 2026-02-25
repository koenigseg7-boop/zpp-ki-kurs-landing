import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { PaymentSuccess } from "./pages/PaymentSuccess";
import { PaymentDenied } from "./pages/PaymentDenied";
import { PaymentCanceled } from "./pages/PaymentCanceled";
import { Admin } from "./pages/Admin";
import { Impressum } from "./pages/Impressum";
import { Datenschutz } from "./pages/Datenschutz";
import { AGB } from "./pages/AGB";
import EmailTest from "./pages/EmailTest";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/payment/success",
    Component: PaymentSuccess,
  },
  {
    path: "/payment/denied",
    Component: PaymentDenied,
  },
  {
    path: "/payment/canceled",
    Component: PaymentCanceled,
  },
  {
    path: "/admin",
    Component: Admin,
  },
  {
    path: "/impressum",
    Component: Impressum,
  },
  {
    path: "/datenschutz",
    Component: Datenschutz,
  },
  {
    path: "/agb",
    Component: AGB,
  },
  {
    path: "/email-test",
    Component: EmailTest,
  },
]);