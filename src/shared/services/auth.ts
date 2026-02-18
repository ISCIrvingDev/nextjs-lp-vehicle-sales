"use server";

// * Models
import { RegisterData } from "./models/auth";

// * Envs
const vehicleSalesApi = process.env.VEHICLE_SALES_API_URL!;

export async function verify(token: string | null) {
  const response = await fetch(`${vehicleSalesApi}/api/auth/verify`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Invalid token");

  return response.json();
}

export async function login(email: string, password: string) {
  const response = await fetch(`${vehicleSalesApi}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
}

export async function register(userData: RegisterData) {
  const response = await fetch(`${vehicleSalesApi}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response.json();
}

export async function refreshToken(token: string | null) {
  const response = await fetch(`${vehicleSalesApi}/api/auth/refresh-token`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Token refresh failed");
  }

  return response.json();
}
