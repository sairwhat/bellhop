"use client";

import { useEffect, useState } from "react";
import { SchedulePhoto } from "@/components/schedule-photo";
import { ScheduleTable } from "@/components/schedule-table";

export function HeroDemo() {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCycle((c) => c + 1), 3400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.15fr)] sm:items-center">
      <div className="relative">
        <SchedulePhoto />
        <div
          aria-hidden
          className="bh-scan pointer-events-none absolute inset-x-0 top-0 h-24"
          style={{
            background:
              "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--color-lavender) 22%, transparent), transparent)",
          }}
        />
        <p className="mt-2.5 text-center font-mono text-[9px] tracking-[0.14em] text-faint">
          YOUR PHOTO
        </p>
      </div>

      <div aria-hidden className="hidden justify-center sm:flex">
        <span className="font-mono text-xs text-lavender">→</span>
      </div>

      <div>
        <ScheduleTable cycle={cycle} />
        <p className="mt-2.5 text-center font-mono text-[9px] tracking-[0.14em] text-faint">
          SORTED · EDITABLE
        </p>
      </div>
    </div>
  );
}