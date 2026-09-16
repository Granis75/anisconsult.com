import Link from "next/link";
import { siteContent } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/[0.92] backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-3.5 lg:px-10 md:flex-row md:items-center md:py-5 md:justify-between">
        <Link
          href="/"
          aria-label="ANIS ALLOUACHE home"
          className="flex flex-col transition-opacity hover:opacity-80"
        >
          <span className="font-display text-lg font-semibold uppercase tracking-[0.16em] text-ink sm:text-xl">
            {siteContent.brand}
          </span>
          <span className="mt-0.5 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            {siteContent.brandContext}
          </span>
        </Link>

        <div className="flex items-center gap-5 md:gap-7">
          <nav className="-mx-1 flex items-center gap-5 overflow-x-auto px-1 md:mx-0 md:gap-8 md:px-0">
            {siteContent.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted transition-colors duration-200 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
