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
      <p className="rounded-[var(--radius-panel)] border border-lavender-edge bg-lavender-wash px-4 py-3.5 text-[13px] text-lavender-soft">
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
        className="min-w-0 flex-1 rounded-full border border-line bg-surface px-4 py-3 text-[14px] text-ink placeholder:text-muted focus:border-lavender focus:outline-none"
      />
      {/* Dark ink on the light lavender fill keeps this above WCAG AA, which
          white text on this accent would not. */}
      <button
        type="submit"
        disabled={pending}
        className="shrink-0 rounded-full bg-lavender px-6 py-3 text-[14px] font-medium whitespace-nowrap text-canvas transition-all hover:bg-lavender-soft active:translate-y-[1px] disabled:opacity-60"
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