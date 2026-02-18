"use server";

// * Envs
const vehicleSalesApi = process.env.VEHICLE_SALES_API_URL!;

export async function getPaymentDetails(sessionId: string) {
  const response = await fetch(
    `${vehicleSalesApi}/api/payment-recorded?sessionId=${sessionId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.json();
}
