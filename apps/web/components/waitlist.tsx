import { WaitlistForm } from "@/components/waitlist-form";

export function Waitlist() {
  return (
    <section id="waitlist" className="border-t border-line bg-lavender-wash">
      <div className="mx-auto max-w-6xl px-5 py-20 text-center">
        <h2 className="text-[1.9rem] leading-[1.15] font-medium tracking-[-0.02em] text-balance sm:text-[2.2rem]">
          Photograph your schedule tonight.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-muted">
          Android ships first, then iOS. We will send exactly one email when the
          download is live.
        </p>

        <div className="mx-auto mt-8 max-w-sm text-left">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}