export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-6 place-items-center rounded-[7px] bg-lavender text-[13px] font-semibold text-white">
            B
          </span>
          <span className="text-[15px] font-medium tracking-tight">Bellhop</span>
        </a>

        <nav className="hidden items-center gap-7 text-[13px] text-muted sm:flex">
          <a href="#how" className="transition-colors hover:text-ink">
            How it works
          </a>
          <a href="#features" className="transition-colors hover:text-ink">
            Features
          </a>
          <a href="#waitlist" className="transition-colors hover:text-ink">
            Launch
          </a>
        </nav>

        <a
          href="#waitlist"
          className="rounded-full bg-lavender px-3.5 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-lavender-deep"
        >
          Get notified
        </a>
      </div>
    </header>
  );
}