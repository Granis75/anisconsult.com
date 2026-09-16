import type { Metadata } from "next";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Systems | ANIS ALLOUACHE",
  description:
    "Supporting operational systems and prototypes created from real field problems in property, residence and logistics operations.",
  alternates: {
    canonical: "/systems",
  },
  openGraph: {
    title: "Systems | ANIS ALLOUACHE",
    description:
      "Supporting operational systems and prototypes created from real field problems.",
    url: "/systems",
  },
  twitter: {
    title: "Systems | ANIS ALLOUACHE",
    description:
      "Supporting operational systems and prototypes created from real field problems.",
  },
};

const systems = [
  {
    name: "StayOps",
    context: "Residence and property operations",
    problem:
      "Guest follow-up, access, incidents, payments, housekeeping and reporting can become scattered across front-desk memory, files and messages.",
    structure:
      "A prototype control layer for stay follow-up, issue visibility, recurring tasks and operational reporting.",
    relation:
      "Informed by operational work at Résidence Cadet and recurring property operations constraints.",
    href: "https://stayops.anisconsult.com",
    label: "stayops.anisconsult.com",
  },
  {
    name: "Kepler Express",
    context: "Transport operations",
    problem:
      "Mission status, expenses, invoices and payments were hard to control when execution and administration moved separately.",
    structure:
      "A mission workflow prototype connecting operational status, cost capture, billing and payment follow-up.",
    relation:
      "Built from logistics coordination problems around daily mission control and billing follow-up.",
    href: "https://kepler.anisconsult.com",
    label: "kepler.anisconsult.com",
  },
] as const;

const principles = [
  "Start from the operating problem, not from software features.",
  "Make ownership, status, next action and outcome visible.",
  "Keep the system close to the way daily work is actually run.",
  "Use prototypes to test operational structure before adding complexity.",
] as const;

export default function SystemsPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
            <div className="max-w-5xl">
              <SectionKicker label="Systems" />
              <h1 className="mt-6 max-w-5xl font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
                Supporting systems built from operational problems.
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                Prototypes and operating views that came from field constraints, not from a separate software business.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:px-10 lg:py-20">
            {systems.map((system) => (
              <article
                key={system.name}
                className="rounded-[2rem] border border-line bg-surface p-8 lg:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-12">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                      {system.context}
                    </p>
                    <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
                      {system.name}
                    </h2>
                    <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                      {system.relation}
                    </p>
                    <a
                      href={system.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-surface"
                    >
                      {system.label}
                    </a>
                  </div>

                  <dl className="grid gap-5">
                    <div>
                      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                        Operating problem
                      </dt>
                      <dd className="mt-2 text-base leading-8 text-muted">
                        {system.problem}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                        System structure
                      </dt>
                      <dd className="mt-2 text-base leading-8 text-muted">
                        {system.structure}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="max-w-3xl">
              <SectionKicker label="How these systems are framed" />
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {principles.map((item) => (
                <article key={item} className="rounded-2xl border border-line bg-white p-6">
                  <p className="text-sm font-semibold leading-7 text-ink">{item}</p>
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
