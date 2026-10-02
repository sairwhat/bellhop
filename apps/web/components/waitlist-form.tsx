"use client";

import { useActionState } from "react";
import { joinWaitlist, type WaitlistState } from "@/app/actions";

const initial: WaitlistState = { status: "idle", message: "" };

export function WaitlistForm() {
  const [state, action, pending] = useActionState<WaitlistState, FormData>(joinWaitlist, initial);

  if (state.status === "success") {
    return (
      <p className="glass glass-edge-light rounded-2xl px-4 py-3.5 text-[13px] text-lavender-soft">
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-2.5 sm:flex-row">
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
        className="glass min-w-0 flex-1 rounded-full px-4 py-3 text-[14px] text-ink placeholder:text-faint focus:outline-none"
      />
      <button
        type="submit"
        disabled={pending}
        className="btn-primary shrink-0 rounded-full px-6 py-3 text-[14px] font-medium whitespace-nowrap disabled:opacity-60"
      >
        {pending ? "Joining…" : "Count me in"}
      </button>

      {state.status === "error" && (
        <p id="waitlist-error" role="alert" className="text-[12px] text-muted">
          {state.message}
        </p>
      )}
    </form>
  );
}
