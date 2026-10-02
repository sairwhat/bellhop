"use client";

import { useState } from "react";

export function Toggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  function onClick() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }

  return (
    <div style={{ display: "grid", gap: "24px", justifyItems: "start" }}>
      <button
        type="button"
        onClick={onClick}
        style={{
          minHeight: "56px",
          padding: "0 28px",
          fontSize: "18px",
          fontWeight: 600,
          borderRadius: "999px",
          border: "none",
          background: "var(--btn-bg)",
          color: "var(--btn-fg)",
          cursor: "pointer",
        }}
      >
        Switch to {theme === "dark" ? "light" : "dark"}
      </button>

      <p style={{ margin: 0, fontSize: "18px" }}>
        Current theme: <strong>{theme}</strong>
      </p>
    </div>
  );
}
