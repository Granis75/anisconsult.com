"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/lib/site-content";

const routes = [
  { path: "/services", fr: "Expertises", en: "Expertise" },
  { path: "/work", fr: "Réalisations", en: "Work" },
  { path: "/about", fr: "Approche", en: "Approach" },
  { path: "/contact", fr: "Contact", en: "Contact" },
] as const;
const availablePages = new Set([
  "/", "/services", "/work", "/about", "/contact",
  "/case-study/vesper", "/case-study/kepler-express",
]);

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const english = pathname === "/en" || pathname.startsWith("/en/");
  const frenchPath = english ? pathname.replace(/^\/en(?=\/|$)/, "") || "/" : pathname;
  const equivalent = availablePages.has(frenchPath) ? frenchPath : "/";
  const frenchTarget = equivalent;
  const englishTarget = equivalent === "/" ? "/en" : `/en${equivalent}`;
  const locale = english ? "en" : "fr";

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/[0.94] backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between lg:px-10">
        <Link href={english ? "/en" : "/"} aria-label={english ? "Anis Allouache — home" : "Anis Allouache — accueil"} className="flex flex-col transition-opacity hover:opacity-80">
          <span className="font-display text-lg font-semibold uppercase tracking-[0.14em] text-ink">{siteContent.brand}</span>
          <span className="mt-1 text-[0.65rem] font-medium tracking-[0.075em] text-muted sm:text-xs">
            {english ? "Operations & Business Systems" : "Organisation opérationnelle & outils métiers"}
          </span>
        </Link>
        <div className="flex flex-wrap items-center justify-between gap-5">
          <nav aria-label={english ? "Main navigation" : "Navigation principale"} className="-mx-1 flex items-center gap-4 overflow-x-auto px-1 pb-1 text-sm md:gap-6 md:pb-0">
            {routes.map((item) => (
              <Link key={item.path} href={english ? `/en${item.path}` : item.path} className="whitespace-nowrap font-medium text-muted transition-colors hover:text-ink">
                {item[locale]}
              </Link>
            ))}
          </nav>
          <nav aria-label="Langue / Language" className="flex shrink-0 items-center gap-1 rounded-full border border-black/10 p-1 text-xs font-semibold">
            <Link href={frenchTarget} lang="fr" hrefLang="fr" aria-current={!english ? "page" : undefined} className={`rounded-full px-2.5 py-1.5 transition-colors ${!english ? "bg-ink text-white" : "text-muted hover:text-ink"}`}>FR</Link>
            <Link href={englishTarget} lang="en" hrefLang="en" aria-current={english ? "page" : undefined} className={`rounded-full px-2.5 py-1.5 transition-colors ${english ? "bg-ink text-white" : "text-muted hover:text-ink"}`}>EN</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
