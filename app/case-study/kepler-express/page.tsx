import type { Metadata } from "next";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Kepler Express — Case Study | Anis",
  description:
    "A logistics case study about dispatch, expenses and invoicing brought into one workflow.",
};

const problemItems = [
  "Drivers and office staff relied on calls, paper notes and spreadsheets",
  "There was no shared view of mission status",
  "Expenses were logged late or missed",
  "Invoices had to be rebuilt from scattered information",
  "Margin per mission was hard to see",
] as const;

const resultItems = [
  {
    title: "Reduced Manual Tracking",
    detail: "Less dependence on calls, paper and separate files",
  },
  {
    title: "Mission-Level Cost Visibility",
    detail: "Costs were captured inside the day-to-day workflow",
  },
  {
    title: "Billing Aligned with Operations",
    detail: "Invoices were built from mission and expense data",
  },
  {
    title: "Improved Operational Coordination",
    detail: "Dispatch and billing worked from the same information",
  },
] as const;

const implementationItems = [
  "Set one flow from client request to payment",
  "Linked expenses to the mission instead of separate notes",
  "Separated driver advances from company costs",
  "Added mission-level margin tracking",
  "Made daily operations and billing easier to reconcile",
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
              <h1 className="mt-6 max-w-4xl font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.65rem]">
                Kepler Express
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                Daily logistics work was being run through Excel, calls and paper notes.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                The job was to tie mission updates, expenses and billing together so the team could stop rebuilding everything by hand.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-14">
            <div className="space-y-12 lg:space-y-16">
              <section className="max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                <SectionKicker label="Context" />
                <p className="mt-5 text-base leading-8 text-ink sm:text-lg">
                  Small transport operations with dispatch, driver costs and invoices handled separately.
                </p>
              </section>

              <div className="grid gap-6 pt-2 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-7">
                <section
                  id="problem"
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
                >
                  <SectionKicker label="Problem" />
                  <p className="mt-5 max-w-xl text-lg font-semibold leading-8 tracking-[-0.02em] text-ink">
                    The work was hard to follow because mission status, expenses and billing were disconnected.
                  </p>

                  <ul className="mt-6 space-y-3 pl-5 text-sm leading-7 text-ink marker:text-black/30 sm:text-base">
                    {problemItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                  <SectionKicker label="System" />
                  <p className="mt-5 max-w-xl text-lg font-semibold leading-8 tracking-[-0.02em] text-ink">
                    The workflow was rebuilt so missions, expenses and invoicing moved together.
                  </p>

                  <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 sm:px-5">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                      System Flow
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

              <section className="space-y-8">
                <div className="max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <SectionKicker label="Insight" />
                  <p className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                    Once missions, expenses and invoices were tied together, coordination became much less reactive.
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                    The improvement came from cleaner follow-up and fewer manual reconciliations.
                  </p>

                  <div className="mt-6">
                    <a
                      href="https://kepler-express.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-slate-50"
                    >
                      Open tool
                    </a>
                  </div>
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
