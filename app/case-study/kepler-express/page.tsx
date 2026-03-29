import type { Metadata } from "next";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Kepler Express Ops — Case Study | anisconsult",
  description:
    "A logistics case study about replacing manual coordination with a connected operational workflow.",
};

const problemItems = [
  "Excel, paper notes, and calls were used to coordinate daily missions.",
  "Mission follow-up depended on memory and scattered files rather than one shared view.",
  "Expenses were captured manually, often after the mission was already completed.",
  "Billing sat outside execution, making costs and profitability hard to read.",
] as const;

const resultItems = [
  {
    title: "Reduced manual tracking",
    detail: "Daily follow-up no longer depended on scattered tools.",
  },
  {
    title: "Mission-level cost visibility",
    detail: "Costs became readable in context instead of after the fact.",
  },
  {
    title: "Billing closer to execution",
    detail: "Invoicing stayed connected to mission flow and expense capture.",
  },
  {
    title: "Clearer operations follow-up",
    detail: "One structured chain improved coordination across the team.",
  },
] as const;

const implementationItems = [
  "Structured operational flow: Client → Mission → Expense → Invoice → Payment",
  "Centralized workflows from intake to billing",
  "Linked expenses directly to mission execution",
  "Separated driver advances and company costs",
  "Introduced mission-level profitability logic",
] as const;

const flowSteps = ["Client", "Mission", "Expense", "Invoice", "Payment"] as const;

export default function KeplerExpressCaseStudyPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
            <div className="max-w-5xl">
              <SectionKicker label="Case Study" />
              <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                Kepler Express Ops
              </p>
              <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-tighter2 text-ink sm:text-5xl lg:text-6xl">
                From fragmented logistics operations to a structured system.
              </h1>
              <p className="mt-7 max-w-3xl text-xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-2xl">
                A connected product designed to replace Excel, calls, and
                manual follow-up in a small logistics company.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="max-w-3xl">
              <SectionKicker label="Results" />
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:max-w-5xl">
              {resultItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-line bg-white px-6 py-6 shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
                >
                  <p className="text-sm font-semibold tracking-[-0.01em] text-ink">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="problem" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl">
              <SectionKicker label="Problem" />
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink">
                Daily logistics work relied on disconnected tools and manual
                coordination.
              </p>

              <ul className="mt-8 space-y-4 pl-5 text-base leading-8 text-ink marker:text-black/30">
                {problemItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl">
              <SectionKicker label="What was implemented" />
              <ul className="mt-8 space-y-4 pl-5 text-base leading-8 text-ink marker:text-black/30">
                {implementationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="max-w-5xl">
              <SectionKicker label="System flow" />
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {flowSteps.map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold tracking-[-0.01em] text-ink sm:px-5">
                      {item}
                    </span>
                    {index < flowSteps.length - 1 ? (
                      <span className="text-sm text-black/25">→</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
            <div className="max-w-4xl">
              <SectionKicker label="Key takeaway" />
              <div className="mt-6 rounded-[2rem] border border-line bg-surface px-7 py-8 sm:px-8 sm:py-9">
                <p className="max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                  Operational clarity came from connecting the flow — not adding
                  complexity.
                </p>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                  The value came from a tighter operational chain, clearer cost
                  capture, and better alignment between execution and billing.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="/"
                  className="inline-flex items-center rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink transition hover:bg-surface"
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
