// * NextJS
import { NextResponse } from "next/server";

// * Repositories
import { dbDmsByIvinDev } from "@/shared/lib/db-dms-by-ivin-dev";

// * Stripe
import { stripe } from "@/shared/lib/stripe";
import Stripe from "stripe";

export async function upsertPurchase(sessionId: string) {
  // Check if purchase already exists in database
  let purchase = await dbDmsByIvinDev.systemPurchase.findUnique({
    where: { stripeSessionId: sessionId },
  });

  // If not found, fetch from Stripe and save to database
  if (!purchase) {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["payment_intent.latest_charge"],
    });

    if (!session) {
      throw new Error("Session not found");
    }

    // Forzamos a TS a tratar payment_intent como el objeto expandido
    const paymentIntent = session.payment_intent as Stripe.PaymentIntent;
    const latestCharge = paymentIntent?.latest_charge as Stripe.Charge;
    const receiptUrl = latestCharge?.receipt_url;

    // Create purchase record in database
    purchase = await dbDmsByIvinDev.systemPurchase.create({
      data: {
        stripeSessionId: sessionId,
        stripePaymentId:
          typeof session.payment_intent === "string"
            ? session.payment_intent
            : session.payment_intent?.id,
        amount: (session.amount_total || 0) / 100, // Convert from cents
        currency: session.currency?.toUpperCase(),
        customerId:
          session.customer &&
          typeof session.customer === "string" &&
          session.customer !== "null"
            ? session.customer
            : null,
        customerName: session.customer_details?.name,
        customerEmail: session.customer_details?.email,
        customerPhone: session.customer_details?.phone,
        customerBusinessName: session.customer_details?.business_name,
        customerCountry: session.customer_details?.address?.country,
        customerState: session.customer_details?.address?.state,
        customerCity: session.customer_details?.address?.city,
        status: session.status,
        receiptUrl: receiptUrl, // Acceder a la URL del recibo (usando optional chaining por seguridad)
      },
    });
  }

  return purchase;
}
