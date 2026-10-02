import { Toggle } from "@/components/toggle";

export default function Home() {
  return (
    <main style={{ padding: "40px 20px" }}>
      <h1 style={{ fontSize: "28px", margin: "0 0 8px" }}>Toggle test</h1>
      <p style={{ margin: "0 0 32px", opacity: 0.7 }}>
        Tap the button. The background and the label should both change.
      </p>
      <Toggle />
    </main>
  );
}
