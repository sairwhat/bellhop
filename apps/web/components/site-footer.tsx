export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-8 text-[12px] text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>Bellhop. A student app for schedules that do not read themselves.</p>
        <div className="flex items-center gap-5">
          <a href="#top" className="transition-colors hover:text-muted">
            Top
          </a>
          <a href="#count-me-in" className="transition-colors hover:text-muted">
            Count me in
          </a>
        </div>
      </div>
    </footer>
  );
}