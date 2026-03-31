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

const proofSignals = [
  {
    eyebrow: "Hospitality",
    value: "7.6 → 9.2",
    label: "review score",
    description:
      "Operations became more reliable after the flow and customer data were restructured.",
  },
  {
    eyebrow: "Admin load",
    value: "~10h / week",
    label: "manual work removed",
    description:
      "Less repetitive coordination, less spreadsheet dependency, cleaner follow-up.",
  },
  {
    eyebrow: "Logistics flow",
    value: "Client → Mission → Expense → Invoice → Payment",
    label: "connected operating chain",
    description:
      "Execution, cost tracking and billing moved into one readable chain.",
  },
] as const;

const featuredCases = [
  {
    label: "Case Study",
    title: "Vesper Collection",
    description:
      "Hospitality operations, CRM logic and internal tools aligned into one clearer model.",
    highlights: [
      "Better customer experience and more reliable daily execution",
      "Less admin without adding unnecessary tooling",
    ],
    href: "/case-study/vesper",
    location: "home_proof_vesper",
  },
  {
    label: "Case Study",
    title: "Kepler Express Ops",
    description:
      "Logistics execution, expenses and billing connected into one usable chain.",
    highlights: [
      "Mission-level cost visibility",
      "Billing moved closer to live operational work",
    ],
    href: "/case-study/kepler-express",
    location: "home_proof_kepler",
  },
] as const;

export default function HomePage() {
  const { method } = siteContent;

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
                <SectionKicker label="Proof" />
                <h2 className="text-balance mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.7rem]">
                  Selected work, reduced to the signals that matter.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Short proof from live environments where messy operations were
                turned into clearer systems with tighter handoffs and lighter admin.
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.55fr)_minmax(0,0.55fr)]">
              {proofSignals.map((item, index) => (
                <article key={item.value} className="premium-card flex h-full flex-col lg:min-h-[18rem]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                    {item.eyebrow}
                  </p>
                  <p
                    className={`mt-6 font-display font-semibold tracking-[-0.05em] text-ink ${
                      index === proofSignals.length - 1
                        ? "text-[1.8rem] leading-[1.05] sm:text-[2.2rem]"
                        : "text-[2.7rem] leading-none sm:text-[3.1rem]"
                    }`}
                  >
                    {item.value}
                  </p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
                    {item.label}
                  </p>
                  <p className="mt-4 max-w-md text-sm leading-7 text-muted">
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
              <SectionTitle eyebrow={method.title} title={method.subtitle} />
              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                {method.intro}
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {method.steps.map((item) => (
                <article
                  key={item.step}
                  className="premium-soft-card flex h-full flex-col p-8 lg:p-9"
                >
                  <p className="text-sm font-semibold tracking-[0.14em] text-black/42">
                    {item.step}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-[2rem]">
                    {item.title}
                  </h3>

                  <ul className="mt-8 space-y-3 text-sm leading-7 text-muted">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>

                  <div className="mt-auto border-t border-black/8 pt-6">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-black/40">
                      Outcome
                    </p>
                    <p className="mt-3 text-sm leading-7 text-ink/76">{item.objective}</p>
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
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24" delayMs={100}>
            <ContactSection />
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
