import Link from "next/link";
import { siteContent } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/85 backdrop-blur-xl">
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
    </header>
  );
}
