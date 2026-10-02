const OCR_LINES = [
  "FALL TERM · GRID 4A (rev. 3)",
  "        MON    TUE   WED    THU    FRI",
  "P1  9:00  M241  C221  H203  P110  M241",
  "P2 10:45  C221  M241  H203  P110  M241",
  "P3 1:15   H203  C221L M241  M241  P110",
  "P4  3:00  P110  M241  H203  C221L H203",
  "rm posted at door. finals in dec.",
  "subject to change w/ot notice",
];

export function OcrRaw() {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-panel)] bg-paper ring-1 ring-line">
      <div className="flex items-center justify-between border-b border-line px-3.5 py-2.5">
        <p className="font-mono text-[9px] tracking-[0.16em] text-faint">OCR</p>
        <p className="font-mono text-[9px] text-faint">8 lines</p>
      </div>

      <pre className="overflow-x-auto px-3.5 py-3 font-mono text-[9.5px] leading-[1.75] text-muted">
        {OCR_LINES.map((line, i) => (
          <span
            key={line}
            className="block whitespace-pre"
            style={{ opacity: i === 0 ? 0.75 : 1 }}
          >
            {line}
          </span>
        ))}
      </pre>

      <div
        aria-hidden
        className="bh-scan pointer-events-none absolute inset-x-0 top-0 h-24"
        style={{
          background:
            "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--color-lavender) 26%, transparent), transparent)",
        }}
      />
    </div>
  );
}