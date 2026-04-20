import type { Metadata } from "next";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Résidence Cadet Case Study | Hospitality Operations | Anis",
  description:
    "Hospitality operations case study covering guest follow-up, access, reporting and lighter admin workload at Résidence Cadet in Paris.",
};

const sectionLinks = [
  { label: "Context", href: "#context" },
  { label: "Problem", href: "#problem" },
  { label: "Workflow", href: "#implementation" },
  { label: "Results", href: "#results" },
  { label: "Insight", href: "#insight" },
] as const;

const problemItems = [
  "Guest information lived across Excel, PMS and messages",
  "Front desk handled too many routine tasks",
  "Payment and admin follow-up took too much manual work",
  "Issues were hard to track from start to resolution",
  "Managers had no clean view of daily execution",
] as const;

const implementationItems = [
  "Mapped the full chain from booking to stay to reporting",
  "Grouped guest data, follow-up and preferences in one place",
  "Reduced front-desk dependency through automated access",
  "Cleaned up payment and admin steps",
  "Built internal views for daily follow-up",
  "Made operations and revenue easier to read together",
] as const;

const resultItems = [
  {
    title: "Improved Guest Satisfaction",
    detail: "Guest follow-up, access and issue handling became easier to manage consistently",
  },
  {
    title: "Stronger Platform Visibility",
    detail: "Listing quality and operational consistency were easier to maintain",
  },
  {
    title: "~10h/week Admin Workload Reduced",
    detail: "Routine admin and manual follow-up took significantly less weekly time",
  },
  {
    title: "New Revenue Segment Growth",
    detail: "A clearer operating flow supported expansion into a new segment",
  },
] as const;

const changeItems = [
  "Guest issues were easier to track",
  "Less dependency on front desk for routine tasks",
  "Managers could see status and revenue earlier",
  "The stay experience became more consistent",
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
                Résidence Cadet
              </h1>

              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                Guest operations were running through Excel, calls and front-desk dependency.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                The work was to make stays, access, follow-up and reporting easier to run day to day.
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
                  Multi-unit short-stay operations with guest communication, access, issues and reporting spread across too many tools. Based on real operational work at Résidence Cadet in Paris.
                </p>
              </article>

              <article className="rounded-[2rem] border border-line bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)]">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                  Where It Broke
                </p>
                <p className="mt-6 text-base leading-8 text-ink">
                  Too much depended on manual checks, front-desk coordination and scattered guest information.
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
                The day-to-day work was hard to run cleanly because the basic flow was split across files, calls and people.
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
              <SectionKicker label="Workflow" />
              <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                The work was reorganized into one operating flow the team could actually follow.
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
                <SectionKicker label="What Changed" />
                <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                  The team spent less time chasing information and more time running the work.
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
                The gains came from giving the team one working flow instead of separate files, calls and workarounds.
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
                <Link
                  href="/work"
                  className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  View work
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
