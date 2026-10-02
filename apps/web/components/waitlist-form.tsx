"use client";

import { useActionState } from "react";
import { joinWaitlist } from "@/app/actions";

export type WaitlistState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initial: WaitlistState = { status: "idle", message: "" };

export function WaitlistForm() {
  const [state, action, pending] = useActionState<WaitlistState, FormData>(
    joinWaitlist,
    initial
  );

  if (state.status === "success") {
    return (
      <p className="rounded-[var(--radius-card)] border border-lavender-edge bg-lavender-wash px-4 py-3 text-[13px] text-lavender-deep">
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-2 sm:flex-row">
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@school.edu"
        aria-describedby={state.status === "error" ? "waitlist-error" : undefined}
        className="min-w-0 flex-1 rounded-full border border-line bg-surface px-4 py-2.5 text-[14px] placeholder:text-faint focus:border-lavender focus:outline-none"
      />
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-lavender px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-lavender-deep disabled:opacity-60"
      >
        {pending ? "Joining…" : "Notify me"}
      </button>

      {state.status === "error" && (
        <p id="waitlist-error" role="alert" className="text-[12px] text-muted">
          {state.message}
        </p>
      )}
    </form>
  );
}