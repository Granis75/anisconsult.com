import type { Metadata } from "next";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Services | AnisConsult — Operational Improvement & Process Optimization",
  description:
    "Workflow audits, process cleanup, responsibility clarity and service quality improvement for service-based businesses.",
};

const services = [
  {
    title: "Operational Audit",
    fit: "For teams relying on spreadsheets, chats, emails, memory or scattered information.",
    problem: "Work is moving, but ownership, status and follow-up are hard to see.",
    delivers: [
      "Recurring blocker review",
      "Manual follow-up gaps",
      "Coordination issues",
      "Ownership risks",
      "Action plan",
    ],
  },
  {
    title: "Process Clarification",
    fit: "For businesses with recurring handoffs, delays or avoidable admin work.",
    problem: "A repeated process has too many unclear steps, manual checks or hidden dependencies.",
    delivers: [
      "Current process map",
      "Responsibility definition",
      "Simplified handoffs",
      "Unnecessary step removal",
      "Clearer operating routine",
    ],
  },
  {
    title: "Follow-up Structure",
    fit: "For teams that need clearer daily control without adding complexity.",
    problem: "People are working hard, but priorities, blockers and next actions are not consistently visible.",
    delivers: [
      "Status rhythm",
      "Next-action rules",
      "Priority review",
      "Blocker escalation",
      "Accountability routine",
    ],
  },
  {
    title: "Reporting Routine",
    fit: "For leaders who need to see what is happening without chasing information.",
    problem: "Reporting is too dependent on manual chasing, late updates or individual memory.",
    delivers: [
      "Reporting rhythm",
      "Update routine",
      "Operational indicators",
      "Ownership of updates",
      "Leadership review format",
    ],
  },
  {
    title: "Execution Support",
    fit: "For service businesses that want more consistent delivery and follow-up.",
    problem: "New routines need implementation support, team coordination and operational discipline over time.",
    delivers: [
      "Implementation support",
      "Team coordination",
      "Routine adjustment",
      "Service quality follow-up",
      "Ongoing action plan review",
    ],
  },
] as const;

const optionalService = {
  title: "Operational Tool Build",
  description:
    "When the process is clear and a tool would make it more reliable, I can scope and build it. Not as a software product. As an operational output.",
  delivers: [
    "Scoped operational tool",
    "Deployed and usable",
    "Built around the clarified workflow",
    "Integrated into existing operating routine",
  ],
} as const;

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
            <div className="max-w-4xl">
              <SectionKicker label="Services" />
              <h1 className="mt-6 font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
                Operational improvement for service teams.
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                Practical help for teams that need clearer ownership, cleaner follow-up and reporting they can trust.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Start with an audit when the workflow is unclear. Move into process cleanup when the recurring work needs simpler ownership, fewer manual checks and a clearer review rhythm.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:px-10 lg:py-20">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[2rem] border border-line bg-surface p-8 lg:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-12">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                      Consulting focus
                    </p>
                    <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                      {service.fit}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-ink/72">
                      {service.problem}
                    </p>
                  </div>

                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                      Delivered
                    </p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {service.delivers.map((item) => (
                        <div key={item} className="rounded-2xl border border-line bg-white px-4 py-3">
                          <p className="text-sm font-medium leading-6 text-ink">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}

            <article className="border-t border-line pt-8">
              <div className="rounded-[2rem] border border-line bg-white p-8 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-12">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                      Consulting focus
                    </p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-black/35">
                      Extended service
                    </p>
                    <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
                      {optionalService.title}
                    </h2>
                    <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                      {optionalService.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                      Delivered
                    </p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {optionalService.delivers.map((item) => (
                        <div key={item} className="rounded-2xl border border-line bg-surface px-4 py-3">
                          <p className="text-sm font-medium leading-6 text-ink">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <div className="border-t border-line pt-8">
              <Link href="/contact" className="premium-cta h-12 px-6">
                Discuss an operations issue
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
