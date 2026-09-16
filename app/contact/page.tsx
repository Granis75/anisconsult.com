import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contact | ANIS ALLOUACHE",
  description:
    "Contact Anis Allouache about operations roles, residence and property operations, or relevant operational work.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | ANIS ALLOUACHE",
    description:
      "Contact Anis Allouache about operations roles, residence and property operations, or relevant operational work.",
    url: "/contact",
  },
  twitter: {
    title: "Contact | ANIS ALLOUACHE",
    description:
      "Contact Anis Allouache about operations roles, residence and property operations, or relevant operational work.",
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <ContactSection />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
