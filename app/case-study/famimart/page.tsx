import type { Metadata } from "next";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Famimart Case Study | AnisConsult",
  description:
    "Convenience store workflow renovation for a family-run retail context, focused on routines, ownership, stock visibility and daily execution.",
};

const sectionLinks = [
  { label: "Context", href: "#context" },
  { label: "Problem", href: "#problem" },
  { label: "Reference", href: "#reference" },
  { label: "Clarified", href: "#clarified" },
  { label: "Outcome", href: "#outcome" },
] as const;

const problemItems = [
  "Informal routines depended too much on memory",
  "Manual coordination made handovers harder to control",
  "Stock visibility and replenishment needed a clearer rhythm",
  "Supplier follow-up needed more structure",
  "Product categories needed cleaner organization",
  "Cashier opening and closing routines needed clearer control",
] as const;

const referenceItems = [
  "Compact store discipline",
  "Clean product categories",
  "Fast checkout routines",
  "Routine-based execution",
  "Product availability",
  "Daily control",
] as const;

const clarifiedItems = [
  "Product category structure",
  "Cashier opening and closing routines",
  "Stock replenishment logic",
  "Supplier follow-up rhythm",
  "Daily control checklist",
  "Handover logic",
  "Basic reporting routine",
  "Responsibility ownership",
] as const;

const changeItems = [
  "Clearer daily rhythm",
  "Better visibility over what needs action",
  "Less dependency on memory",
  "Clearer cashier and stock routines",
  "More structured supplier follow-up",
] as const;

const flowSteps = [
  "Opening",
  "Cashier session",
  "Stock check",
  "Replenishment",
  "Supplier follow-up",
  "Closing",
] as const;

export default function FamimartCaseStudyPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-14 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
            <div className="max-w-5xl">
              <SectionKicker label="Retail operations / Process improvement" />
              <h1 className="mt-6 max-w-5xl font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
                Famimart — Convenience store workflow renovation
              </h1>

              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                Operational redesign for a family-run neighborhood store, inspired by Japanese konbini execution standards.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Famimart is a convenience store workflow renovation case based on a family-run retail context in Algeria. The goal was to rethink how a small neighborhood store could operate with clearer routines, better stock discipline and a more structured daily execution rhythm.
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
                  The case is inspired by Allouache &amp; Frères, a neighborhood convenience store context in Algeria. It reflects a family retail environment where daily execution depends on many small routines moving together.
                </p>
                <p className="mt-5 text-base leading-8 text-ink">
                  The work focused on the operating model: cashier routines, stock visibility, replenishment, supplier follow-up, category structure and daily opening and closing control.
                </p>
              </article>

              <article className="rounded-[2rem] border border-line bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)]">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                  Operating constraint
                </p>
                <p className="mt-6 text-base leading-8 text-ink">
                  The store context relied heavily on informal coordination, memory and manual follow-up. Stock, cashier sessions, replenishment, supplier follow-up and daily routines needed a clearer operating structure.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="problem" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <SectionKicker label="Operational problem" />
              <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                Daily store execution needed clearer routines, handovers and ownership so the operation could depend less on memory.
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

        <section id="reference" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <article className="rounded-[2rem] border border-line bg-surface p-8 lg:p-10">
                <SectionKicker label="Reference model" />
                <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                  Japanese konbini operations were used as a reference point for disciplined daily execution.
                </p>
                <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                  The reference was not about copying a format. It was about learning from compact layouts, disciplined routines, clear categories, fast checkout, product availability and daily execution control.
                </p>
              </article>

              <div className="grid gap-4 sm:grid-cols-2">
                {referenceItems.map((item) => (
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

        <section id="clarified" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-4xl">
              <SectionKicker label="What was clarified" />
              <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                The work created a clearer operating model for what needs to be checked, who owns each routine and how daily execution can be reviewed.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {clarifiedItems.map((item) => (
                <article
                  key={item}
                  className="rounded-[2rem] border border-line bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)]"
                >
                  <p className="text-sm leading-7 text-ink">{item}</p>
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
                  The store gained a clearer daily rhythm for cashier control, stock movement, supplier follow-up and routine review.
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

        <section id="outcome" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="rounded-[2rem] border border-line bg-white p-8 lg:p-10">
              <SectionKicker label="Outcome" />
              <p className="mt-5 max-w-4xl text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                The result was a structured retail operating model designed to reduce informal follow-up and make day-to-day execution easier to control.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                A dedicated POS workflow later supported the operating model, but this case focuses on process, routines and execution clarity.
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
                    Operational tools built for this context
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full border border-line bg-surface px-5 py-3 text-sm font-semibold text-muted/70">
                      Alcaisse (demo to add)
                    </span>
                    <a
                      href="https://storepilot.anisconsult.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"
                    >
                      StorePilot — storepilot.anisconsult.com
                    </a>
                  </div>
                </div>
                <Link
                  href="/work"
                  className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  View operational cases
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
