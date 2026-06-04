"use client";

import { TrackedLink } from "@/components/tracked-link";
import { ProofBar } from "@/components/proof-bar";
import { siteContent } from "@/lib/site-content";

const focusAreas = [
  {
    title: "Clarify ownership",
    description: "Every request has a responsible person and a next step.",
  },
  {
    title: "Clean up follow-up",
    description: "The work stops living across chats, sheets and memory.",
  },
  {
    title: "Keep it usable",
    description: "Routines fit the way daily work actually happens.",
  },
] as const;

const messySignals = ["Scattered follow-up", "Manual friction", "Unclear owners"] as const;

const systemSignals = ["Owner", "Status", "Next action", "Outcome"] as const;

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative border-b border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.04fr)_minmax(320px,0.96fr)] lg:items-start lg:gap-16">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/42">
              {hero.subtitle}
            </p>

            <h1 className="text-balance mt-5 max-w-4xl font-display text-[3rem] font-semibold leading-[0.95] tracking-[-0.055em] text-ink sm:text-[4rem] lg:text-[5.1rem]">
              {hero.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600 sm:text-[1.35rem] sm:leading-9">
              {hero.description}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {hero.support}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href={hero.primaryCta.href}
                event="contact_cta_click"
                data={{ location: "hero_primary" }}
                className="premium-cta h-12 px-6"
              >
                {hero.primaryCta.label}
              </TrackedLink>

              <TrackedLink
                href={hero.secondaryCta.href}
                event="case_study_cta_click"
                data={{ location: "hero_secondary" }}
                className="premium-cta-outline h-12 px-6"
              >
                {hero.secondaryCta.label}
              </TrackedLink>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Owner - Status - Next action - Outcome
            </p>

            <div className="mt-14 border-t border-line pt-8">
              <div className="grid gap-y-8 md:grid-cols-2 md:gap-x-8 xl:grid-cols-3 xl:gap-x-0">
                {focusAreas.map((point, index) => (
                  <div
                    key={point.title}
                    className={[
                      "space-y-2.5",
                      index === 0
                        ? "xl:pr-8"
                        : "xl:border-l xl:border-line xl:px-8",
                      index === focusAreas.length - 1 ? "xl:pr-0" : "",
                    ].join(" ")}
                  >
                    <p className="text-base font-semibold tracking-[-0.02em] text-neutral-900">
                      {point.title}
                    </p>
                    <p className="max-w-[18rem] text-sm leading-6 text-neutral-600">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:pt-9">
            <div className="premium-card overflow-hidden p-6 sm:p-8">
              <div className="max-w-sm">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                  Operating logic
                </p>
                <h2 className="text-balance mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-[2rem]">
                  Owner → Status → Next action → Outcome
                </h2>
              </div>

              <div className="mt-8 rounded-[24px] border border-black/8 bg-[#f8f7f3] p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                  Before
                </p>
                <div className="mt-4 grid gap-2">
                  {messySignals.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-black/8 bg-white/78 px-4 py-3 text-sm text-ink/68"
                    >
                      <span>{item}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-ink/22" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-[24px] border border-black/8 bg-white p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                  After
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {systemSignals.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-black/8 bg-[#fbfaf7] px-4 py-3"
                    >
                      <p className="text-sm font-medium text-ink">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-line pt-5">
                <p className="text-sm leading-6 text-ink/70">
                  Every piece of work needs a responsible person, a clear status, a next step and a result.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProofBar />
    </section>
  );
}
