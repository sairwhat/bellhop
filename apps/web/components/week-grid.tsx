import { DAY_NAMES, HOUR_LABELS, WEEK, type Block } from "@/lib/demo-data";

const ROW = 28;
const FIRST_HOUR = 8;

function slotToTime(slot: number) {
  const hour = FIRST_HOUR + Math.floor(slot / 2);
  const minutes = slot % 2 === 0 ? "00" : "30";
  const display = hour > 12 ? hour - 12 : hour;
  return `${display}:${minutes}`;
}

export function WeekGrid() {
  return (
    <div
      className="overflow-hidden rounded-2xl ring-1 ring-line"
      style={{ background: "var(--color-screen)" }}
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <p className="text-[13px] font-medium">Fall term</p>
        <p className="font-mono text-[10px] tracking-[0.1em] text-faint">
          {WEEK.length} CLASSES
        </p>
      </div>

      {/* Below md a five column grid cannot hold a course name legibly, so the
          same data renders as a day-by-day agenda rather than a squeezed grid. */}
      <div className="hidden md:block">
        <div
          className="grid p-4"
          style={{
            gridTemplateColumns: "3.75rem repeat(5, minmax(0, 1fr))",
            gridAutoRows: `${ROW}px`,
            columnGap: "8px",
          }}
        >
          <div />
          {DAY_NAMES.map((day) => (
            <p key={day} className="pb-2 text-[11px] font-medium tracking-wide text-muted">
              {day}
            </p>
          ))}

          {HOUR_LABELS.map((hour) => (
            <p
              key={hour.slot}
              className="font-mono text-[10px] leading-none text-faint"
              style={{ gridRow: hour.slot + 2, gridColumn: 1 }}
            >
              {hour.label}
            </p>
          ))}

          {/* Hour rules only. Half hour lines were noise behind the blocks. */}
          {HOUR_LABELS.map((hour) => (
            <div
              key={`r-${hour.slot}`}
              aria-hidden
              className="border-t border-line"
              style={{ gridRow: hour.slot + 2, gridColumn: "2 / span 5" }}
            />
          ))}

          {WEEK.map((block) => (
            <Cell key={`${block.code}-${block.day}`} block={block} />
          ))}
        </div>
      </div>

      <ul className="divide-y divide-line md:hidden">
        {DAY_NAMES.map((day, i) => {
          const items = WEEK.filter((b) => b.day === i).sort((a, b) => a.slot - b.slot);
          if (!items.length) return null;

          return (
            <li key={day} className="px-5 py-4">
              <p className="text-[11px] font-medium tracking-wide text-muted">{day}</p>
              <ul className="mt-2.5 space-y-2">
                {items.map((block) => (
                  <li key={`${block.code}-${block.slot}`} className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="h-9 w-[3px] shrink-0 rounded-full"
                      style={{ background: block.color }}
                    />
                    <span className="w-[42px] shrink-0 font-mono text-[10.5px] text-faint">
                      {slotToTime(block.slot)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[13.5px] leading-tight font-medium">
                        {block.course}
                      </span>
                      <span className="block truncate font-mono text-[10px] text-faint">
                        {block.code} · {block.room}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Cell({ block }: { block: Block }) {
  // Short blocks cannot carry two lines, so the room drops out rather than
  // being clipped through the middle.
  const compact = block.span <= 2;

  return (
    <div
      className="m-[2px] flex flex-col justify-center overflow-hidden rounded-lg px-2 py-1"
      style={{
        gridRow: `${block.slot + 2} / span ${block.span}`,
        gridColumn: block.day + 2,
        background: `color-mix(in oklab, ${block.color} 26%, var(--color-screen))`,
        boxShadow: `inset 3px 0 0 0 ${block.color}`,
      }}
    >
      <p className="truncate text-[12px] leading-tight font-medium">{block.course}</p>
      {!compact && (
        <p className="truncate font-mono text-[9.5px] leading-tight text-muted">
          {block.code} · {block.room}
        </p>
      )}
    </div>
  );
}
