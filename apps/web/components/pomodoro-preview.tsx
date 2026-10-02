export function PomodoroPreview() {
  return (
    <div className="rounded-[var(--radius-panel)] bg-surface p-5 ring-1 ring-line">
      <div className="flex items-center gap-4">
        <div className="relative grid size-16 shrink-0 place-items-center">
          <svg viewBox="0 0 36 36" className="size-16 -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--color-line)" strokeWidth="3" />
            <circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="var(--color-lavender)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="97.4"
              strokeDashoffset="24"
            />
          </svg>
          <span className="bh-pulse absolute size-1.5 rounded-full bg-lavender" />
        </div>

        <div className="min-w-0">
          <p className="font-mono text-[9px] tracking-[0.16em] text-faint">
            FOCUS · BLOCK 2 OF 4
          </p>
          <p className="mt-1.5 font-mono text-2xl tracking-tight text-ink tabular-nums">
            24:18
          </p>
          <p className="mt-0.5 text-[12.5px] text-muted">Organic Chemistry</p>
        </div>
      </div>
    </div>
  );
}