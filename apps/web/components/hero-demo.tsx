"use client";

import { useEffect, useState } from "react";
import { OcrRaw } from "@/components/ocr-raw";
import { ScheduleTable } from "@/components/schedule-table";

export function HeroDemo() {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCycle((c) => c + 1), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <OcrRaw />
        <ScheduleTable cycle={cycle} />
      </div>

      <div className="mt-3 flex items-center gap-2.5">
        <span className="h-px flex-1 bg-line" />
        <p className="font-mono text-[9px] tracking-[0.14em] text-faint">
          OCR TEXT IN · EDITABLE WEEK OUT
        </p>
        <span className="h-px flex-1 bg-line" />
      </div>
    </div>
  );
}