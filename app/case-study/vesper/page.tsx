import type { Metadata } from "next";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Résidence Cadet Case Study | AnisConsult",
  description:
    "How Résidence Cadet clarified guest follow-up, access, payments, incidents and reporting across a 23-unit serviced residence.",
};

const sectionLinks = [
  { label: "Context", href: "#context" },
  { label: "Problem", href: "#problem" },
  { label: "System", href: "#implementation" },
  { label: "Outcomes", href: "#results" },
  { label: "Insight", href: "#insight" },
] as const;

const problemItems = [
  "Work was spread across tools, messages, PMS workflows and individual memory",
  "Front desk handled too many routine checks and repeated follow-up tasks",
  "Payment and billing follow-up took too much manual work",
  "Incidents were hard to track from report to resolution",
  "Managers had no clean view of daily execution, housekeeping and reporting",
] as const;

const implementationItems = [
  "Created clearer ownership across recurring operational tasks",
  "Structured daily routines from reservations to stays to reporting",
  "Tracked recurring follow-up instead of relying on memory",
  "Made incidents visible from report to resolution",
  "Clarified payment and billing follow-up",
  "Built operational reporting views for daily control",
] as const;

const resultItems = [
  {
    title: "7.6 → 9.2 / 10",
    detail: "Guest satisfaction score. Consistent follow-up, cleaner access and faster issue resolution.",
  },
  {
    title: "~10h/week",
    detail: "Admin workload reduced. Routine manual follow-up replaced by structured workflow.",
  },
  {
    title: "Top 30 / ~450",
    detail: "Platform ranking supported by cleaner guest follow-up and operational consistency.",
  },
  {
    title: "Cleaner handoffs",
    detail: "Access, incidents, payments and reporting became easier to coordinate.",
  },
] as const;

const changeItems = [
  "Guest requests and incidents were easier to track",
  "Less dependency on front desk for routine follow-up",
  "Managers could see operational status and revenue earlier",
  "Reservations, payments, housekeeping and reporting became easier to coordinate",
] as const;

const flowSteps = [
  "Reservation",
  "Assignment",
  "Check-in",
  "Operations",
  "Checkout",
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
              <SectionKicker label="Operational Proof" />
              <h1 className="mt-6 max-w-5xl font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
                Operational visibility for a 23-unit serviced residence
              </h1>

              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                How scattered daily operations were turned into clearer workflows across reservations, payments, incidents, housekeeping and reporting.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Résidence Cadet operated as a 23-unit serviced residence with daily complexity across arrivals, departures, guest requests, payments, housekeeping, maintenance and reporting.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Guest operations were running through Excel, calls and front-desk dependency. At the start of each week, the manager still had to piece together who was arriving, who still owed a payment, and which maintenance issue had not been closed.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                The workflow structure clarified ownership, recurring follow-up, incidents, payment tracking, reporting and daily routines.
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
                  A 23-unit serviced residence with daily operational complexity across arrivals, departures, guest requests, payments, housekeeping, maintenance and reporting. Based on real operational work at Résidence Cadet in Paris.
                </p>
                <p className="mt-5 text-base leading-8 text-ink">
                  The setup came from real operating constraints, not a blank-sheet process map.
                </p>
              </article>

              <article className="rounded-[2rem] border border-line bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)]">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                  Operational Constraint
                </p>
                <p className="mt-6 text-base leading-8 text-ink">
                  Too much depended on manual checks, front-desk coordination, PMS workflows, scattered guest information and individual memory.
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
                Daily work was hard to run cleanly because the basic operating flow was split across tools, messages, PMS workflows, manual follow-up and people.
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
                <SectionKicker label="Workflow response" />
              <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                A practical operating flow was created so the team could see ownership, follow-up, incidents, payments and reporting more clearly.
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
              <SectionKicker label="Outcomes" />
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
                <SectionKicker label="What changed" />
                <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                  The team spent less time chasing information and more time running the operation.
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
              <SectionKicker label="Insight" />
              <p className="mt-5 max-w-4xl text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                Most of the improvement came from removing manual follow-up and unclear handoffs.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                The gains came from giving the team one working flow instead of separate files, calls, PMS workarounds and manual checks.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                The setup came from real operating constraints, not a blank-sheet process map.
              </p>

              <div className="mt-10 border-t border-line pt-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                  Operating Flow
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
                <div className="mb-6 border-t border-line pt-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                    Operational tool built for this context
                  </p>
                  <a
                    href="https://stayops.anisconsult.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center rounded-full border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"
                  >
                    StayOps demo
                  </a>
                </div>
                <Link
                  href="/work"
                  className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  View more operational work
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
