import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contact | AnisConsult — Business Systems & Workflow Tools",
  description:
    "Contact AnisConsult to discuss scattered tools, manual follow-up, unclear ownership, internal tools or reporting problems.",
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
