"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { addLocation } from "@/lib/actions/add-location";

export default function NewLocationClient({ tripId }: { tripId: string }) {
  const [isPending, startTransition] = useTransition();
  const [address, setAddress] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const formData = new FormData();
      formData.append("address", address);
      const result = await addLocation(formData, tripId);
      if (result?.error) {
        setError(result.error);
      } else {
        // Navigate back to trip page and refresh
        router.push(`/trips/${tripId}`);
        router.refresh();
      }
    });
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-6">
            Add New Location
          </h1>
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            suppressHydrationWarning
          >
            <div>
              <label
                htmlFor="location-address"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Address
              </label>
              <input
                id="location-address"
                name="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                autoComplete="street-address"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                suppressHydrationWarning
              />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <Button
              type="submit"
              className="w-full"
              disabled={isPending}
              suppressHydrationWarning
            >
              {isPending ? "Adding..." : "Add Location"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
