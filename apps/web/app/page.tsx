import { Toggle } from "@/components/toggle";

// Runs from the HTML payload alone. No Next.js client bundle involved, so this
// separates "the device will not execute scripts" from "the React app will not
// hydrate".
const PROBE = `document.getElementById('probe').textContent = 'inline script ran';`;

export default function Home() {
  return (
    <main style={{ padding: "40px 20px" }}>
      <h1 style={{ fontSize: "28px", margin: "0 0 24px" }}>Toggle test</h1>

      <p style={{ margin: "0 0 8px", fontSize: "18px" }}>
        1. Plain inline script: <strong id="probe">waiting</strong>
      </p>

      <p style={{ margin: "0 0 32px", fontSize: "18px" }}>
        2. React button below. Both should work.
      </p>

      <Toggle />

      <script dangerouslySetInnerHTML={{ __html: PROBE }} />
    </main>
  );
}
