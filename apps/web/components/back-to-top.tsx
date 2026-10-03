"use client";

import { ArrowUp } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Observe a short marker near the top of the page rather than a whole
    // section. The hero is well over a thousand pixels tall, so watching it
    // would keep the control hidden until you had scrolled past all of it.
    const marker = document.getElementById("page-top");
    if (!marker) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(marker);
    return () => observer.disconnect();
  }, []);

  function goTop() {
    // CSS only overrides scroll-behavior for anchors. A scripted scroll needs
    // telling about reduced motion explicitly.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Back to top"
      title="Back to top"
      className={`solid-surface fixed right-4 bottom-4 z-50 grid size-11 place-items-center rounded-full text-ink transition-all duration-300 active:scale-95 sm:right-6 sm:bottom-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp size={17} />
    </button>
  );
}
