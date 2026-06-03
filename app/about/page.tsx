import type { Metadata } from "next";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About | AnisConsult — Business Systems & Workflow Tools",
  description:
    "AnisConsult helps service businesses structure clearer workflows, internal tools and reporting systems.",
};

const focusItems = [
  {
    title: "Workflow audits",
    detail: "Map the current flow, identify friction and clarify ownership, status and next actions.",
  },
  {
    title: "Internal tools",
    detail: "Set up practical tracking spaces for recurring work, issues, payments and follow-up.",
  },
  {
    title: "Reporting systems",
    detail: "Create recurring status views and reporting layers that are easier to maintain.",
  },
  {
    title: "Process automation",
    detail: "Reduce repeated manual steps where the workflow is stable enough to support it.",
  },
] as const;

const backgroundItems = [
  "Service operations",
  "Workflow management",
  "Internal tools",
  "Operational reporting",
  "Business software",
  "Database-backed systems",
  "Process improvement",
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
                Business systems &amp; workflow tools
              </p>
              <h1 className="mt-5 max-w-5xl font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
                I help service businesses structure clearer workflows, tools and reporting systems.
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                Most operational problems are not people problems. They are visibility problems.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                I work at the intersection of operations, workflow design and business tools, with experience across hospitality, serviced residences, logistics and daily business operations.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                After working directly with reservations, payments, incidents, suppliers, housekeeping and reporting, I focus on systems that make daily operations easier to see and run.
              </p>
              <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-ink sm:text-lg">
                I build and improve business systems that make operations simpler, more visible and more reliable.
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
                <SectionKicker label="Why I build what I build" />
                <div className="mt-6 grid gap-5">
                  <p className="text-base leading-8 text-ink sm:text-lg">
                    One pattern was constant across those operations: most teams do not lack effort. They lack a usable view of the work.
                  </p>
                  <p className="text-base leading-8 text-muted sm:text-lg">
                    Requests, handoffs, payments, issues and reporting often live across messages, spreadsheets, emails and memory. AnisConsult exists to turn that work into tools and routines people can actually run.
                  </p>
                  <p className="text-base leading-8 text-muted sm:text-lg">
                    That field experience includes a 23-unit serviced residence, hospitality systems exposure, logistics workflows, manual follow-up reduction and internal tools shaped around operating constraints.
                  </p>
                </div>
              </article>

              <article className="premium-soft-card p-8">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                  Background
                </p>
                <div className="mt-6 grid gap-4">
                  {backgroundItems.map((item) => (
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

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="mb-10 max-w-3xl">
              <SectionKicker label="What AnisConsult builds" />
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
              This is not a traditional consulting firm built around slide decks and abstract recommendations. The focus is on practical systems, working tools and visible operational flows.{" "}
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
