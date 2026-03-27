import Link from "next/link";
import { ContactSection } from "@/components/contact-section";
import { MyBiShowcase } from "@/components/mybi-showcase";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SectionTitle } from "@/components/section-title";
import { TrackedLink } from "@/components/tracked-link";
import { siteContent } from "@/lib/site-content";

const methodResultVisuals = [
  [82, 56, 92],
  [68, 88, 52],
  [74, 46, 86],
  [58, 80, 94],
] as const;

const caseStudyMetrics = [
  { label: "Review score", value: "7.6 → 9.2", meta: "TripAdvisor" },
  { label: "Ranking", value: "450 → Top 30", meta: "Market visibility" },
  { label: "Admin load", value: "~10h / week", meta: "Administrative time reduced" },
  { label: "New market", value: "+50% revenue", meta: "Growth from a new market" },
] as const;

const caseStudyBefore = [
  "Manual coordination across daily operations",
  "Strong dependence on the front desk",
  "Customer data spread across multiple touchpoints",
] as const;

const caseStudyAfter = [
  "Clearer operating flows",
  "More autonomy with less friction",
  "Structured CRM and more reliable execution",
] as const;

export default function HomePage() {
  const { hero, mybi, method } = siteContent;

  return (
    <>
      <SiteHeader />

      <main id="home" className="bg-white text-ink antialiased">
        <section className="relative overflow-hidden">
          <Reveal className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
            <div className="max-w-5xl">
              <h1 className="max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-tighter2 text-ink sm:text-5xl lg:text-6xl">
                {hero.title}
              </h1>

              <p className="mt-6 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                {hero.subtitle}
              </p>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
                {hero.description}
              </p>

              <div className="mt-8 space-y-2 text-lg leading-8 text-ink">
                {hero.notes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <TrackedLink
                  href={hero.primaryCta.href}
                  event="case_study_cta_click"
                  data={{ location: "hero" }}
                  className="premium-cta"
                >
                  {hero.primaryCta.label}
                </TrackedLink>

                <Link
                  href={hero.secondaryCta.href}
                  className="premium-cta-outline"
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="case-study" className="border-t border-line bg-white">
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10" delayMs={40}>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                Vesper Collection
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-black/55">
                Case study
              </p>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
                Turning fragmented operations into a clearer, more scalable system.
              </h2>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {caseStudyMetrics.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[28px] border border-black/10 bg-[#f7f7f5] p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/50">
                    {item.label}
                  </p>
                  <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-black">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm text-black/55">{item.meta}</p>
                </article>
              ))}
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[32px] border border-black/10 bg-white p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/50">
                  Before
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-black/70">
                  {caseStudyBefore.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[32px] border border-black/10 bg-black p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                  After
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-white/80">
                  {caseStudyAfter.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-6 border-t border-black/10 pt-8 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-2xl text-base leading-7 text-black/60">
                Better results came from a cleaner system, not from adding more tools.
              </p>

              <TrackedLink
                href="/case-study/vesper"
                event="case_study_cta_click"
                data={{ location: "case_study_section" }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
              >
                See how the system was built →
              </TrackedLink>
            </div>
          </Reveal>
        </section>

        <section id="method" className="border-t border-line bg-white">
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10" delayMs={60}>
            <SectionTitle eyebrow={method.title} title={method.subtitle} />

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {method.steps.map((item) => (
                <article
                  key={item.step}
                  className="premium-soft-card flex h-full flex-col p-8 lg:p-9"
                >
                  <p className="text-sm font-semibold text-muted">{item.step}</p>
                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>

                  <ul className="mt-8 space-y-3 text-sm leading-7 text-muted">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>

                  {"emphasis" in item ? (
                    <div className="mt-8 rounded-[22px] border border-line bg-white px-5 py-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
                      <p className="text-sm font-semibold leading-7 text-ink">
                        {item.emphasis[0]}
                      </p>
                      <p className="mt-3 text-sm font-medium leading-7 text-muted">
                        {item.emphasis[1]}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        {item.emphasis[2]}
                      </p>
                    </div>
                  ) : null}

                  <div className="mt-auto pt-8">
                    <div className="rounded-[22px] border border-line bg-white px-5 py-5">
                      <p className="text-sm font-semibold text-ink">Objective</p>
                      <p className="mt-3 text-sm leading-7 text-muted">{item.objective}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 rounded-[32px] border border-line bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_100%)] p-8 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_20px_60px_rgba(15,23,42,0.04)] lg:p-10">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  {method.resultTitle}
                </p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {method.result.map((item, index) => (
                  <article
                    key={item}
                    className="flex h-full flex-col rounded-[26px] border border-line bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_12px_32px_rgba(15,23,42,0.04)]"
                  >
                    <div className="rounded-[20px] border border-line bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fc_100%)] p-4">
                      <div className="flex items-center justify-between">
                        <span className="h-2.5 w-2.5 rounded-full bg-ink/80" />
                        <span className="h-8 w-8 rounded-full border border-line bg-surface" />
                      </div>

                      <div className="mt-5 space-y-2.5">
                        {methodResultVisuals[index].map((width, visualIndex) => (
                          <div key={`${item}-${visualIndex}`} className="h-2 rounded-full bg-surface">
                            <div
                              className="h-full rounded-full bg-ink"
                              style={{ width: `${width}%`, opacity: 1 - visualIndex * 0.14 }}
                            />
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-2">
                        <div className="rounded-2xl border border-line bg-white px-3 py-3" />
                        <div className="rounded-2xl border border-line bg-white px-3 py-3" />
                      </div>
                    </div>

                    <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-ink">
                      {item}
                    </h3>
                  </article>
                ))}
              </div>

              <div className="mt-10 flex justify-start">
                <TrackedLink
                  href={method.cta.href}
                  event="case_study_cta_click"
                  data={{ location: "method" }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
                >
                  {method.cta.label}
                </TrackedLink>
              </div>
            </div>
          </Reveal>
        </section>

        <section
          id="mybi"
          className="border-t border-line bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fc_100%)]"
        >
          <Reveal
            className="mx-auto max-w-[1320px] px-6 py-24 lg:px-10 lg:py-28"
            delayMs={80}
          >
            <div className="mx-auto max-w-4xl text-center">
              <SectionTitle eyebrow="MyBi" title={mybi.title} />

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
                {mybi.description}
              </p>

              <p className="mt-8 text-lg font-semibold leading-8 text-ink sm:text-xl">
                {mybi.flow.join(" → ")}
              </p>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
                {mybi.summary}
              </p>

              <div className="mt-8 space-y-2 text-base leading-7 text-ink">
                {mybi.notes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
            </div>

            <div className="mt-16 lg:mt-20">
              <MyBiShowcase />
            </div>
          </Reveal>
        </section>

        <section id="contact" className="border-t border-line bg-white">
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10" delayMs={100}>
            <ContactSection />
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
