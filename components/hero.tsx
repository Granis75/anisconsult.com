"use client";

import { SectionKicker } from "@/components/section-kicker";
import { TrackedLink } from "@/components/tracked-link";
import { siteContent } from "@/lib/site-content";

type HeroProps = {
  onContactClick?: () => void;
};

const focusAreas = [
  {
    title: "Execution",
    description: "The team knows what to do, who owns it, and when.",
  },
  {
    title: "Follow-up",
    description: "Open issues stay visible without constant checking.",
  },
  {
    title: "Costs",
    description: "Expenses and invoices stay linked to the work.",
  },
] as const;

const workflowSteps = ["Client", "Mission", "Invoice", "Payment"] as const;

const visibilitySignals = ["Owner", "Status", "Due date", "Payment"] as const;

export function Hero({ onContactClick }: HeroProps) {
  const { hero } = siteContent;

  const secondaryCta = onContactClick ? (
    <button
      type="button"
      onClick={onContactClick}
      className="premium-cta-outline h-12 px-6"
    >
      {hero.secondaryCta.label}
    </button>
  ) : (
    <TrackedLink
      href={hero.secondaryCta.href}
      event="contact_cta_click"
      data={{ location: "hero_secondary" }}
      className="premium-cta-outline h-12 px-6"
    >
      {hero.secondaryCta.label}
    </TrackedLink>
  );

  return (
    <section className="relative border-b border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-start lg:gap-16">
          <div className="max-w-4xl">
            <SectionKicker label="" />
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-black/42">
              {hero.subtitle}
            </p>

            <h1 className="text-balance mt-5 max-w-4xl font-display text-[3rem] font-semibold leading-[0.95] tracking-[-0.055em] text-ink sm:text-[4rem] lg:text-[5.1rem]">
              {hero.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600 sm:text-[1.35rem] sm:leading-9">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href={hero.primaryCta.href}
                event="case_study_cta_click"
                data={{ location: "hero_primary" }}
                className="premium-cta h-12 px-6"
              >
                {hero.primaryCta.label}
              </TrackedLink>

              {secondaryCta}
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Incident → Action → Expense → Impact
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
                  Visibility
                </p>
                <h2 className="text-balance mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-[2rem]">
                  One clear view of daily operations.
                </h2>
              </div>

              <div className="mt-8 rounded-[24px] border border-black/8 bg-[#f8f7f3] px-5 py-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                  Core flow
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  {workflowSteps.map((item, index) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="inline-flex items-center rounded-full border border-black/8 bg-white px-3.5 py-1.5 text-sm font-medium text-ink">
                        {item}
                      </span>
                      {index < workflowSteps.length - 1 ? (
                        <span className="text-sm text-black/25">→</span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-line pt-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                  Supporting line
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {visibilitySignals.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-black/8 bg-white px-3.5 py-1.5 text-sm text-neutral-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
