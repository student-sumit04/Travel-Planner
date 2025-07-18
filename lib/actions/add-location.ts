"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

async function geocodeAddress(address: string) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      console.error("Missing Google Maps API key");
      return null;
    }

    const encodedAddress = encodeURIComponent(address);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "OK" && data.results.length > 0) {
      const location = data.results[0].geometry.location;
      return {
        lat: location.lat,
        lng: location.lng,
      };
    }

    console.error("Geocoding failed:", data.status, data.error_message);
    return null;
  } catch (error) {
    console.error("Geocoding error:", error);
    return null;
  }
}

export async function addLocation(formData: FormData, tripId: string) {
  const session = await auth();
  if (!session) {
    return { error: "Not authenticated" };
  }

  const address = formData.get("address")?.toString();
  if (!address) {
    return { error: "Missing address" };
  }

  const geo = await geocodeAddress(address);
  if (!geo) {
    return { error: "Could not find location. Please try a more specific address." };
  }

  const { lat, lng } = geo;

  try {
    const count = await prisma.location.count({
      where: { tripId },
    });

    await prisma.location.create({
      data: {
        locationTitle: address,
        lat,
        lng,
        tripId,
        order: count,
      },
    });
  } catch (error) {
    console.error("Database error:", error);
    return { error: "Failed to save location" };
  }

  // Success: redirect to trip page (MOVED OUTSIDE try-catch)
  redirect(`/trips/${tripId}`);
}