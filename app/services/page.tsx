import type { Metadata } from "next";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Services | AnisConsult — Operations & Process Improvement",
  description:
    "Operational coordination, process improvement and operational visibility for recurring service workflows.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | AnisConsult — Operations & Process Improvement",
    description:
      "Operational coordination, process improvement and operational visibility for recurring service workflows.",
    url: "/services",
  },
  twitter: {
    title: "Services | AnisConsult — Operations & Process Improvement",
    description:
      "Operational coordination, process improvement and operational visibility for recurring service workflows.",
  },
};

const services = [
  {
    title: "Operational Coordination",
    description: "Clarifying ownership, follow-up, priorities and recurring operating routines.",
    delivers: [
      "ownership",
      "operational follow-up",
      "incident visibility",
      "coordination",
      "escalation",
    ],
  },
  {
    title: "Process Improvement",
    description: "Simplifying recurring workflows, handoffs and unnecessary manual steps.",
    delivers: [
      "workflow review",
      "handoffs",
      "recurring admin",
      "duplicated checks",
      "routine simplification",
    ],
  },
  {
    title: "Operational Visibility & Reporting",
    description: "Creating clearer operational views so status, blockers and next actions do not depend on memory.",
    delivers: [
      "status tracking",
      "blockers",
      "reporting rhythm",
      "operational indicators",
      "action follow-up",
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
            <div className="max-w-4xl">
              <SectionKicker label="Services" />
              <h1 className="mt-6 font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
                Areas of Focus
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                Practical operational improvement focused on clearer execution, simpler workflows and better day-to-day visibility.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:px-10 lg:py-20">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[2rem] border border-line bg-surface p-8 lg:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-12">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                      Area of focus
                    </p>
                    <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                      Typical areas
                    </p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {service.delivers.map((item) => (
                        <div key={item} className="rounded-2xl border border-line bg-white px-4 py-3">
                          <p className="text-sm font-medium leading-6 text-ink">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}

            <p className="max-w-3xl border-t border-line pt-8 text-sm leading-7 text-muted">
              Practical tools may be developed when a clearer workflow genuinely requires one. The tool supports the operation; it is not the starting point.
            </p>

            <div className="border-t border-line pt-8">
              <Link href="/contact" className="premium-cta h-12 px-6">
                Discuss an operations issue
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
