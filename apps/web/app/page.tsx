import { BackToTop } from "@/components/back-to-top";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Import } from "@/components/import-section";
import { Nav } from "@/components/nav";
import { Waitlist } from "@/components/waitlist";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Import />
        <Features />
        <Waitlist />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
