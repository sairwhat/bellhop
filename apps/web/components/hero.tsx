import { HeroDemo } from "@/components/hero-demo";
import { WaitlistForm } from "@/components/waitlist-form";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:pt-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:items-center lg:gap-14">
        <div>
          <p className="font-mono text-[10px] tracking-[0.16em] text-lavender-deep">
            FOR COLLEGE AND K-12
          </p>

          <h1 className="mt-4 text-[2.6rem] leading-[1.04] font-medium tracking-[-0.03em] text-balance sm:text-[3.4rem]">
            Your schedule, typed for you.
          </h1>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
            Snap a photo of the grid your school printed. Bellhop reads it, sorts it,
            and hands back a timetable you can actually edit — plus the timer, task
            list, and notes help that hang off it.
          </p>

          <div className="mt-8 max-w-sm">
            <WaitlistForm />
          </div>

          <p className="mt-3 text-[12px] text-faint">
            Android first. One email when it ships, nothing else.
          </p>
        </div>

        <HeroDemo />
      </div>
    </section>
  );
}