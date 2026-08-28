import type { Metadata } from "next";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About | AnisConsult — Operations & Process Improvement",
  description:
    "Hands-on operational experience across hospitality, logistics, service environments and process improvement.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | AnisConsult — Operations & Process Improvement",
    description:
      "Hands-on operational experience across hospitality, logistics, service environments and process improvement.",
    url: "/about",
  },
  twitter: {
    title: "About | AnisConsult — Operations & Process Improvement",
    description:
      "Hands-on operational experience across hospitality, logistics, service environments and process improvement.",
  },
};

const areas = [
  "Hospitality & serviced residences",
  "Operational coordination",
  "Logistics & field operations",
  "Incident follow-up",
  "Reporting & process improvement",
  "International environments",
] as const;

const approach = [
  "Understand the problem.",
  "Clarify ownership.",
  "Simplify the workflow.",
  "Build only what the operation needs.",
] as const;

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
            <div className="max-w-5xl">
              <SectionKicker label="About" />
              <h1 className="mt-5 max-w-5xl font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
                About
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                AnisConsult documents selected operational work across hospitality, logistics and service environments.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                The focus is simple: clearer workflows, better follow-up and less manual friction in day-to-day operations.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/work" className="premium-cta h-12 px-6">
                  View operational cases
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="max-w-3xl">
              <SectionKicker label="Areas of experience" />
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((item) => (
                <article key={item} className="rounded-2xl border border-line bg-white px-5 py-4">
                  <p className="text-sm font-semibold leading-6 text-ink">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="mb-10 max-w-3xl">
              <SectionKicker label="Approach" />
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {approach.map((item) => (
                <article key={item} className="premium-soft-card flex h-full flex-col">
                  <p className="text-base font-semibold leading-7 text-ink">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
