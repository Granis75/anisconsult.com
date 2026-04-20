import type { Metadata } from "next";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Northline Convenience | Retail Operations Proof",
  description:
    "Retail workflow redesign, margin systems and operational visibility case study by Anis Allouache.",
};

const sectionLinks = [
  { label: "Context", href: "#context" },
  { label: "Frictions", href: "#frictions" },
  { label: "Strategy", href: "#strategy" },
  { label: "Visibility", href: "#visibility" },
  { label: "Reality", href: "#reality" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Insight", href: "#insight" },
] as const;

const businessContext = [
  { label: "Store Format", value: "65m² urban convenience store" },
  { label: "Market", value: "Dense residential / commuter zone" },
  { label: "Revenue Baseline", value: "€520k annual turnover" },
  { label: "Team", value: "Founder + 2 staff + part-time support" },
  { label: "Challenge", value: "High traffic but weak operational leverage" },
] as const;

const frictionItems = [
  {
    title: "Founder Dependency",
    description: "Daily decisions required owner presence. Nothing moved without direct intervention.",
  },
  {
    title: "Labor Misallocation",
    description: "Too much time trapped at checkout. Higher-value tasks were consistently deprioritized.",
  },
  {
    title: "Low Visibility",
    description: "No clear margin or category intelligence. Profitability was invisible until month-end.",
  },
  {
    title: "Operational Noise",
    description: "Constant interruptions and reactive management. No rhythm, no system, no calm.",
  },
] as const;

const strategyLayers = [
  {
    label: "Operational Control Layer",
    items: [
      "POS linked to inventory",
      "Opening checklist",
      "Closing reconciliation",
      "Exception logging",
    ],
  },
  {
    label: "Productivity Layer",
    items: [
      "Hybrid self-checkout",
      "Traffic-based staffing",
      "Shift ownership logic",
    ],
  },
  {
    label: "Margin Protection Layer",
    items: [
      "Reorder thresholds",
      "Timed markdown rules",
      "SKU performance reviews",
    ],
  },
] as const;

const visibilityMetrics = [
  "Revenue / labor hour",
  "Gross margin trend",
  "Waste rate",
  "Top categories",
  "Hourly traffic density",
  "Out-of-stock alerts",
  "Founder intervention hours",
] as const;

const realityItems = [
  "Supplier delays and unreliable lead times",
  "Multiple wholesalers with inconsistent pricing",
  "Staff turnover disrupting routine continuity",
  "Internet outages affecting POS and reporting",
  "Capex sensitivity on hardware investment",
  "Sustained price pressure on core SKUs",
] as const;

const outcomeItems = [
  { label: "Revenue", before: "€520k", after: "€610k" },
  { label: "Labor Cost Ratio", before: "24.8%", after: "18.9%" },
  { label: "Shrinkage", before: "4.1%", after: "1.9%" },
  { label: "Founder Admin Time", before: "22h/week", after: "6h/week" },
  { label: "Payback Period", before: "", after: "8–12 months" },
] as const;

export default function NorthlineConveniencePage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        {/* HERO */}
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-start lg:gap-16">
              <div className="max-w-4xl">
                <SectionKicker label="Retail Operations Proof" />
                <h1 className="mt-6 max-w-5xl font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[4.3rem]">
                  Re-engineering a Founder-Dependent Urban Convenience Store into a Scalable Profit Engine
                </h1>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-[1.2rem] sm:leading-9">
                  A conceptual business case study showing how workflow redesign, automation and operational visibility can improve profitability, reduce owner dependency and simplify daily retail execution.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link href="/work" className="premium-cta-outline h-12 px-6">
                    Back to Work
                  </Link>
                  <Link href="/#contact" className="premium-cta h-12 px-6">
                    Contact
                  </Link>
                </div>
              </div>

              <div className="lg:pt-6">
                <div className="premium-card p-6 sm:p-8">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                    Study Frame
                  </p>
                  <h2 className="mt-5 font-display text-balance text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-[1.8rem]">
                    Northline Convenience
                  </h2>
                  <div className="mt-8 space-y-4 border-t border-line pt-6">
                    <div className="border-t border-black/8 pt-4 first:border-t-0 first:pt-0">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                        Category
                      </p>
                      <p className="mt-2 text-sm leading-7 text-ink">
                        Urban Retail / Operational Redesign
                      </p>
                    </div>
                    <div className="border-t border-black/8 pt-4">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                        Format
                      </p>
                      <p className="mt-2 text-sm leading-7 text-ink">
                        Conceptual business case study
                      </p>
                    </div>
                    <div className="border-t border-black/8 pt-4">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                        Focus
                      </p>
                      <p className="mt-2 text-sm leading-7 text-ink">
                        Workflow redesign, margin visibility, execution systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NAV */}
        <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-5 lg:px-10">
            <nav aria-label="Section navigation" className="-mx-1 flex gap-6 overflow-x-auto px-1">
              {sectionLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap text-sm font-medium text-muted transition hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* EXECUTIVE SUMMARY */}
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <article className="premium-soft-card p-8 lg:p-10">
              <SectionKicker label="Executive Summary" />
              <p className="mt-6 max-w-4xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                Independent retail stores often generate revenue but lose profit through friction, weak routines, invisible waste and founder dependency.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                This study models a clearer operating system.
              </p>
            </article>
          </div>
        </section>

        {/* BUSINESS CONTEXT */}
        <section id="context" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <SectionKicker label="Business Context" />
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {businessContext.map((item) => (
                <article key={item.label} className="premium-card flex flex-col gap-3 p-6">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold leading-6 text-ink">
                    {item.value}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INITIAL FRICTIONS */}
        <section id="frictions" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <SectionKicker label="Initial Frictions" />
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {frictionItems.map((item) => (
                <article key={item.title} className="premium-card flex h-full flex-col">
                  <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-[1.75rem]">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REDESIGN STRATEGY */}
        <section id="strategy" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <SectionKicker label="Redesign Strategy" />
              <p className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                Three layers of operational redesign, applied in sequence.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {strategyLayers.map((layer) => (
                <article key={layer.label} className="premium-card flex h-full flex-col p-8 lg:p-10">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                    {layer.label}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-line pt-6">
                    {layer.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2.5 h-px w-3 shrink-0 bg-black/20" />
                        <span className="text-sm leading-7 text-ink/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* VISIBILITY DASHBOARD */}
        <section id="visibility" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <article className="premium-card p-8 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
                <div className="max-w-2xl">
                  <SectionKicker label="Visibility Dashboard" />
                  <p className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                    A single operational view that makes daily performance immediately readable.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {visibilityMetrics.map((item) => (
                    <div key={item} className="border-t border-line pt-4">
                      <p className="text-sm font-semibold leading-7 text-ink/90">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* IMPLEMENTATION REALITY */}
        <section id="reality" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
              <div className="max-w-2xl">
                <SectionKicker label="Implementation Reality" />
                <p className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                  No redesign lands cleanly. These constraints shape the execution.
                </p>
              </div>
              <article className="premium-soft-card p-8 lg:p-10">
                <ul className="space-y-3">
                  {realityItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 border-t border-black/8 pt-3 first:border-t-0 first:pt-0">
                      <span className="mt-2.5 h-px w-3 shrink-0 bg-black/20" />
                      <span className="text-sm leading-7 text-ink/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* MODELED OUTCOMES */}
        <section id="outcomes" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <SectionKicker label="Modeled Outcomes" />
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Modeled estimates based on operational redesign assumptions.
              </p>
            </div>

            <div className="mt-12 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-line">
                    <th className="pb-4 text-left text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                      Metric
                    </th>
                    <th className="pb-4 text-left text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                      Before
                    </th>
                    <th className="pb-4 text-left text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                      After
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {outcomeItems.map((item) => (
                    <tr key={item.label} className="border-b border-line/60">
                      <td className="py-5 pr-8 font-semibold text-ink">
                        {item.label}
                      </td>
                      <td className="py-5 pr-8 font-display text-xl tracking-[-0.03em] text-muted">
                        {item.before || "—"}
                      </td>
                      <td className="py-5 font-display text-xl font-semibold tracking-[-0.03em] text-ink">
                        {item.after}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FINAL INSIGHT */}
        <section id="insight" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <article className="premium-soft-card p-8 lg:p-10">
              <SectionKicker label="Final Insight" />
              <p className="mt-6 max-w-4xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                Most small stores do not fail from lack of customers.
              </p>
              <div className="mt-6 grid gap-5">
                <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
                  They fail from invisible leakage, dependency and poor execution systems.
                </p>
                <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
                  When operations become structured, margin follows.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* FOOTER SIGNATURE + CTA */}
        <section className="bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
            <article className="premium-card p-8 lg:p-10">
              <div className="max-w-3xl">
                <p className="font-display text-xl font-semibold tracking-[-0.03em] text-ink">
                  Anis Allouache
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-black/42">
                  Operations · Systems · Execution
                </p>
                <div className="mt-8 border-t border-line pt-8">
                  <SectionKicker label="Contact" />
                  <h2 className="mt-6 font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.4rem]">
                    Need clearer operations?
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                    I help operations run cleaner through coordination, structure and the right tools.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/#contact" className="premium-cta h-12 px-6">
                  Contact
                </Link>
                <Link href="/work" className="premium-cta-outline h-12 px-6">
                  Back to Work
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
