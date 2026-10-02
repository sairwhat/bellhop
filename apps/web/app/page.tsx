import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Pain } from "@/components/pain";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Waitlist } from "@/components/waitlist";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Pain />
        <Features />
        <Waitlist />
      </main>
      <SiteFooter />
    </>
  );
}