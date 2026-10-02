import { WaitlistForm } from "@/components/waitlist-form";
import { WeekGrid } from "@/components/week-grid";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:pt-24">
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

        <div className="mt-9 max-w-md">
          <WaitlistForm />
        </div>
      </div>

      <div className="glass glass-edge-light rise mt-14 rounded-[26px] p-2.5 sm:mt-20 sm:p-3">
        <WeekGrid />
      </div>
    </section>
  );
}
