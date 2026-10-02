"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { useSyncExternalStore } from "react";

function subscribe(cb: () => void) {
  const observer = new MutationObserver(cb);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const getSnapshot = () => (document.documentElement.dataset.theme === "light" ? "light" : "dark");
const getServerSnapshot = () => "dark";

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Derived from `theme`, never from getSnapshot() directly: the render body
  // also runs on the server, where document does not exist.
  const next = theme === "dark" ? "light" : "dark";
  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={() => {
        document.documentElement.dataset.theme = next;
        try {
          localStorage.setItem("bellhop-theme", next);
        } catch {}
      }}
      aria-label={label}
      title={label}
      className="grid size-11 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors hover:text-ink active:scale-95 md:size-10"
    >
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
