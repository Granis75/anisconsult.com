import Link from "next/link";
import { siteContent } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tighter2 text-ink transition-opacity hover:opacity-80"
          aria-label="Retour à l'accueil"
        >
          anisconsult
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
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

        <a
          href="mailto:anis.contactme@gmail.com"
          className="hidden rounded-full border border-ink px-4 py-2 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white md:inline-flex"
        >
          Prendre contact
        </a>
      </div>
    </header>
  );
}
