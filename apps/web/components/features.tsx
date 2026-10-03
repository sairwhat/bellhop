import { FocusCard, TasksCard } from "@/components/study-cards";

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-24">
      {/* The week board already appears in the hero. Repeating it here said
          nothing new, so this shows a feature instead: catching a clash. */}
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <h2 className="text-[1.9rem] leading-[1.08] font-medium tracking-[-0.025em] text-balance sm:text-[2.6rem]">
            Change one, change them all.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            Move a class to Thursday and every instance follows it. Rename a course once
            instead of editing six separate meetings.
          </p>

          <dl className="mt-8 divide-y divide-line border-y border-line">
            {[
              ["Term boundaries", "Per course"],
              ["Colour coding", "Automatic"],
              ["Edits", "Propagate everywhere"],
            ].map(([term, value]) => (
              <div key={term} className="flex items-baseline justify-between py-3">
                <dt className="text-[13.5px] text-muted">{term}</dt>
                <dd className="font-mono text-[11px] text-faint">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="glass glass-edge-light rounded-[22px] p-6">
          <div className="flex items-center gap-2.5">
            <span aria-hidden className="size-1.5 rounded-full bg-amber-400" />
            <p className="font-mono text-[10px] tracking-[0.12em] text-faint">
              CONFLICT DETECTED
            </p>
          </div>

          <p className="mt-5 text-[14px] leading-relaxed">
            <span className="font-medium">Organic Chemistry</span> and{" "}
            <span className="font-medium">Modern World History</span> both start at 1:15 PM
            on Wednesday.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              ["Organic Chemistry", "Sci-112"],
              ["Modern World History", "A-009"],
            ].map(([course, room]) => (
              <span
                key={course}
                className="rounded-full border border-line px-3 py-1.5 text-[12px] text-muted"
              >
                {course} · {room}
              </span>
            ))}
          </div>

          <p className="mt-6 border-t border-line pt-4 text-[13px] text-faint">
            One of these is wrong. Bellhop asks which, instead of quietly overwriting one.
          </p>
        </div>
      </div>

      {/* Two-up tiles */}
      <div className="mt-24">
        <h2 className="max-w-xl text-[1.9rem] leading-[1.08] font-medium tracking-[-0.025em] text-balance sm:text-[2.4rem]">
          The rest of the week, already wired in.
        </h2>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
          A focus block knows which class you are meant to be in. Unfinished tasks roll
          into tomorrow instead of piling up in a list you never open again.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FocusCard />
          <TasksCard />
        </div>
      </div>

      {/* Conversation panel */}
      <div className="glass glass-edge-light mt-24 rounded-[26px] p-6 sm:p-10">
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
