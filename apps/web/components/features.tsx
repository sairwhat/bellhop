import { FocusCard, TasksCard } from "@/components/study-cards";
import { WeekGrid } from "@/components/week-grid";

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-24">
      {/* Full-bleed band: text left, product right */}
      <div className="rise grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
        <div>
          <h2 className="text-[1.9rem] leading-[1.08] font-medium tracking-[-0.025em] text-balance sm:text-[2.6rem]">
            Change one, change them all.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
            Move a class to Thursday and every instance follows it. Rename a course once
            instead of editing six separate meetings. Overlaps get flagged before your
            registrar does.
          </p>

          <dl className="mt-8 space-y-3">
            {[
              ["Conflict detection", "Instant"],
              ["Term boundaries", "Per course"],
              ["Colour coding", "Automatic"],
            ].map(([term, value]) => (
              <div key={term} className="flex items-baseline justify-between border-b border-line pb-3">
                <dt className="text-[13.5px] text-muted">{term}</dt>
                <dd className="font-mono text-[11px] text-faint">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="glass glass-edge-light rounded-[26px] p-2.5">
          <WeekGrid />
        </div>
      </div>

      {/* Two-up tiles */}
      <div className="mt-24">
        <h2 className="rise max-w-xl text-[1.9rem] leading-[1.08] font-medium tracking-[-0.025em] text-balance sm:text-[2.4rem]">
          The rest of the week, already wired in.
        </h2>
        <p className="rise mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
          A focus block knows which class you are meant to be in. Unfinished tasks roll
          into tomorrow instead of piling up in a list you never open again.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FocusCard />
          <TasksCard />
        </div>
      </div>

      {/* Conversation panel */}
      <div className="glass glass-edge-light rise mt-24 rounded-[26px] p-6 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div>
            <h2 className="text-[1.7rem] leading-[1.1] font-medium tracking-[-0.02em] text-balance sm:text-[2.2rem]">
              Ask your notes, not the internet.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              The model answers only from lecture notes you already took, and tells you
              which ones it used. No generic summaries of a topic you have not studied yet.
            </p>
          </div>

          <div className="glass-inset rounded-[20px] p-6">
            <p className="font-mono text-[10px] tracking-[0.12em] text-faint">
              AI · GROUNDED IN YOUR NOTES
            </p>

            <p className="mt-4 inline-block rounded-full bg-lavender/12 px-4 py-2.5 text-[14px] leading-relaxed text-lavender-soft">
              What did my professor say about rate limiting?
            </p>

            <div className="mt-5 space-y-3 text-[14px] leading-relaxed text-muted">
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

            <p className="mt-5 border-t border-line pt-4 font-mono text-[10px] tracking-[0.12em] text-faint">
              3 SOURCES · CHEM 221
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
