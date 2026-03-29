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

const impactItems = [
  "Reduced manual tracking and follow-up across missions.",
  "Made costs easier to read while work was still in progress.",
  "Kept billing closer to execution and expense capture.",
  "Gave the team a clearer operational view from mission status to payment.",
] as const;

const flowSteps = ["Client", "Mission", "Expense", "Invoice", "Payment"] as const;

export default function KeplerExpressCaseStudyPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pb-24 lg:pt-24">
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

        <section id="problem" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <SectionKicker label="Problem" />
              <p className="mt-6 text-lg leading-8 text-ink">
                Daily logistics work relied on tools that were never meant to
                operate together.
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
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="max-w-5xl">
              <SectionKicker label="System flow" />
              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 text-lg font-semibold tracking-[-0.03em] text-ink sm:text-2xl">
                {flowSteps.map((item, index) => (
                  <div key={item} className="flex items-center gap-x-4">
                    <span>{item}</span>
                    {index < flowSteps.length - 1 ? (
                      <span className="text-black/25">→</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <SectionKicker label="Impact" />
              <ul className="mt-8 space-y-4 pl-5 text-base leading-8 text-ink marker:text-black/30">
                {impactItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-4xl">
              <SectionKicker label="Product Thinking" />
              <p className="mt-6 text-xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-2xl">
                Simplicity mattered more than feature volume: the product was
                designed to connect the core flow, keep the data model
                consistent, and support real logistics constraints without
                adding more tools to manage.
              </p>

              <div className="mt-10">
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
