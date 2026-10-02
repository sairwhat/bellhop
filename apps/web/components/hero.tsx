import { HeroDemo } from "@/components/hero-demo";
import { WaitlistForm } from "@/components/waitlist-form";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1400px] px-5 pt-16 pb-20 sm:pt-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
        <div>
          <h1 className="text-[2.75rem] leading-[1.02] font-medium tracking-[-0.035em] text-balance sm:text-[3.75rem] lg:text-[4.25rem]">
            Your schedule, typed for you.
          </h1>

          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted">
            Snap a photo of the grid your school printed. Get back a timetable you can
            edit.
          </p>

          <div className="mt-9 max-w-sm">
            <WaitlistForm />
          </div>
        </div>

        <HeroDemo />
      </div>
    </section>
  );
}