import { WeekGrid } from "@/components/week-grid";

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-5 pt-16 pb-20 sm:pt-24">
      {/* Marker for the back-to-top control. Absolutely positioned so it adds no
          layout height, but tall enough that the control appears after roughly
          420px of scroll instead of after the whole hero. */}
      <div
        id="page-top"
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 h-[420px] w-px"
      />

      <div className="max-w-3xl">
        <h1 className="text-[2.6rem] leading-[1] font-medium tracking-[-0.035em] text-balance sm:text-[4rem]">
          Your schedule,
          <br />
          <span className="text-lavender-soft">typed for you.</span>
        </h1>

        <p className="mt-7 max-w-lg text-[16px] leading-relaxed text-muted">
          Photograph the grid your school printed. Bellhop reads the text, sorts it into
          an editable week, and keeps your focus blocks and tasks attached to it.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#count-me-in" className="btn-primary rounded-full px-6 py-3 text-[14px] font-medium">
            Get Started
          </a>
          <a
            href="#how"
            className="glass rounded-full px-6 py-3 text-[14px] font-medium text-ink"
          >
            See how it works
          </a>
        </div>
      </div>

      <div className="glass glass-edge-light mt-14 rounded-[26px] p-2.5 sm:mt-20 sm:p-3">
        <WeekGrid />
      </div>
    </section>
  );
}
