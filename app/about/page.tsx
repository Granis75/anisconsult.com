import type { Metadata } from "next";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About | AnisConsult — Operational Improvement & Process Clarity",
  description:
    "AnisConsult helps service businesses improve daily operations, clarify workflows and reduce manual friction.",
};

const focusItems = [
  {
    title: "Workflow audits",
    detail: "Map the current flow, identify friction and clarify ownership, status and next actions.",
  },
  {
    title: "Process cleanup",
    detail: "Simplify recurring handoffs, statuses, review rhythms and follow-up routines.",
  },
  {
    title: "Execution structure",
    detail: "Clarify who owns what, what happens next and how operational work is reviewed.",
  },
  {
    title: "Service quality",
    detail: "Identify recurring misses and improve consistency across daily service delivery.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
            <div className="max-w-5xl">
              <SectionKicker label="About" />
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-black/42">
                Operational improvement &amp; process clarity
              </p>
              <h1 className="mt-5 max-w-5xl font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
                I help service businesses improve daily operations and structure clearer execution.
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                Most operational problems are not people problems. They are visibility problems.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                I work at the intersection of operations, workflow design and practical process improvement, with experience across hospitality, serviced residences, logistics and daily business operations.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                After working directly with reservations, payments, incidents, suppliers, housekeeping and reporting, I focus on operating routines that make daily work easier to see and run.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Some of those tools were built to test what the process had made visible.
              </p>
              <Link
                href="/#operational-tools"
                className="mt-3 inline-flex text-sm font-semibold text-ink underline-offset-2 hover:underline"
              >
                View operational tools
              </Link>
              <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-ink sm:text-lg">
                The work is practical: clarify the process, reduce manual friction, improve follow-up and make execution more reliable.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/services" className="premium-cta h-12 px-6">
                  View services
                </Link>
                <Link href="/work" className="premium-cta-outline h-12 px-6">
                  View the work
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-start lg:gap-8">
              <article className="premium-card p-8 lg:p-10">
                <SectionKicker label="Why this work matters" />
                <div className="mt-6 grid gap-5">
                  <p className="text-xl font-semibold leading-8 tracking-[-0.02em] text-ink sm:text-2xl">
                    Most operational problems are not people problems. They are visibility problems.
                  </p>
                  <p className="text-base leading-8 text-ink sm:text-lg">
                    One pattern was constant across those operations: most teams do not lack effort. They lack a usable view of the work.
                  </p>
                  <p className="text-base leading-8 text-muted sm:text-lg">
                    Requests, handoffs, payments, issues and reporting often live across messages, spreadsheets, emails and memory. AnisConsult exists to turn that scattered work into clearer routines people can actually run.
                  </p>
                  <p className="text-base leading-8 text-muted sm:text-lg">
                    That field experience includes a 23-unit serviced residence, hospitality operations exposure, logistics workflows, manual follow-up reduction and process improvement shaped around real operating constraints.
                  </p>
                </div>
              </article>

              <article className="premium-soft-card p-8">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                  Background
                </p>
                <p className="mt-6 text-base leading-8 text-ink">
                  Background in service operations across hospitality, logistics and daily business execution.
                </p>
                <p className="mt-5 text-base leading-8 text-muted">
                  Field experience shaped the method: most operational problems become visible once the workflow is mapped.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="mb-10 max-w-3xl">
              <SectionKicker label="What AnisConsult improves" />
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {focusItems.map((item) => (
                <article key={item.title} className="premium-soft-card flex h-full flex-col">
                  <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-[2rem]">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-muted">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-12">
            <p className="max-w-2xl text-sm leading-7 text-muted">
              This is not a traditional consulting firm built around slide decks and abstract recommendations. The focus is on practical operating clarity, service quality and visible execution.{" "}
              <Link href="/work" className="font-medium text-ink underline-offset-2 hover:underline">
                View the work.
              </Link>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
