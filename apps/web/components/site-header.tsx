export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-[8px] bg-lavinder text-[14px] font-semibold text-canvas">
            B
          </span>
          <span className="text-[15px] font-medium tracking-tight">Bellhop</span>
        </a>

        <nav className="hidden items-center gap-8 text-[13px] text-muted sm:flex">
          <a href="#problem" className="transition-colors hover:text-ink">
            Problem
          </a>
          <a href="#features" className="transition-colors hover:text-ink">
            Features
          </a>
        </nav>

        <a
          href="#count-me-in"
          className="rounded-full border border-line px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:border-lavender hover:text-lavender-soft active:translate-y-[1px]"
        >
          Count me in
        </a>
      </div>
    </header>
  );
}