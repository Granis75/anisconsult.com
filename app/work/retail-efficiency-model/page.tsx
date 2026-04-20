import type { Metadata } from "next";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Retail Efficiency Model | Retail Operations Proof Study | Anis",
  description:
    "Retail operations proof study showing how staffing, waste visibility and reporting structure can improve execution in an urban convenience format.",
};

const sectionLinks = [
  { label: "Context", href: "#context" },
  { label: "Frictions", href: "#frictions" },
  { label: "Operational Design", href: "#system-design" },
  { label: "Workflow", href: "#workflow-improvements" },
  { label: "Visibility", href: "#visibility-layer" },
  { label: "Outcomes", href: "#kpi-results" },
  { label: "Perspective", href: "#final-perspective" },
] as const;

const frameItems = [
  "60m² urban footprint",
  "High-traffic convenience format",
  "French retail market",
  "Founder-dependent operation",
] as const;

const frictionItems = [
  {
    title: "Founder Dependency",
    description: "Daily execution required constant owner intervention.",
  },
  {
    title: "Labor Leakage",
    description: "Staff time was absorbed by checkout presence instead of higher-value tasks.",
  },
  {
    title: "Low Visibility",
    description: "No real-time clarity on product profitability, rush-hour demand or waste.",
  },
] as const;

const systemItems = [
  "POS connected to inventory and accounting",
  "Hybrid self-checkout for low-item transactions",
  "Mission-based store layout for faster navigation",
  "Clear ownership across daily routines",
  "Automated reporting and closing flows",
] as const;

const workflowItems = [
  {
    title: "Just-in-Time Replenishment",
    description: "Stock thresholds trigger draft purchase orders for approval.",
  },
  {
    title: "Morning Focus Window",
    description: "Opening hours reserved for merchandising, freshness and floor readiness.",
  },
  {
    title: "Waste Reduction Logic",
    description: "Timed markdown rules reduce expiry losses before disposal.",
  },
] as const;

const visibilityMetrics = [
  "Revenue per labor hour",
  "Hourly traffic vs staffing",
  "Waste / shrinkage tracking",
  "Category performance",
  "Daily margin signals",
] as const;

const outcomeItems = [
  {
    label: "Revenue Potential",
    value: "440k€ → 520k€",
  },
  {
    label: "Labor Cost Ratio",
    value: "25% → 17.5%",
  },
  {
    label: "Shrinkage",
    value: "4.2% → 1.8%",
  },
  {
    label: "Owner Admin Time",
    value: "20h/week → 4h/week",
  },
] as const;

export default function RetailEfficiencyModelPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-start lg:gap-16">
              <div className="max-w-4xl">
                <SectionKicker label="Retail Efficiency Model" />
                <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-black/42">
                  Urban Retail • Workflow Design • Operational Efficiency
                </p>
                <h1 className="mt-5 max-w-5xl font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[4.3rem]">
                  Re-engineering a 520k€ Convenience Store Into a Clearer, More
                  Profitable Operation
                </h1>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-[1.2rem] sm:leading-9">
                  A modeled case study showing how workflow redesign, automation
                  and operational visibility can transform a founder-dependent
                  retail business.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link href="/#contact" className="premium-cta h-12 px-6">
                    Contact
                  </Link>
                  <Link href="/work" className="premium-cta-outline h-12 px-6">
                    View Work
                  </Link>
                </div>
              </div>

              <div className="lg:pt-6">
                <div className="premium-card p-6 sm:p-8">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                    Study Frame
                  </p>
                  <h2 className="mt-5 font-display text-balance text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-[2rem]">
                    Re-engineering a 520k€ Urban Convenience Store Through
                    Operational Redesign
                  </h2>

                  <div className="mt-8 space-y-4 border-t border-line pt-6">
                    <div className="border-t border-black/8 pt-4 first:border-t-0 first:pt-0">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                        Category
                      </p>
                      <p className="mt-2 text-sm leading-7 text-ink">
                        Urban Retail / Operational Redesign / Workflow Clarity
                      </p>
                    </div>
                    <div className="border-t border-black/8 pt-4">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                        Format
                      </p>
                      <p className="mt-2 text-sm leading-7 text-ink">
                        Modeled case study
                      </p>
                    </div>
                    <div className="border-t border-black/8 pt-4">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                        Focus
                      </p>
                      <p className="mt-2 text-sm leading-7 text-ink">
                        Workflow redesign, automation and operational visibility
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.92fr)]">
              <article className="premium-card p-8 lg:p-10">
                <SectionKicker label="Context" />
                <div className="mt-6 grid gap-5">
                  <p className="text-base leading-8 text-ink sm:text-lg">
                    A high-traffic 60m² urban convenience store inspired by the
                    Japanese kombini model, operating in the French market.
                  </p>
                  <p className="text-base leading-8 text-muted sm:text-lg">
                    Despite healthy revenue potential, the business relied heavily
                    on founder involvement, manual routines and thin operating
                    margins.
                  </p>
                  <p className="text-base leading-8 text-muted sm:text-lg">
                    The objective was to redesign the operating model into a
                    calmer, more scalable and more profitable operation.
                  </p>
                </div>
              </article>

              <article className="premium-soft-card p-8">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                  Operating Frame
                </p>
                <div className="mt-6 grid gap-4">
                  {frameItems.map((item) => (
                    <div key={item} className="border-t border-black/8 pt-4">
                      <p className="text-sm font-semibold leading-7 text-ink/90">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="frictions" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <SectionKicker label="Operational Frictions" />
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {frictionItems.map((item) => (
                <article key={item.title} className="premium-card flex h-full flex-col">
                  <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-[2rem]">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="system-design" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
              <div className="max-w-2xl">
                <SectionKicker label="Operational Design" />
                <p className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                  The redesign focused on decoupling labor from revenue and
                  replacing manual habits with clearer operating flows.
                </p>
              </div>

              <article className="premium-soft-card p-8 lg:p-10">
                <ul className="space-y-3 pl-5 text-sm leading-7 text-ink marker:text-black/30 sm:text-base">
                  {systemItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section
          id="workflow-improvements"
          className="border-b border-line bg-surface"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <SectionKicker label="Workflow Improvements" />
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {workflowItems.map((item) => (
                <article key={item.title} className="premium-card flex h-full flex-col">
                  <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-[2rem]">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="visibility-layer" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <article className="premium-card p-8 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
                <div className="max-w-2xl">
                  <SectionKicker label="Visibility Layer" />
                  <p className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                    A single dashboard gives management immediate operational
                    clarity.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {visibilityMetrics.map((item) => (
                    <div key={item} className="border-t border-line pt-4">
                      <p className="text-sm font-semibold leading-7 text-ink/90">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="kpi-results" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <SectionKicker label="Modeled Outcomes" />
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                These figures are modeled estimates for the proposed operating
                redesign.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {outcomeItems.map((item) => (
                <article key={item.label} className="premium-card flex h-full flex-col">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                    Modeled estimate
                  </p>
                  <h2 className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-ink/72">
                    {item.label}
                  </h2>
                  <p className="mt-5 font-display text-[2rem] font-semibold leading-[1.02] tracking-[-0.05em] text-ink sm:text-[2.35rem]">
                    {item.value}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="final-perspective" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <article className="premium-soft-card p-8 lg:p-10">
              <SectionKicker label="Final Perspective" />
                <p className="mt-6 max-w-4xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                  Complexity is the enemy of scale.
                </p>
                <div className="mt-6 grid gap-5">
                  <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
                  By treating the store as a coordinated operation rather than a
                  list of tasks, the environment becomes calmer, clearer and
                  easier to grow.
                  </p>
                <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
                  Automation does not remove the human element. It frees people to
                  focus on service, quality and customer experience.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
            <article className="premium-card p-8 lg:p-10">
              <div className="max-w-3xl">
                <SectionKicker label="Contact" />
                <h2 className="mt-6 font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.4rem]">
                  Need clearer operations?
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                  I help operations run cleaner through coordination, structure
                  and the right tools.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/#contact" className="premium-cta h-12 px-6">
                  Contact
                </Link>
                <Link href="/work" className="premium-cta-outline h-12 px-6">
                  View Work
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
