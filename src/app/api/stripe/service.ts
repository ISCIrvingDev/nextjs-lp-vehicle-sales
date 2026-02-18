// * NextJS
import { headers } from "next/headers";

// * Stripe
import { stripe } from "@/shared/lib/stripe";

export async function createCheckoutSession() {
  const headersList = await headers();
  const origin = headersList.get("origin");

  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, price_1234) of the product you want to sell
        price: "price_1SupoePPy8oJFJQl1fNmeGDb",
        quantity: 1,
      },
    ],
    mode: "payment",
    // cancel_url: `${origin}/payment-canceled/{CHECKOUT_SESSION_ID}`,
    success_url: `${origin}/payment-recorded/{CHECKOUT_SESSION_ID}`, // {CHECKOUT_SESSION_ID}: Es una variable especial (un marcador de posición o placeholder) que Stripe reemplaza automáticamente por el ID único de la sesión real una vez que el cliente completa el pago y es redirigido a tu página de éxito (success_url).
    automatic_tax: { enabled: true },
  });

  return session;
}
