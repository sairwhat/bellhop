import { OCR_TEXT } from "@/lib/demo-data";

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

const RESOLVED = [
  { raw: "C221", course: "Organic Chemistry", where: "Tue · 9:00 AM · Sci-112" },
  { raw: "M241", course: "Calculus II", where: "Mon · 9:00 AM · B-204" },
  { raw: "C221L", course: "Organic Chemistry (Lab)", where: "Thu · 1:15 PM · Lab 3" },
];

export function Import() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <div className="rise max-w-2xl">
        <h2 className="text-[1.9rem] leading-[1.08] font-medium tracking-[-0.025em] text-balance sm:text-[2.6rem]">
          OCR gets the characters. AI reads the grid.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-muted">
          Text extraction is the easy half. The reason a photo becomes a usable week is
          that a model interprets the layout the same way you would.
        </p>
      </div>

      {/* Plain rows rather than three separate cards. Same information, far less
          repeated surface. */}
      <ol className="mt-12 divide-y divide-line border-y border-line">
        {STEPS.map((step) => (
          <li
            key={step.n}
            className="rise grid gap-2 py-6 md:grid-cols-[4rem_minmax(0,16rem)_minmax(0,1fr)] md:items-baseline md:gap-6"
          >
            <span className="font-mono text-[11px] text-lavender-soft">{step.n}</span>
            <h3 className="text-[15px] font-medium">{step.title}</h3>
            <p className="max-w-xl text-[13.5px] leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
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

        <div className="glass glass-edge-light rise rounded-[22px] p-5">
          <p className="font-mono text-[10px] tracking-[0.12em] text-faint">
            STEP 3 · STRUCTURED BY AI
          </p>
          <ul className="mt-4 divide-y divide-line">
            {RESOLVED.map((item) => (
              <li key={item.raw} className="flex items-baseline gap-3 py-2.5">
                <span className="shrink-0 font-mono text-[11px] text-faint">{item.raw}</span>
                <span aria-hidden className="shrink-0 text-muted">
                  &rarr;
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13px] font-medium">{item.course}</span>
                  <span className="block truncate font-mono text-[10px] text-faint">
                    {item.where}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
