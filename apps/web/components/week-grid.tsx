import { DAY_NAMES, WEEK, type Block } from "@/lib/demo-data";

const FIRST_HOUR = 8;

function slotToTime(slot: number) {
  const hour = FIRST_HOUR + Math.floor(slot / 2);
  const minutes = slot % 2 === 0 ? "00" : "30";
  const display = hour > 12 ? hour - 12 : hour;
  return `${display}:${minutes} ${hour >= 12 ? "PM" : "AM"}`;
}

const BY_DAY = DAY_NAMES.map((name, i) => ({
  name,
  blocks: WEEK.filter((b) => b.day === i).sort((a, b) => a.slot - b.slot),
}));

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

      {/* One card component, two layouts. Five day columns on desktop, a single
          stacked column on mobile. No time axis, so there are no empty cells and
          nothing to decode. */}
      <div className="hidden md:block">
        <div className="grid grid-cols-5 gap-3 p-4">
          {BY_DAY.map((day) => (
            <div key={day.name}>
              <div className="flex items-baseline justify-between pb-2.5">
                <p className="text-[11px] font-medium tracking-wide text-muted">{day.name}</p>
                <p className="font-mono text-[9.5px] text-faint">{day.blocks.length}</p>
              </div>
              <div className="space-y-2">
                {day.blocks.map((block) => (
                  <ClassCard key={`${block.code}-${block.slot}`} block={block} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divide-y divide-line md:hidden">
        {BY_DAY.map((day) => (
          <div key={day.name} className="px-5 py-4">
            <p className="text-[11px] font-medium tracking-wide text-muted">{day.name}</p>
            <div className="mt-2.5 space-y-2">
              {day.blocks.map((block) => (
                <ClassCard key={`${block.code}-${block.slot}`} block={block} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClassCard({ block }: { block: Block }) {
  return (
    <div
      className="rounded-[10px] px-2.5 py-2"
      style={{
        background: `color-mix(in oklab, ${block.color} 22%, var(--color-screen))`,
        boxShadow: `inset 3px 0 0 0 ${block.color}`,
      }}
    >
      <p className="font-mono text-[9.5px] leading-none text-faint">{slotToTime(block.slot)}</p>
      <p className="mt-1 truncate text-[12px] leading-tight font-medium">{block.course}</p>
      <p className="truncate font-mono text-[9.5px] text-muted">
        {block.code} · {block.room}
      </p>
    </div>
  );
}
