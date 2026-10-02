import { OCR_TEXT } from "@/lib/demo-data";
import { WeekGrid } from "@/components/week-grid";

const STEPS = [
  {
    n: "01",
    title: "Snap the sheet",
    body: "A printed grid, a portal screenshot, or a whiteboard. Awkward angles are fine.",
  },
  {
    n: "02",
    title: "Read the text",
    body: "On-device OCR pulls the raw characters out first. Cheap, offline, and it keeps the original evidence.",
  },
  {
    n: "03",
    title: "Sorted into a week",
    body: "Courses, rooms, and times get parsed out. Anything ambiguous is flagged for you instead of guessed at.",
  },
];

export function Import() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <div className="rise max-w-2xl">
        <h2 className="text-[1.9rem] leading-[1.08] font-medium tracking-[-0.025em] text-balance sm:text-[2.6rem]">
          Three steps, about four seconds.
        </h2>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {STEPS.map((step) => (
          <article key={step.n} className="glass glass-edge-light glass-hover rise rounded-[22px] p-6">
            <p className="font-mono text-[11px] text-lavender-soft">{step.n}</p>
            <h3 className="mt-3 text-[15px] font-medium">{step.title}</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{step.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="glass glass-edge-light rise rounded-[22px] p-5">
          <p className="font-mono text-[10px] tracking-[0.12em] text-faint">OCR TEXT</p>
          <pre className="mt-3 overflow-x-auto font-mono text-[9.5px] leading-[1.85] text-muted">
            {OCR_TEXT.map((line) => (
              <span key={line} className="block whitespace-pre">
                {line}
              </span>
            ))}
          </pre>
        </div>

        <div className="glass glass-edge-light rise rounded-[22px] p-2.5">
          <WeekGrid />
        </div>
      </div>
    </section>
  );
}
