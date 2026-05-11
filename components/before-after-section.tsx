"use client";

import { SectionKicker } from "@/components/section-kicker";

const beforePoints = [
  "scattered emails, chats and sheets",
  "unclear ownership",
  "manual reporting",
  "lost follow-ups",
  "decisions made from memory",
] as const;

const afterPoints = [
  "one operating view",
  "visible owners and blockers",
  "clean status tracking",
  "faster reporting",
  "systems simple enough for the team to use",
] as const;

export function BeforeAfterSection() {
  return (
    <section className="scroll-mt-32 border-t border-line bg-white md:scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="mb-14 max-w-3xl">
          <SectionKicker label="Transformation" />
          <h2 className="text-balance mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.5rem]">
            From chaos to clarity.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="premium-soft-card bg-white">
            <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
              <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-ink">
                Before
              </h3>
              <span className="rounded-full border border-black/8 bg-[#f4f2ec] px-3 py-1 text-xs font-medium text-ink/62">
                Manual
              </span>
            </div>
            <ul className="mt-6 space-y-4">
              {beforePoints.map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/28" />
                  <span className="text-base leading-7 text-muted">{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card bg-[#fbfaf7]">
            <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
              <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-ink">
                After
              </h3>
              <span className="rounded-full border border-black/8 bg-white px-3 py-1 text-xs font-medium text-ink/72">
                Visible
              </span>
            </div>
            <ul className="mt-6 space-y-4">
              {afterPoints.map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                  <span className="text-base leading-7 text-ink/78">{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
