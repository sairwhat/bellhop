import { CLASSES } from "@/lib/demo-data";

const SWATCHES = ["#8b7cff", "#4fb59f", "#d98a5b", "#c9648f", "#5f92d8"];

export function ScheduleTable({ cycle = 0 }: { cycle?: number }) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-panel)] bg-surface ring-1 ring-line">
      <div className="flex items-center justify-between border-b border-line px-3.5 py-2.5">
        <p className="text-[12px] font-medium text-ink">This week</p>
        <p className="font-mono text-[9px] tracking-[0.14em] text-faint">
          {CLASSES.length} CLASSES
        </p>
      </div>

      <ul className="divide-y divide-line">
        {CLASSES.map((item, i) => (
          <li
            // cycle in the key replays the stagger each time the scan completes
            key={`${item.short}-${item.day}-${cycle}`}
            className="bh-rise flex items-center gap-2.5 px-3.5 py-2"
            style={{ animationDelay: `${i * 42}ms` }}
          >
            <span
              aria-hidden
              className="size-1.5 shrink-0 rounded-full"
              style={{ background: SWATCHES[i % SWATCHES.length] }}
            />
            <span className="flex-1 truncate text-[12px] text-ink">{item.course}</span>
            <span className="shrink-0 font-mono text-[9.5px] text-faint">
              {item.day.slice(0, 3)}
            </span>
            <span className="shrink-0 font-mono text-[9.5px] text-muted">{item.time}</span>
            <span className="w-11 shrink-0 text-right font-mono text-[9.5px] text-muted">
              {item.room}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}