export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-10">
      {/* No back-to-top link here: the floating control in the corner covers it,
          and two controls for the same action is just noise. */}
      <div className="border-t border-line pt-8 text-[12px] text-faint">
        <p>Bellhop. A student app for schedules that do not read themselves.</p>
      </div>
    </footer>
  );
}
