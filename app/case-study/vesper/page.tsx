import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const sectionLinks = [
  { label: "Operating Environment", href: "#context" },
  { label: "Problem", href: "#problem" },
  { label: "System Design", href: "#implementation" },
  { label: "Results", href: "#results" },
  { label: "Operational Impact", href: "#change" },
  { label: "Key Insight", href: "#insight" },
] as const;

const problemItems = [
  "Disconnected tools (Excel, PMS, manual tracking)",
  "High dependency on front-desk operations",
  "No structured use of customer data",
  "Repetitive administrative workload",
  "Lack of end-to-end workflow consistency",
] as const;

const implementationItems = [
  "Defined an end-to-end workflow from acquisition to reporting",
  "Introduced CRM logic for customer data and follow-ups",
  "Reduced front-desk dependency through automated access",
  "Simplified payment and administrative flows",
  "Built internal tools for daily execution",
  "Centralized operational and financial visibility",
] as const;

const resultItems = [
  {
    title: "9.2/10 Customer Satisfaction",
    detail: "Immediate improvement from a 7.6 baseline",
  },
  {
    title: "Top 30 Ranking",
    detail: "From ~450, driven by improved execution and consistency",
  },
  {
    title: "10h Saved / Week",
    detail: "Administrative workload significantly reduced",
  },
  {
    title: "+50% Revenue from New Market",
    detail: "New customer segment captured through improved positioning",
  },
] as const;

const changeItems = [
  "Daily operations became more predictable",
  "Less manual coordination",
  "Better visibility on performance and revenue",
  "More consistent guest experience",
] as const;

const flowSteps = [
  "Acquisition",
  "Booking",
  "CRM",
  "Access",
  "Operations",
  "Reporting",
] as const;

export default function VesperCaseStudyPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-14 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
            <div className="max-w-5xl">
              <SectionKicker label="Case Study" />
              <h1 className="mt-6 max-w-5xl font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
                Vesper Collection
              </h1>

              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                A hospitality operation running on Excel, calls and disconnected tools was restructured into a clearer system.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                A multi-unit hospitality operation with fragmented workflows and limited visibility.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-5 lg:px-10">
            <nav
              aria-label="Section navigation"
              className="-mx-1 flex gap-6 overflow-x-auto px-1"
            >
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

        <section id="context" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-[2rem] border border-line bg-surface p-8">
                <SectionKicker label="Operating Environment" />
                <p className="mt-6 text-base leading-8 text-ink">
                  A multi-unit hospitality operation with fragmented workflows and limited visibility.
                </p>
              </article>

              <article className="rounded-[2rem] border border-line bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)]">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                  System Gap
                </p>
                <p className="mt-6 text-base leading-8 text-ink">
                  Execution depended on manual coordination, with no clear system for tracking operations or costs.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="problem" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <SectionKicker label="Problem" />
              <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                Fragmented tools and manual work created friction and reduced control.
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              {problemItems.map((item) => (
                <article
                  key={item}
                  className="rounded-[2rem] border border-line bg-white p-6"
                >
                  <p className="text-sm leading-7 text-ink">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="implementation" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-4xl">
              <SectionKicker label="System Design" />
              <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                Operations were restructured around clearer workflows, cleaner data and daily visibility.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {implementationItems.map((item) => (
                <article
                  key={item}
                  className="rounded-[2rem] border border-line bg-surface p-8"
                >
                  <p className="text-sm leading-7 text-ink">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <SectionKicker label="Results" />
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {resultItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-line bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)]"
                >
                  <p className="font-display text-[1.8rem] font-semibold leading-[1.05] tracking-[-0.04em] text-ink">
                    {item.title}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="change" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="rounded-[2rem] border border-line bg-surface p-8 lg:p-10">
                <SectionKicker label="Operational Impact" />
                <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                  The system reduced friction and made daily execution more consistent.
                </p>
              </article>

              <div className="grid gap-4">
                {changeItems.map((item) => (
                  <article
                    key={item}
                    className="rounded-[2rem] border border-line bg-white px-6 py-6 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)]"
                  >
                    <p className="text-sm font-semibold text-ink">{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="insight" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="rounded-[2rem] border border-line bg-white p-8 lg:p-10">
              <SectionKicker label="Key Insight" />
              <p className="mt-5 max-w-4xl text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                Control came from clearer workflows and aligned data.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Consistency, visibility and control came from workflow design
                and data alignment.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Pour soutenir l'exécution quotidienne, un système opérationnel interne a été modélisé à partir de ces contraintes terrain.
              </p>

              <div className="mt-10 border-t border-line pt-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                  System Flow
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  {flowSteps.map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="inline-flex min-h-11 items-center rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink">
                        {item}
                      </span>
                      {index < flowSteps.length - 1 ? (
                        <span className="text-sm text-black/25">→</span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
