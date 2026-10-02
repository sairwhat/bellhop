export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-10">
      <div className="flex flex-col gap-3 border-t border-white/8 pt-8 text-[12px] text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>Bellhop. A student app for schedules that do not read themselves.</p>
        <a href="#top" className="transition-colors hover:text-muted">
          Back to top
        </a>
      </div>
    </footer>
  );
}
