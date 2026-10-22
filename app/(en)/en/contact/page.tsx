import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata: Metadata = {
  title: "Contact — Anis Allouache",
  description: "Contact Anis Allouache about operational coordination, process improvement or practical business tools.",
  alternates: { canonical: "/en/contact", languages: { "fr-FR": "/contact", "en-US": "/en/contact" } },
};
export default function EnglishContactPage() {
  return <><SiteHeader /><main className="min-h-[68vh] bg-white text-ink">
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><ContactSection locale="en" /></section>
  </main><SiteFooter locale="en" /></>;
}
