const TASKS = [
  { label: "Read ch. 6 before lab", done: true },
  { label: "Problem set 4", done: true },
  { label: "Outline Modern World History", done: false },
];

export function FocusCard() {
  return (
    <article
      data-d="1"
      className="glass glass-edge-light glass-hover rise rounded-[22px] p-6"
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] tracking-[0.12em] text-faint">FOCUS</p>
        <p className="font-mono text-[10px] text-faint">BLOCK 2 / 4</p>
      </div>

      <div className="mt-6 flex items-center gap-5">
        <div className="relative grid size-16 shrink-0 place-items-center">
          <svg viewBox="0 0 36 36" className="size-16 -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="currentColor" strokeOpacity="0.14" strokeWidth="3.5" />
            <circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="var(--color-lavender)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="97.4"
              strokeDashoffset="26"
            />
          </svg>
          <span className="absolute size-1.5 rounded-full bg-lavender" />
        </div>

        <div className="min-w-0">
          <p className="font-mono text-[28px] leading-none tracking-tight tabular-nums">24:18</p>
          <p className="mt-2 truncate text-[13px] text-muted">Organic Chemistry</p>
        </div>
      </div>
    </article>
  );
}

export function TasksCard() {
  return (
    <article
      data-d="2"
      className="glass glass-edge-light glass-hover rise rounded-[22px] p-6"
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] tracking-[0.12em] text-faint">TASKS</p>
        <p className="font-mono text-[10px] text-faint">2 / 3</p>
      </div>

      <ul className="mt-5 space-y-3.5">
        {TASKS.map((task) => (
          <li key={task.label} className="flex items-center gap-3">
            <span
              aria-hidden
              className="grid size-[18px] shrink-0 place-items-center rounded-[6px] border border-line"
              style={{ background: task.done ? "var(--color-lavender)" : "transparent" }}
            >
              {task.done && (
                <svg viewBox="0 0 12 12" className="size-3">
                  <path
                    d="M2.5 6.2 4.8 8.5 9.5 3.8"
                    fill="none"
                    stroke="var(--color-canvas)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            <span className={task.done ? "text-[13px] text-faint line-through" : "text-[13px]"}>
              {task.label}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
