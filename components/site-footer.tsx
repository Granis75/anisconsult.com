import Link from "next/link";
import { directEmailHref, linkedInHref, siteContent } from "@/lib/site-content";
type Locale = "fr" | "en";

export function SiteFooter({ locale = "fr" }: { locale?: Locale }) {
  const english = locale === "en";
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-6 py-10 text-sm text-muted md:flex-row lg:px-10">
        <div className="space-y-2">
          <Link href={english ? "/en" : "/"} className="font-display font-semibold uppercase tracking-[0.12em] text-ink">{siteContent.brand}</Link>
          <p>{english ? "Operations coordination, process improvement and business tools." : "Organisation opérationnelle, coordination et outils métiers."}</p>
          <p>{english ? "Paris · France" : "Paris · France"}</p>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <a href={directEmailHref} className="hover:text-ink">hello@anisconsult.com</a>
          <a href={linkedInHref} target="_blank" rel="noopener noreferrer" className="hover:text-ink">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
