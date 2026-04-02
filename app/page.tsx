import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { MyBiHomeSection } from "@/components/mybi-home-section";
import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackedLink } from "@/components/tracked-link";

const results = [
  {
    title: "9.2/10 Customer Satisfaction",
    description:
      "Immediate improvement from a 7.6 baseline.",
  },
  {
    title: "+32% Execution Speed",
    description:
      "Operational bottlenecks reduced.",
  },
  {
    title: "Live Operational Visibility",
    description:
      "Real-time tracking across workflows.",
  },
  {
    title: "10h Saved / Week",
    description:
      "Administrative workload significantly reduced.",
  },
] as const;

const featuredCases = [
  {
    label: "Case Study",
    title: "Vesper Collection",
    description:
      "Operations were restructured into a consistent system for customer data, execution and follow-up.",
    highlights: [
      "CRM logic aligned with daily operations",
      "Workflow structure made the service model easier to run",
    ],
    href: "/case-study/vesper",
    location: "home_proof_vesper",
  },
  {
    label: "Case Study",
    title: "Kepler Express Ops",
    description:
      "Logistics execution, expenses and billing were restructured into one operational system.",
    highlights: [
      "Workflow standardization from mission to payment",
      "Data logic connected execution, cost tracking and billing",
    ],
    href: "/case-study/kepler-express",
    location: "home_proof_kepler",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main id="home" className="bg-white text-ink antialiased">
        <Reveal>
          <Hero />
        </Reveal>

        <section id="case-study" className="border-t border-line bg-white">
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24" delayMs={40}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-end lg:gap-16">
              <div className="max-w-3xl">
                <SectionKicker label="Results" />
                <h2 className="text-balance mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.7rem]">
                  Selected work, reduced to the signals that matter.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Short proof from live environments where fragmented operations were
                turned into usable systems. Operations were restructured into
                consistent systems aligned with data logic and workflow
                standardization.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {results.map((item) => (
                <article key={item.title} className="premium-card flex h-full min-h-[15rem] flex-col bg-[#fbfaf7]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink/60">
                    Results
                  </p>
                  <h3 className="mt-6 font-display text-[2rem] font-semibold leading-[1.02] tracking-[-0.05em] text-ink sm:text-[2.3rem]">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-md text-sm leading-7 text-ink/78">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {featuredCases.map((item) => (
                <article key={item.title} className="premium-soft-card flex h-full flex-col">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                    {item.label}
                  </p>
                  <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-[2.2rem]">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-muted">
                    {item.description}
                  </p>

                  <div className="mt-8 grid gap-3">
                    {item.highlights.map((highlight) => (
                      <div key={highlight} className="border-t border-black/8 pt-3.5">
                        <p className="text-sm leading-7 text-ink/78">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8">
                    <TrackedLink
                      href={item.href}
                      event="case_study_cta_click"
                      data={{ location: item.location }}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
                    >
                      Read case study
                    </TrackedLink>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex justify-start border-t border-line pt-6">
              <TrackedLink
                href="/work"
                event="case_study_cta_click"
                data={{ location: "home_proof_footer" }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
              >
                View selected work
              </TrackedLink>
            </div>
          </Reveal>
        </section>

        <section id="method" className="border-t border-line bg-white">
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24" delayMs={60}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
              <div className="max-w-3xl">
                <SectionKicker label="Positioning" />
                <h2 className="text-balance mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.5rem]">
                  Business systems. Not more tools.
                </h2>
              </div>

              <div className="max-w-2xl">
                <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  I help structure operations into clear systems. The goal is not
                  to add tools. The goal is to make work easier to manage, track
                  and control.
                </p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-ink/70">
                  Workflows • CRM • Invoicing • Payments • Reporting
                </p>
              </div>
            </div>

            <div className="mt-12 flex justify-start border-t border-line pt-6">
              <TrackedLink
                href="/#case-study"
                event="case_study_cta_click"
                data={{ location: "method" }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
              >
                View Case Study
              </TrackedLink>
            </div>
          </Reveal>
        </section>

        <Reveal delayMs={80}>
          <MyBiHomeSection />
        </Reveal>

        <section id="contact" className="border-t border-line bg-white">
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24" delayMs={100}>
            <ContactSection />
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
