import { DAYS, PERIODS } from "@/lib/demo-data";

export function SchedulePhoto() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[10px] bg-paper shadow-[0_18px_40px_-24px_rgba(26,25,23,0.45)] ring-1 ring-black/5">
        <div className="flex items-center justify-between border-b border-black/10 px-3 py-2">
          <p className="font-mono text-[9px] tracking-[0.18em] text-black/45">
            FALL TERM · GRID 4A
          </p>
          <p className="font-mono text-[9px] text-black/30">rev. 3</p>
        </div>

        <div className="px-3 pb-3 pt-2">
          <div className="grid grid-cols-[26px_repeat(5,1fr)] gap-px">
            <div />
            {DAYS.map((day) => (
              <p
                key={day}
                className="pb-1 text-center font-mono text-[9px] tracking-wider text-black/40"
              >
                {day}
              </p>
            ))}

            {PERIODS.map((period) => (
              <div key={period.period} className="contents">
                <div className="flex flex-col justify-center pr-1 text-right">
                  <span className="font-mono text-[9px] font-medium text-black/50">
                    {period.period}
                  </span>
                  <span className="font-mono text-[8px] text-black/30">{period.time}</span>
                </div>
                {period.grid[0].map((cell, i) => (
                  <div
                    key={`${period.period}-${i}`}
                    className="flex h-9 items-center justify-center border border-black/8 bg-white/45 px-0.5"
                  >
                    <span
                      className="font-mono text-[8px] leading-tight text-black/65"
                      style={{
                        // Slight per-cell jitter so the grid reads as a printed
                        // sheet rather than a UI mock.
                        transform: `translateY(${i % 2 === 0 ? "-0.3px" : "0.4px"})`,
                      }}
                    >
                      {cell}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="mt-2 font-mono text-[8px] leading-tight text-black/35">
            rooms posted at door · finals in dec · subject to change
          </p>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.55),transparent_55%)]"
        />
      </div>
    </div>
  );
}