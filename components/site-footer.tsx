import Link from "next/link";
import { directEmailHref } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-muted md:flex-row md:items-end md:justify-between lg:px-10">
        <div className="space-y-3">
          <Link
            href="/"
            aria-label="Back to home"
            className="inline-flex items-center transition-opacity hover:opacity-80"
          >
            <img
              src="/brand/ac-horizontal.svg"
              alt="AnisConsult"
              width={240}
              height={60}
              className="h-7 w-auto sm:h-8"
            />
          </Link>
          <p>Operations Systems Specialist</p>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <a href={directEmailHref} className="transition-colors duration-200 hover:text-ink">
            hello@anisconsult.com
          </a>
          <p>Paris · Remote Worldwide</p>
        </div>
      </div>
    </footer>
  );
}
