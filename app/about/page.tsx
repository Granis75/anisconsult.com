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
  "Operations & workflow coordination",
  "Logistics & field coordination",
  "Incidents & operational follow-up",
  "Payments, suppliers & reporting",
  "Process improvement",
  "International environments",
] as const;

const approach = [
  "Understand the operating problem.",
  "Clarify ownership and workflow.",
  "Remove unnecessary manual friction.",
  "Build only what the operation actually needs.",
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
                AnisConsult is my operational portfolio.
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                Hands-on experience across hospitality, logistics and service environments.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                AnisConsult is my operational portfolio, built around hands-on experience across hospitality, logistics and service environments.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                The work focuses on practical operational problems: recurring manual follow-up, unclear ownership, fragmented information, reporting and day-to-day execution.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                My background includes coordinating operations, incidents, external providers, payments, reporting and service workflows, alongside developing practical internal tools when they helped simplify the work.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                The case studies and projects presented here document that experience and the operational improvements developed around it.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/work" className="premium-cta-outline h-12 px-6">
                  View operational cases
                </Link>
                <Link href="/services" className="premium-cta h-12 px-6">
                  View areas of focus
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

        <section className="border-t border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-12">
            <p className="max-w-2xl text-sm leading-7 text-muted">
              The focus is practical operating clarity, service quality and visible execution.{" "}
              <Link href="/work" className="font-medium text-ink underline-offset-2 hover:underline">
                View the work.
              </Link>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
