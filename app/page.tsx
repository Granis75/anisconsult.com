import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { MyBiHomeSection } from "@/components/mybi-home-section";
import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackedLink } from "@/components/tracked-link";

export const metadata: Metadata = {
  title: "Operations & Internal Tools Coordinator | Anis",
  description:
    "Operations coordination, workflow structure and internal tools shaped by real work across hospitality, logistics and retail environments.",
};

const results = [
  {
    title: "Improved guest satisfaction",
    description: "Guest follow-up, access and issue handling became easier to run consistently.",
  },
  {
    title: "Stronger platform visibility",
    description: "Listing quality and operational consistency became easier to maintain.",
  },
  {
    title: "New revenue segment growth",
    description: "A clearer operating flow supported expansion into a new segment.",
  },
  {
    title: "~10h/week admin reduced",
    description: "Routine follow-up and repetitive admin took less manual time.",
  },
] as const;

const featuredCases = [
  {
    label: "Hospitality",
    title: "Résidence Cadet",
    description:
      "Guest stays, access, follow-up and reporting were reorganized into one clearer operating flow.",
    href: "/case-study/vesper",
    location: "home_proof_residence_cadet",
    ctaLabel: "View Case Study",
  },
  {
    label: "Logistics",
    title: "Kepler Express",
    description:
      "Mission follow-up, driver costs and billing were connected in one clearer logistics workflow.",
    href: "/case-study/kepler-express",
    location: "home_proof_kepler",
    ctaLabel: "View Case Study",
  },
  {
    label: "Retail Proof",
    title: "StorePilot",
    description:
      "Operational dashboard built to solve common multi-site retail execution problems.",
    href: "https://storepilot-delta.vercel.app/",
    location: "home_proof_storepilot",
    ctaLabel: "View Demo",
    external: true,
  },
] as const;

const products = [
  {
    title: "Ops Core",
    description: "Tasks, incidents, expenses and execution visibility for hospitality environments.",
    href: "https://ops-core-v.vercel.app/",
  },
  {
    title: "MyBi",
    description: "Client work connected directly to invoicing and payment.",
    href: "https://mybi-business-app.vercel.app/",
  },
  {
    title: "Kepler Express",
    description: "Mission workflow, cost tracking and billing aligned.",
    href: "https://kepler-express.vercel.app/",
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
                <SectionKicker label="Work" />
                <h2 className="text-balance mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.7rem]">
                  Selected Work
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Real operational work across hospitality and logistics, plus a retail operations proof project.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {results.map((item, index) => (
                <article key={item.title} className="premium-card flex h-full min-h-[15rem] flex-col bg-[#fbfaf7]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink/60">
                    {index === 0 ? "Results" : ""}
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

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

                  <div className="mt-auto pt-8">
                    {"external" in item && item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
                      >
                        {item.ctaLabel}
                      </a>
                    ) : (
                      <TrackedLink
                        href={item.href}
                        event="case_study_cta_click"
                        data={{ location: item.location }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
                      >
                        {item.ctaLabel}
                      </TrackedLink>
                    )}
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
                View all work
              </TrackedLink>
            </div>
          </Reveal>
        </section>

        <section id="ops-core" className="border-t border-line bg-white">
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24" delayMs={55}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-end lg:gap-16">
              <div className="max-w-3xl">
                <SectionKicker label="Internal Tools" />
                <h2 className="text-balance mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.5rem]">
                  Tools built from day-to-day operational realities.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Built for hospitality, service operations and mission workflows.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {products.map((product) => (
                <article key={product.title} className="premium-soft-card flex h-full flex-col">
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-[2rem]">
                    {product.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-muted">
                    {product.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noreferrer"
                      className="premium-cta-outline h-12 px-6"
                    >
                      Open tool
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="method" className="border-t border-line bg-white">
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24" delayMs={60}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
              <div className="max-w-3xl">
                <SectionKicker label="How I Work" />
                <h2 className="text-balance mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.5rem]">
                  Fragmented data creates friction.
                </h2>
              </div>

              <div className="max-w-2xl">
                <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  I bring coordination, reporting and follow-up into one clearer operational flow.
                </p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-ink/70">
                  Coordination • Incidents • Reporting • Checklists • Payments
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
                View case studies
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
