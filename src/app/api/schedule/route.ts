// * NextJS
import { NextRequest, NextResponse } from "next/server";

// * Services
import { createScheduleDate, getScheduleDates } from "./service";

// * Zod
import { ZodError } from "zod";

export async function GET() {
  try {
    const scheduleDates = await getScheduleDates();
    return NextResponse.json({ data: scheduleDates });
  } catch (error: any) {
    console.error("GET - /api/schedule: ", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch schedule dates" },
      { status: error.statusCode || 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const scheduleDate = await createScheduleDate(body);
    return NextResponse.json({ data: scheduleDate }, { status: 201 });
  } catch (error: any) {
    console.error("POST - /api/schedule: ", error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: error.message || "Failed to create schedule date" },
      { status: error.statusCode || 500 },
    );
  }
}
