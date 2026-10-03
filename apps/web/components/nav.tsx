import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass glass-edge-light flex w-full max-w-4xl items-center justify-between gap-3 rounded-full py-2 pr-2 pl-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-full bg-lavender text-[13px] font-semibold text-canvas">
            B
          </span>
          <span className="text-[14px] font-medium tracking-tight">Bellhop</span>
        </a>

        <div className="hidden items-center gap-7 text-[13px] text-muted sm:flex">
          <a href="#how" className="transition-colors hover:text-ink">
            How it works
          </a>
          <a href="#features" className="transition-colors hover:text-ink">
            Features
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#count-me-in"
            className="btn-primary rounded-full px-4 py-2 text-[13px] font-medium whitespace-nowrap"
          >
            Get Started
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
