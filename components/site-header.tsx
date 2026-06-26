import Link from "next/link";
import { siteContent } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/[0.92] backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-3.5 lg:px-10 md:flex-row md:items-center md:py-5 md:justify-between">
        <Link
          href="/"
          aria-label="AnisConsult — home"
          className="flex items-center transition-opacity hover:opacity-80"
        >
          {/* Mobile: monogram only */}
          <img
            src="/brand/ac-monogram.svg"
            alt="AnisConsult"
            className="h-8 w-auto md:hidden"
            width="32"
            height="32"
          />
          {/* Desktop: monogram + wordmark, no tagline */}
          <img
            src="/brand/ac-header.svg"
            alt="AnisConsult"
            className="hidden md:block h-12 lg:h-14 w-auto"
            width="240"
            height="60"
          />
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
          <Link
            href="/contact"
            className="hidden h-9 items-center rounded-full border border-black/10 bg-white/70 px-4 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-surface md:inline-flex"
          >
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </header>
  );
}
