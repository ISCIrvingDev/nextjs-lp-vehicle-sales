// * NextJS
import { NextResponse } from "next/server";

// * Services
import { createCheckoutSession } from "./service";

export async function POST() {
  try {
    const data = await createCheckoutSession();

    const url = data.url || "";

    // return NextResponse.redirect(url, 303);
    return NextResponse.json({ url });
  } catch (error: any) {
    console.error("POST - /api/stripe: ", error);

    return NextResponse.json(
      { error: error.message },
      { status: error.statusCode || 500 },
    );
  }
}
