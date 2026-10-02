import { WaitlistForm } from "@/components/waitlist-form";

export function Waitlist() {
  return (
    <section id="count-me-in" className="border-t border-line bg-lavender-wash">
      <div className="mx-auto max-w-[1400px] px-5 py-24">
        <h2 className="max-w-3xl text-[2rem] leading-[1.08] font-medium tracking-[-0.03em] text-balance sm:text-[3rem]">
          Photograph your schedule tonight.
        </h2>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
          One email when the download is live. Nothing else, ever.
        </p>

        <div className="mt-10 max-w-sm">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}