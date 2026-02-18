// * NextJS
import { NextResponse } from "next/server";

// * Repositories
import { dbDmsByIvinDev } from "@/shared/lib/db-dms-by-ivin-dev";

// * Zod
import { z } from "zod";

const scheduleDateSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  companyAddress: z.string().min(1, "Company address is required"),
  firtName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(7, "Phone number must be at least 7 characters"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  zip: z.string().min(1, "ZIP code is required"),
  message: z.string().optional(),
});

export type ScheduleDateInput = z.infer<typeof scheduleDateSchema>;

export async function createScheduleDate(data: unknown) {
  const validatedData = scheduleDateSchema.parse(data);

  const scheduleDate = await dbDmsByIvinDev.scheduleDate.create({
    data: {
      companyName: validatedData.companyName,
      companyAddress: validatedData.companyAddress,
      firtName: validatedData.firtName,
      lastName: validatedData.lastName,
      email: validatedData.email,
      phoneNumber: validatedData.phoneNumber,
      country: validatedData.country,
      state: validatedData.state,
      city: validatedData.city,
      zip: validatedData.zip,
      message: validatedData.message,
    },
  });

  return scheduleDate;
}

export async function getScheduleDates() {
  const scheduleDates = await dbDmsByIvinDev.scheduleDate.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "desc" },
  });

  return scheduleDates;
}
