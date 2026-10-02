"use server";

import type { WaitlistState } from "@/components/waitlist-form";

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const email = String(formData.get("email") ?? "").trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "That does not look like an email address." };
  }

  return { status: "success", message: "You are on the list." };
}