// * NextJS
import { NextRequest, NextResponse } from "next/server";

// * Repositories
import { dbDmsByIvinDev } from "@/shared/lib/db-dms-by-ivin-dev";
import { stripe } from "@/shared/lib/stripe";
import Stripe from "stripe";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("sessionId");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 },
      );
    }

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
        return NextResponse.json(
          { error: "Session not found" },
          { status: 404 },
        );
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

    return NextResponse.json({
      purchase: {
        id: purchase.id,
        stripeSessionId: purchase.stripeSessionId,
        stripePaymentId: purchase.stripePaymentId,
        amount: purchase.amount,
        currency: purchase.currency,
        customerEmail: purchase.customerEmail,
        customerName: purchase.customerName,
        status: purchase.status,
        receiptUrl: purchase.receiptUrl,
        createdAt: purchase.createdAt,
      },
    });
  } catch (error: any) {
    console.error("1 - /api/payment-recorded: ", error);

    return NextResponse.json(
      { error: error.message || "Failed to fetch payment details" },
      { status: 500 },
    );
  }
}
