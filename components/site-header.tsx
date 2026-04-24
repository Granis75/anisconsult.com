import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-3.5 lg:px-10 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-80"
          aria-label="Back to home"
        >
          <Image
            src="/brand/ac-horizontal.svg"
            alt="AnisConsult"
            width={240}
            height={60}
            priority
            className="hidden h-8 w-auto md:block"
          />
          <Image
            src="/brand/ac-monogram.svg"
            alt="AnisConsult"
            width={48}
            height={48}
            priority
            className="h-9 w-9 md:hidden"
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
