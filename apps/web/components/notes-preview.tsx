export function NotesPreview() {
  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5">
      <div className="rounded-[10px] bg-lavender-wash px-3 py-2 text-[13px] text-lavender-deep">
        What did my professor say about rate limiting?
      </div>

      <div className="mt-3 space-y-2 text-[13px] leading-relaxed text-muted">
        <p>
          From your Chem 221 notes, 4 October: a reaction is rate-limited when the
          slowest step sets the pace, and the rate depends on the concentrations of
          everything before that step.
        </p>
        <p>
          You highlighted the part about the first step being slow because the bond
          rearrangement needs a lot of energy.
        </p>
      </div>

      <p className="mt-3 font-mono text-[9px] tracking-[0.14em] text-faint">
        FROM YOUR NOTES · 3 SOURCES
      </p>
    </div>
  );
}