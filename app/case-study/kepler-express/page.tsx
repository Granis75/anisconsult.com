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
  "Excel, paper notes, and calls were used to coordinate daily missions",
  "Mission follow-up depended on memory and scattered files rather than one shared view",
  "Expenses were captured manually, often after the mission was already completed",
  "Billing sat outside execution, making costs and profitability hard to read",
] as const;

const resultItems = [
  {
    title: "Reduced manual tracking",
    detail: "Daily follow-up no longer depended on scattered tools.",
  },
  {
    title: "Mission-level cost visibility",
    detail: "Costs became readable in context.",
  },
  {
    title: "Billing closer to execution",
    detail: "Invoicing stayed connected to mission flow.",
  },
  {
    title: "Clearer operations follow-up",
    detail: "One structured chain improved coordination.",
  },
] as const;

const implementationItems = [
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
          <div className="mx-auto max-w-6xl px-6 pb-14 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
            <div className="max-w-4xl">
              <SectionKicker label="Case Study" />
              <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                Kepler Express Ops
              </p>
              <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-tighter2 text-ink sm:text-5xl lg:text-[3.65rem]">
                From fragmented logistics operations to a structured system.
              </h1>
              <p className="mt-6 max-w-2xl text-xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-2xl">
                A connected product designed to replace Excel, calls, and
                manual follow-up in a small logistics company.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-14">
            <div className="space-y-12 lg:space-y-16">
              <section className="space-y-6">
                <div className="max-w-3xl">
                  <SectionKicker label="Results" />
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {resultItems.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                    >
                      <p className="text-sm font-semibold tracking-[-0.01em] text-ink">
                        {item.title}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        {item.detail}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <div className="grid gap-6 pt-2 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-7">
                <section
                  id="problem"
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
                >
                  <SectionKicker label="Problem" />
                  <p className="mt-5 max-w-xl text-lg font-semibold leading-8 tracking-[-0.02em] text-ink">
                    Daily logistics work relied on disconnected tools and manual
                    coordination.
                  </p>

                  <ul className="mt-6 space-y-3 pl-5 text-sm leading-7 text-ink marker:text-black/30 sm:text-base">
                    {problemItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                  <SectionKicker label="What was implemented" />
                  <p className="mt-5 max-w-xl text-lg font-semibold leading-8 tracking-[-0.02em] text-ink">
                    A connected operational chain replaced fragmented follow-up.
                  </p>

                  <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 sm:px-5">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                      System flow
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2.5">
                      {flowSteps.map((item, index) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-ink">
                            {item}
                          </span>
                          {index < flowSteps.length - 1 ? (
                            <span className="text-sm text-black/25">→</span>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3 pl-5 text-sm leading-7 text-ink marker:text-black/30 sm:text-base">
                    {implementationItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="space-y-8">
                <div className="max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <SectionKicker label="Key takeaway" />
                  <p className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                    Operational clarity came from connecting the flow — not
                    adding complexity.
                  </p>
                </div>

                <div>
                  <Link
                    href="/"
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-slate-50"
                  >
                    Back to home
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
