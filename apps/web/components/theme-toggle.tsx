"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "bellhop-theme";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

export function ThemeToggle() {
  // The inline script in the layout has already set data-theme before paint, so
  // reading it here avoids both a flash and an effect-driven state sync.
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next: Theme = getSnapshot() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private browsing can refuse writes. The toggle still works for this
      // session, it just will not persist.
    }
  }

  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors hover:border-lavender hover:text-lavender-soft active:translate-y-[1px]"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}