"use server";

import { ScheduleDateInput } from "@/shared/models/schedule";

export async function createScheduleDate(data: ScheduleDateInput) {
  const response = await fetch(
    `${process.env.VEHICLE_SALES_API_URL}/api/schedule`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );

  return response.json();
}

// export async function getScheduleDates() {
//   const response = await fetch(
//     `${process.env.VEHICLE_SALES_API_URL}/api/schedule`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     },
//   );

//   return response.json();
// }
