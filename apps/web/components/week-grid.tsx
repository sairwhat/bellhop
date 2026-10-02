import { DAY_NAMES, HOUR_LABELS, SLOT_COUNT, WEEK, type Block } from "@/lib/demo-data";

const ROW = 26;

export function WeekGrid() {
  return (
    <div className="glass-inset overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-2.5">
        <p className="text-[12px] font-medium">Fall term</p>
        <p className="font-mono text-[9.5px] tracking-[0.12em] text-faint">
          {WEEK.length} CLASSES
        </p>
      </div>

      <div className="overflow-x-auto">
        <div
          className="min-w-[44rem] p-3.5"
          style={{
            display: "grid",
            gridTemplateColumns: "3rem repeat(5, minmax(0, 1fr))",
            gridAutoRows: `${ROW}px`,
            columnGap: "5px",
          }}
        >
          <div />
          {DAY_NAMES.map((day) => (
            <p key={day} className="pb-1.5 text-[10.5px] font-medium tracking-wide text-muted">
              {day}
            </p>
          ))}

          {HOUR_LABELS.map((hour) => (
            <p
              key={hour.slot}
              className="font-mono text-[9px] leading-none text-faint"
              style={{ gridRow: hour.slot + 2, gridColumn: 1 }}
            >
              {hour.label}
            </p>
          ))}

          {DAY_NAMES.map((day, i) => (
            <div
              key={`r-${day}`}
              aria-hidden
              className="border-l border-white/8"
              style={{ gridRow: `2 / span ${SLOT_COUNT}`, gridColumn: i + 2 }}
            />
          ))}

          {Array.from({ length: SLOT_COUNT }, (_, i) => (
            <div
              key={`h-${i}`}
              aria-hidden
              className="border-t border-white/6"
              style={{ gridRow: i + 2, gridColumn: "2 / span 5", opacity: i % 2 === 0 ? 0.9 : 0.3 }}
            />
          ))}

          {WEEK.map((block) => (
            <Cell key={`${block.code}-${block.day}`} block={block} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Cell({ block }: { block: Block }) {
  return (
    <div
      className="m-[1px] flex flex-col justify-center overflow-hidden rounded-[7px] px-1.5 py-0.5"
      style={{
        gridRow: `${block.slot + 2} / span ${block.span}`,
        gridColumn: block.day + 2,
        background: `color-mix(in oklab, ${block.color} 26%, transparent)`,
        boxShadow: `inset 2px 0 0 0 ${block.color}`,
      }}
    >
      <p className="truncate text-[10.5px] leading-tight font-medium">{block.course}</p>
      <p className="truncate font-mono text-[8.5px] leading-tight text-muted">{block.code}</p>
      <p className="truncate font-mono text-[8.5px] leading-tight text-faint">{block.room}</p>
    </div>
  );
}
