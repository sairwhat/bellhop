import { CLASSES } from "@/lib/demo-data";

const SWATCHES = ["#7c6af0", "#4a9d8f", "#d97a4a", "#c0557f", "#5b7fd4"];

export function ScheduleTable({ cycle = 0 }: { cycle?: number }) {
  return (
    <div className="overflow-hidden rounded-[10px] bg-surface shadow-[0_18px_40px_-24px_rgba(26,25,23,0.45)] ring-1 ring-line">
      <div className="flex items-center justify-between border-b border-line px-3 py-2">
        <p className="text-[11px] font-medium text-ink">Your week</p>
        <p className="font-mono text-[9px] tracking-wider text-faint">
          {CLASSES.length} classes
        </p>
      </div>

      <ul className="divide-y divide-line">
        {CLASSES.map((item, i) => (
          <li
            // cycle in the key replays the stagger each time the scan finishes
            key={`${item.short}-${item.day}-${cycle}`}
            className="bh-rise flex items-center gap-2.5 px-3 py-1.5"
            style={{ animationDelay: `${i * 42}ms` }}
          >
            <span
              aria-hidden
              className="size-1.5 shrink-0 rounded-full"
              style={{ background: SWATCHES[i % SWATCHES.length] }}
            />
            <span className="flex-1 truncate text-[11px] text-ink">{item.course}</span>
            <span className="shrink-0 font-mono text-[9px] text-faint">
              {item.day.slice(0, 3)}
            </span>
            <span className="shrink-0 font-mono text-[9px] text-muted">{item.time}</span>
            <span className="w-11 shrink-0 text-right font-mono text-[9px] text-muted">
              {item.room}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}