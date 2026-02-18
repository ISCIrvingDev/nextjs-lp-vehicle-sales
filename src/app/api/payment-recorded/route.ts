// * NextJS
import { NextRequest, NextResponse } from "next/server";

// * Services
import { upsertPurchase } from "./service";

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

    const data = await upsertPurchase(sessionId);

    return NextResponse.json({
      purchase: {
        id: data.id,
        stripeSessionId: data.stripeSessionId,
        stripePaymentId: data.stripePaymentId,
        amount: data.amount,
        currency: data.currency,
        customerEmail: data.customerEmail,
        customerName: data.customerName,
        status: data.status,
        receiptUrl: data.receiptUrl,
        createdAt: data.createdAt,
      },
    });
  } catch (error: any) {
    console.error("GET - /api/payment-recorded: ", error);

    return NextResponse.json(
      { error: error.message || "Failed to fetch payment details" },
      { status: error.statusCode || 500 },
    );
  }
}
