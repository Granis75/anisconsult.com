import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Kepler Express Ops — Case Study | anisconsult",
  description:
    "A logistics case study about replacing manual coordination with a connected operational workflow.",
};

const sectionLinks = [
  { label: "Context", href: "#context" },
  { label: "Problem", href: "#problem" },
  { label: "What Was Implemented", href: "#implementation" },
  { label: "Results", href: "#results" },
  { label: "What Changed", href: "#change" },
  { label: "Key Insight", href: "#insight" },
] as const;

const problemItems = [
  "No real-time visibility on missions",
  "Execution depended on calls, memory and scattered files",
  "Driver expenses tracked manually, often after the mission",
  "No clear view of costs or profitability per mission",
  "Invoicing disconnected from operations",
] as const;

const implementationItems = [
  "Structured operational flow: client → mission → expense → invoice → payment",
  "Centralized workflows from intake to delivery tracking and billing",
  "Linked expenses directly to mission execution",
  "Separated driver advances and company costs",
  "Introduced mission-level profitability logic",
  "Built a unified operational view (missions, costs, invoices, maintenance)",
] as const;

const resultItems = [
  "Reduced manual tracking and follow-up",
  "Clear visibility on mission execution and billing state",
  "Costs understood in context, not after the fact",
  "Mission-level profitability became readable",
  "Operations became easier to manage and coordinate",
] as const;

const changeItems = [
  "One source of truth for operations and admin",
  "Better alignment between execution and billing",
  "More reliable follow-up on missions and payments",
  "Clearer decision-making on costs and performance",
] as const;

const flowSteps = ["Client", "Mission", "Expense", "Invoice", "Payment"] as const;

export default function KeplerExpressCaseStudyPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-14 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
            <div className="max-w-5xl">
              <SectionKicker label="Case Study" />
              <h1 className="mt-6 max-w-5xl text-balance text-4xl font-extrabold leading-tight tracking-tighter2 text-ink sm:text-5xl lg:text-6xl">
                Kepler Express Ops
              </h1>

              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                Replacing manual logistics coordination with a connected
                operational workflow.
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
                <SectionKicker label="Context" />
                <p className="mt-6 text-base leading-8 text-ink">
                  A small logistics company managing daily missions with a lean
                  team.
                </p>
              </article>

              <article className="rounded-[2rem] border border-line bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)]">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                  Context
                </p>
                <p className="mt-6 text-base leading-8 text-ink">
                  Operations relied on Excel, paper notes and calls, with no
                  structured system linking execution, costs and billing.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="problem" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <SectionKicker label="Problem" />
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
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
              <SectionKicker label="What Was Implemented" />
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {implementationItems.map((item) => (
                <article
                  key={item}
                  className="rounded-[2rem] border border-line bg-surface p-8"
                >
                  <p className="text-sm leading-7 text-ink">{item}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <div className="w-full max-w-[900px] overflow-hidden rounded-[24px] border border-line bg-surface">
                <Image
                  src="/visuals/kepler-operations-flow.svg"
                  alt="Operational mission tracking view showing a pharma delivery in transit with expenses and invoice status."
                  width={1600}
                  height={1200}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <SectionKicker label="Results" />
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {resultItems.map((item) => (
                <article
                  key={item}
                  className="rounded-[2rem] border border-line bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)]"
                >
                  <p className="text-sm font-semibold leading-7 text-ink">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="change" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="rounded-[2rem] border border-line bg-surface p-8 lg:p-10">
                <SectionKicker label="What Changed" />
                <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                  Daily operations no longer relied on scattered tools and
                  manual coordination.
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
                Operational clarity came from connecting the flow — not adding
                complexity.
              </p>

              <div className="mt-10 border-t border-line pt-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                  System flow
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
