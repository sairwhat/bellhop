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
    title: "Read the characters",
    body: "On-device OCR pulls the raw text out first. Cheap, fast, works with no signal, and it keeps the original evidence around.",
  },
  {
    n: "03",
    title: "Let the model read the grid",
    body: "OCR gives you a wall of text with the columns already scrambled. The model works out that Tuesday's column is Tuesday, that M241 is Calculus II, and that Sci-112 is a room rather than a time. Anything it is unsure about gets flagged instead of guessed.",
  },
];

export function Import() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <div className="rise max-w-2xl">
        <h2 className="text-[1.9rem] leading-[1.08] font-medium tracking-[-0.025em] text-balance sm:text-[2.6rem]">
          OCR gets the characters. AI reads the grid.
        </h2>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
          Text extraction is the easy half. The reason a photo becomes a usable week is
          that a model interprets the layout the same way you would.
        </p>
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
          <p className="font-mono text-[10px] tracking-[0.12em] text-faint">
            STEP 2 · OCR TEXT
          </p>
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
          <p className="px-2.5 pt-2.5 pb-1 text-center font-mono text-[9.5px] tracking-[0.12em] text-faint">
            STEP 3 · STRUCTURED BY AI
          </p>
        </div>
      </div>
    </section>
  );
}
