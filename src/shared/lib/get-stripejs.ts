import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

export const getStripeJS = () => {
  if (!stripePromise) {
    // Usa la clave pública (debe empezar con NEXT_PUBLIC_ para ser visible en el cliente)
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};
