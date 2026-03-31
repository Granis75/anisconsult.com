import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const sectionLinks = [
  { label: "Context", href: "#context" },
  { label: "Problem", href: "#problem" },
  { label: "What Was Implemented", href: "#implementation" },
  { label: "Results", href: "#results" },
  { label: "What Changed", href: "#change" },
  { label: "Key Insight", href: "#insight" },
] as const;

const problemItems = [
  "Disconnected tools (Excel, PMS, manual tracking)",
  "Strong reliance on front-desk presence",
  "Limited use of customer data",
  "Repetitive administrative tasks",
  "Lack of clear operational flow",
] as const;

const implementationItems = [
  "Structured end-to-end workflow (acquisition → booking → operations → reporting)",
  "Introduced CRM logic (customer data, preferences, follow-ups)",
  "Reduced front-desk dependency through access automation (RFID / Bluetooth)",
  "Simplified payment and administrative processes",
  "Built internal tools to support daily operations",
  "Centralized data for better tracking and decision-making",
] as const;

const resultItems = [
  {
    value: "9.2",
    label: "review score",
    meta: "from 7.6",
  },
  {
    value: "Top 30",
    label: "ranking",
    meta: "from ~450",
  },
  {
    value: "~10h/week",
    label: "saved on admin",
    meta: "",
  },
  {
    value: "+50%",
    label: "revenue from a new market",
    meta: "",
  },
] as const;

const changeItems = [
  "Less friction in daily execution",
  "More autonomy across operations",
  "Better visibility on performance",
  "More consistent customer experience",
] as const;

const flowSteps = [
  "Acquisition",
  "Booking",
  "CRM",
  "Access",
  "Operations",
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
                Vesper Collection
              </h1>

              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                Turning fragmented hospitality operations into a clearer, more
                reliable system.
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
                  A hospitality business relying on fragmented tools, manual
                  coordination and strong front-desk dependency.
                </p>
              </article>

              <article className="rounded-[2rem] border border-line bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)]">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                  Operating reality
                </p>
                <p className="mt-6 text-base leading-8 text-ink">
                  Operations were difficult to manage, with limited visibility
                  on performance and heavy administrative workload.
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
                Disconnected tools, front-desk dependency and repetitive admin
                were making the business harder to run.
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
              <SectionKicker label="What Was Implemented" />
              <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                The work focused on flow, customer data, access, payments and
                internal tools that supported daily execution.
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
                  key={item.label}
                  className="rounded-[2rem] border border-line bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)]"
                >
                  <p className="text-sm font-medium text-muted">{item.label}</p>
                  <p className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-ink">
                    {item.value}
                  </p>
                  {item.meta ? (
                    <p className="mt-3 text-sm leading-7 text-muted">{item.meta}</p>
                  ) : null}
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
                  Operations became easier to run and less dependent on manual
                  coordination.
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
                Better results came from structuring the system — not adding
                more tools.
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
