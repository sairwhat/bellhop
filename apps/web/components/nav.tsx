"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const SECTIONS = [
  { id: "how", label: "How it works" },
  { id: "features", label: "Features" },
];

export function Nav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick whichever tracked section is highest on screen. Ties go to the one
        // further up the page so the highlight never flickers between two
        // sections that are both partly visible.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        setActive(visible.length ? visible[0].target.id : null);
      },
      // Shrink the viewport from the top so a section counts as active once its
      // heading clears the sticky nav rather than the moment it enters.
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    const nodes = SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (node): node is HTMLElement => node !== null
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass glass-edge-light flex w-full max-w-4xl items-center justify-between gap-3 rounded-full py-2 pr-2 pl-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-full bg-lavender text-[13px] font-semibold text-canvas">
            B
          </span>
          <span className="text-[14px] font-medium tracking-tight">Bellhop</span>
        </a>

        <div className="hidden items-center gap-7 text-[13px] sm:flex">
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={active === section.id ? "true" : undefined}
              className={`transition-colors ${
                active === section.id ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {section.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#count-me-in"
            className="btn-primary rounded-full px-4 py-2 text-[13px] font-medium whitespace-nowrap"
          >
            Get Started
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
