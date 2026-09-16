import Link from "next/link";
import { directEmailHref, siteContent } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-muted md:flex-row md:items-end md:justify-between lg:px-10">
        <div className="space-y-3">
          <Link
            href="/"
            aria-label="ANIS ALLOUACHE home"
            className="inline-flex flex-col transition-opacity hover:opacity-80"
          >
            <span className="font-display text-base font-semibold uppercase tracking-[0.16em] text-ink">
              {siteContent.brand}
            </span>
            <span className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-muted">
              {siteContent.brandContext}
            </span>
          </Link>
          <p>Selected operational work and supporting systems.</p>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <a href={directEmailHref} className="transition-colors duration-200 hover:text-ink">
            hello@anisconsult.com
          </a>
          <p>Paris, France</p>
        </div>
      </div>
    </footer>
  );
}
