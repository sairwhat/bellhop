const TASKS = [
  { label: "Read ch. 6 before lab", done: true },
  { label: "Problem set 4", done: true },
  { label: "Outline Modern World History", done: false },
];

export function TasksPreview() {
  return (
    <div className="rounded-[var(--radius-panel)] bg-surface p-5 ring-1 ring-line">
      <ul className="space-y-3">
        {TASKS.map((task) => (
          <li key={task.label} className="flex items-center gap-3">
            <span
              aria-hidden
              className="grid size-[18px] shrink-0 place-items-center rounded-[6px] border"
              style={{
                borderColor: task.done ? "var(--color-lavender)" : "var(--color-line)",
                background: task.done ? "var(--color-lavender)" : "transparent",
              }}
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
            <span
              className={
                task.done ? "text-[13px] text-faint line-through" : "text-[13px] text-ink"
              }
            >
              {task.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}