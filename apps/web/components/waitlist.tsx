import { WaitlistForm } from "@/components/waitlist-form";

export function Waitlist() {
  return (
    <section id="count-me-in" className="mx-auto max-w-6xl px-5 py-24">
      <div className="glass glass-edge-light rise rounded-[28px] px-6 py-14 text-center sm:px-14 sm:py-20">
        <h2 className="mx-auto max-w-2xl text-[2rem] leading-[1.05] font-medium tracking-[-0.03em] text-balance sm:text-[2.9rem]">
          Photograph your schedule tonight.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-muted">
          One email when the download is live. Nothing else, ever.
        </p>

        <div className="mx-auto mt-9 max-w-md text-left">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
