import type { Metadata } from "next";
import { BeforeAfterSection } from "@/components/before-after-section";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { OperatingViewSection } from "@/components/operating-view-section";
import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackedLink } from "@/components/tracked-link";
import { ValueSection } from "@/components/value-section";

export const metadata: Metadata = {
  title: "AnisConsult — Operational Improvement & Process Clarity",
  description:
    "AnisConsult helps small service businesses improve daily operations, clarify responsibilities, reduce manual friction and structure execution.",
};

const realCases = [
  {
    sector: "Hospitality",
    title: "Résidence Cadet",
    problem: "Guest stays, access, follow-up, payments and reporting were spread across files, calls and front-desk memory.",
    system: "A clearer operating routine for guest follow-up, access, issues and reporting.",
    outcome: "7.6 → 9.2 / 10 guest satisfaction · ~10h/week admin work reduced",
    href: "/case-study/vesper",
    location: "home_proof_residence_cadet",
    ctaLabel: "View operational case",
  },
  {
    sector: "Logistics",
    title: "Kepler Express",
    problem: "Mission follow-up, driver costs, invoicing and payments moved separately, making daily control harder.",
    system: "A clearer operating flow connecting mission status, cost capture and billing follow-up.",
    outcome: "Supported the launch and control of a new revenue segment.",
    href: "/case-study/kepler-express",
    location: "home_proof_kepler",
    ctaLabel: "View operational case",
  },
] as const;

const audienceFit = [
  {
    title: "Founders and lean teams",
    description: "When operations depend too much on memory, urgency and manual follow-up.",
  },
  {
    title: "Hospitality operators",
    description: "For guest follow-up, access, issues, payments and reporting that need one clearer flow.",
  },
  {
    title: "Retail and service businesses",
    description: "For teams managing daily execution, admin work, margins and recurring operational tasks.",
  },
  {
    title: "International teams",
    description: "For English, French or Arabic environments where simple structure matters across contexts.",
  },
] as const;

const servicesPreview = [
  {
    title: "Operational Audit",
    description: "Map how work currently moves, where follow-up breaks and what needs clearer ownership.",
  },
  {
    title: "Process Cleanup",
    description: "Simplify handoffs, statuses and routines so recurring work is easier to run.",
  },
  {
    title: "Execution Structure",
    description: "Define owners, next actions and review rhythms for daily operational control.",
  },
  {
    title: "Service Quality Review",
    description: "Use operating facts to improve consistency, response time and follow-up quality.",
  },
] as const;

const operationalTools = [
  {
    name: "StayOps",
    context: "Property & hospitality operations",
    href: "https://stayops.anisconsult.com",
  },
  {
    name: "Alcaisse",
    context: "Retail POS & cashier sessions",
    href: undefined,
  },
  {
    name: "StorePilot",
    context: "Stock, margin & sales visibility",
    href: "https://storepilot.anisconsult.com",
  },
  {
    name: "Kepler Express",
    context: "Logistics & mission billing",
    href: "https://kepler.anisconsult.com",
  },
  {
    name: "MyBi",
    context: "Business management & invoice tracking",
    href: "https://mybi.anisconsult.com",
  },
  {
    name: "OpsCore",
    context: "Internal task & operations platform",
    href: "https://opscore.anisconsult.com",
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

        <OperatingViewSection />

        <ValueSection />

        <BeforeAfterSection />

        <section
          id="case-study"
          className="scroll-mt-32 border-t border-line bg-white md:scroll-mt-24"
        >
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24" delayMs={40}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-end lg:gap-16">
              <div className="max-w-3xl">
                <SectionKicker label="Operational cases" />
                <h2 className="text-balance mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.7rem]">
                  Proof of execution.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Field-tested work, clear constraints and practical outcomes.
              </p>
            </div>

            <div className="mt-12">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                Field-tested operational cases
              </p>
              <div className="mt-5 grid gap-6 md:grid-cols-2">
                {realCases.map((item) => (
                  <article key={item.title} className="premium-soft-card flex h-full flex-col">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                      {item.sector}
                    </p>
                    <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-[2.2rem]">
                      {item.title}
                    </h3>
                    <dl className="mt-6 space-y-5">
                      <div>
                        <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                          Problem
                        </dt>
                        <dd className="mt-2 text-sm leading-7 text-ink/78">{item.problem}</dd>
                      </div>
                      <div>
                        <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                          Operating change
                        </dt>
                        <dd className="mt-2 text-sm leading-7 text-ink/78">{item.system}</dd>
                      </div>
                      <div>
                        <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                          Outcome
                        </dt>
                        <dd className="mt-2 text-sm font-medium leading-7 text-ink">{item.outcome}</dd>
                      </div>
                    </dl>

                    <div className="mt-auto pt-8">
                      <TrackedLink
                        href={item.href}
                        event="case_study_cta_click"
                        data={{ location: item.location }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
                      >
                        {item.ctaLabel}
                      </TrackedLink>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="mt-10 flex justify-start border-t border-line pt-6">
              <TrackedLink
                href="/work"
                event="case_study_cta_click"
                data={{ location: "home_proof_footer" }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
              >
                View operational cases
              </TrackedLink>
            </div>
          </Reveal>
        </section>

        <section id="operational-tools" className="border-t border-line bg-surface">
          <Reveal className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20" delayMs={55}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
              <div className="max-w-3xl">
                <SectionKicker label="From process to system" />
                <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.3rem]">
                  Operational tools built.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                  When the operating process is clear, the right tool becomes obvious. Some missions led to building one.
                </p>
              </div>

              <div className="grid gap-3">
                {operationalTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="grid gap-3 border-t border-black/10 py-4 sm:grid-cols-[minmax(0,0.34fr)_minmax(0,0.46fr)_auto] sm:items-center"
                  >
                    <p className="text-sm font-semibold text-ink">{tool.name}</p>
                    <p className="text-sm leading-6 text-muted">{tool.context}</p>
                    {tool.href ? (
                      <a
                        href={tool.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-ink underline-offset-2 hover:underline sm:text-right"
                      >
                        Demo
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-muted/60 sm:text-right">
                        Demo to add
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section
          id="services"
          className="scroll-mt-32 border-t border-line bg-white md:scroll-mt-24"
        >
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24" delayMs={65}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
              <div className="max-w-3xl">
                <SectionKicker label="Services" />
                <h2 className="text-balance mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.5rem]">
                  Practical help for recurring workflow problems.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Workflow analysis, process cleanup, responsibility clarity and practical operating support for service teams that need cleaner day-to-day control.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {servicesPreview.map((service) => (
                <article key={service.title} className="premium-soft-card flex h-full flex-col">
                  <h3 className="text-base font-semibold tracking-[-0.02em] text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <TrackedLink
                href="/services"
                event="contact_cta_click"
                data={{ location: "home_services_preview" }}
                className="premium-cta-outline h-12 px-6"
              >
                View services
              </TrackedLink>
            </div>
          </Reveal>
        </section>

        <section
          id="who-i-work-with"
          className="scroll-mt-32 border-t border-line bg-white md:scroll-mt-24"
        >
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24" delayMs={70}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
              <div className="max-w-3xl">
                <SectionKicker label="Fit" />
                <h2 className="text-balance mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.5rem]">
                  Built for operators who need clarity, not theater.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {audienceFit.map((item) => (
                  <article key={item.title} className="rounded-[24px] border border-line bg-[#fbfaf7] p-5">
                    <h3 className="text-base font-semibold tracking-[-0.02em] text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section
          id="contact"
          className="scroll-mt-32 border-t border-line bg-white md:scroll-mt-24"
        >
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24" delayMs={80}>
            <ContactSection />
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
