export function NotesPreview() {
  return (
    <div className="rounded-[var(--radius-panel)] bg-surface p-6 ring-1 ring-line sm:p-8">
      <div className="rounded-[var(--radius-inner)] bg-lavender-wash px-4 py-3 text-[14px] leading-relaxed text-lavender-soft">
        What did my professor say about rate limiting?
      </div>

      <div className="mt-6 space-y-3.5 text-[14px] leading-relaxed text-muted">
        <p>
          From your Chem 221 notes, 4 October: a reaction is rate-limited when the
          slowest step sets the pace, so the rate depends on everything before that
          step.
        </p>
        <p>
          You underlined the part about the first step being slow, because the bond
          rearrangement needs a lot of energy.
        </p>
      </div>

      <p className="mt-6 font-mono text-[9px] tracking-[0.16em] text-faint">
        FROM YOUR NOTES · 3 SOURCES
      </p>
    </div>
  );
}