import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { MyBiHomeSection } from "@/components/mybi-home-section";
import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SectionTitle } from "@/components/section-title";
import { TrackedLink } from "@/components/tracked-link";
import { siteContent } from "@/lib/site-content";

const caseStudyResults = [
  {
    title: "9.2/10 Customer Satisfaction",
    description: "Immediate increase in internal rating.",
  },
  {
    title: "+32% Execution Speed",
    description: "Operational bottlenecks reduced.",
  },
  {
    title: "10h Saved / Week",
    description: "Administrative time reduced.",
  },
  {
    title: "Live Project Tracking",
    description: "Automated statuses without manual follow-up.",
  },
] as const;

const keplerTeaserPoints = [
  "Client → Mission → Expense → Invoice → Payment",
  "Driver vs company expense tracking",
  "Mission-level cost visibility",
] as const;

export default function HomePage() {
  const { method } = siteContent;

  return (
    <>
      <SiteHeader />

      <main id="home" className="bg-white text-ink antialiased">
        <section className="relative overflow-hidden">
          <Reveal>
            <Hero />
          </Reveal>
        </section>

        <section id="case-study" className="border-t border-line bg-white">
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10" delayMs={40}>
            <div className="max-w-3xl">
              <SectionKicker label="Case Study" />
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-black/40">
                Vesper Collection
              </p>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
                Turning fragmented operations into a clearer, more scalable system.
              </h2>
            </div>

            <div className="mt-12 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/45">
                Results
              </p>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {caseStudyResults.map((item) => (
                <div key={item.title} className="border-t border-black/10 pt-4">
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    {item.description}
                  </p>
                </div>
              ))}
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

        <section className="border-t border-line bg-white">
          <Reveal className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16" delayMs={50}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_1fr] lg:items-end lg:gap-12">
              <div className="max-w-lg">
                <SectionKicker label="Case Study" />
                <h2 className="mt-4 text-2xl font-bold tracking-tighter2 text-ink sm:text-3xl">
                  Kepler Express Ops
                </h2>
                <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
                  A logistics operations system designed to replace Excel,
                  calls, and manual tracking with one structured workflow.
                </p>

                <div className="mt-6">
                  <TrackedLink
                    href="/case-study/kepler-express"
                    event="case_study_cta_click"
                    data={{ location: "kepler_teaser" }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
                  >
                    View case study →
                  </TrackedLink>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
                {keplerTeaserPoints.map((item) => (
                  <div key={item} className="border-t border-line pt-4">
                    <p className="text-sm font-semibold leading-7 text-ink/90">{item}</p>
                  </div>
                ))}
              </div>
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

            <div className="mt-12 flex justify-start border-t border-line pt-6">
              <TrackedLink
                href={method.cta.href}
                event="case_study_cta_click"
                data={{ location: "method" }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
              >
                {method.cta.label}
              </TrackedLink>
            </div>
          </Reveal>
        </section>

        <Reveal delayMs={80}>
          <MyBiHomeSection />
        </Reveal>

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
