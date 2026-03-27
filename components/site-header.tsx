import Link from "next/link";
import { siteContent } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 lg:px-10 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tighter2 text-ink transition-opacity hover:opacity-80"
          aria-label="Back to home"
        >
          anisconsult
        </Link>

        <nav className="-mx-1 flex items-center gap-6 overflow-x-auto px-1 md:mx-0 md:gap-8 md:px-0">
          {siteContent.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
