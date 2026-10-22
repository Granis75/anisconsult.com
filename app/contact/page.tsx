import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata: Metadata = {
  title: "Contact — Anis Allouache",
  description: "Contacter Anis Allouache pour échanger sur l'organisation opérationnelle, la coordination et les outils métiers.",
  alternates: { canonical: "/contact" },
};
export default function ContactPage() {
  return <><SiteHeader /><main className="min-h-[68vh] bg-white text-ink">
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><ContactSection /></section>
  </main><SiteFooter /></>;
}
