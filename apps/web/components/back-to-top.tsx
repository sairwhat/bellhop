"use client";

import { ArrowUp } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // The hero is the sentinel: once its bottom edge leaves the viewport there is
    // enough scrolled content to be worth a way back up. IntersectionObserver
    // rather than a scroll listener, which would fire every frame.
    const sentinel = document.getElementById("top");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-72px 0px 0px 0px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  function goTop() {
    // Respect reduced motion: CSS scroll-behavior is already overridden, but
    // scrollTo needs telling explicitly.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Back to top"
      title="Back to top"
      className={`glass glass-edge-light fixed right-4 bottom-4 z-50 grid size-11 place-items-center rounded-full text-ink transition-all duration-300 active:scale-95 sm:right-6 sm:bottom-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp size={17} />
    </button>
  );
}
