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
  title: "AnisConsult — Business Systems & Workflow Tools",
  description:
    "AnisConsult helps service businesses structure clearer workflows, internal tools and reporting systems to reduce manual follow-up and improve operational visibility.",
};

const realCases = [
  {
    sector: "Hospitality",
    title: "Résidence Cadet",
    problem: "Guest stays, access, follow-up, payments and reporting were spread across files, calls and front-desk memory.",
    system: "A structured operating flow for guest follow-up, access, issues and reporting.",
    outcome: "7.6 → 9.2 / 10 guest satisfaction · ~10h/week admin work reduced",
    href: "/case-study/vesper",
    location: "home_proof_residence_cadet",
    ctaLabel: "View Proof",
  },
  {
    sector: "Logistics",
    title: "Kepler Express",
    problem: "Mission follow-up, driver costs, invoicing and payments moved separately, making daily control harder.",
    system: "A logistics workflow system connecting mission status, cost capture and billing.",
    outcome: "Supported the launch and control of a new revenue segment.",
    href: "/case-study/kepler-express",
    location: "home_proof_kepler",
    ctaLabel: "View Proof",
  },
] as const;

const conceptStudies = [
  {
    badge: "Prototype in development",
    sector: "Hospitality / PMS",
    title: "StayOps Core",
    problem: "Boutique hospitality workflows need reservations, room planning and daily blockers in one focused workspace.",
    system: "Prototype workspace for reservations, rooms, housekeeping, incidents and daily operating views.",
    outcome: "Demo workspace only; no real hotel, guest or payment data is implied.",
    href: "/case-study/stayops-core",
    location: "home_proof_stayops",
    ctaLabel: "View prototype",
  },
] as const;

const primarySystems = [
  {
    badge: "Prototype in development",
    title: "StayOps Core",
    problem: "Hospitality operations prototype for serviced residences and small operators, covering reservations, rooms, housekeeping, incidents, supplier follow-up and reporting.",
    audience: "Prototype in development",
    workflow: "Built around the problem of keeping daily hospitality work easier to see and run.",
    href: "https://stayops.anisconsult.com",
    ctaLabel: "View prototype",
  },
  {
    badge: "Prototype",
    title: "MyBi",
    problem: "Business tracking workspace for freelancers and small operators — centralizing clients, missions, invoices, payments and revenue visibility.",
    audience: "Prototype",
    workflow: "Modeled around the workflow from client activity to invoice status, payment follow-up and revenue visibility.",
    href: "https://mybi.anisconsult.com",
    ctaLabel: "View workspace",
  },
  {
    badge: "Operational system",
    title: "Kepler Ops",
    problem: "Internal workflow system designed to clarify mission status, expenses, invoicing and payment follow-up in transport operations.",
    audience: "Operational system",
    workflow: "Case-built system for making transport operations, cost capture and payment follow-up more visible.",
    href: "https://kepler.anisconsult.com",
    ctaLabel: "View system",
  },
] as const;

const otherSystems = [
  {
    badge: "Concept only — not a client engagement",
    title: "StorePilot",
    description: "Concept only for daily retail execution, exceptions and margin visibility.",
    href: "https://storepilot.anisconsult.com",
  },
  {
    badge: "Concept only — not a client engagement",
    title: "Ops Core",
    description: "Concept only for task ownership, blockers and workflow visibility.",
    href: "https://opscore.anisconsult.com",
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
    title: "Workflow Audit",
    description: "Map how work currently moves, where follow-up breaks and what needs clearer ownership.",
  },
  {
    title: "Internal Tools Setup",
    description: "Set up a simple workspace around clients, missions, incidents, payments or recurring work.",
  },
  {
    title: "Reporting & Automation",
    description: "Create recurring views and simple automation so reporting is less manual.",
  },
  {
    title: "Ongoing Systems Support",
    description: "Keep tools documented, adjusted and useful after the first setup.",
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
                <SectionKicker label="Work" />
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
                Real Case Studies
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
                          System
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

            <div className="mt-12 border-t border-line pt-10">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                Prototype in Development
              </p>
              <div className="mt-5 grid gap-6 md:grid-cols-2">
              {conceptStudies.map((item) => (
                <article key={item.title} className="premium-soft-card flex h-full flex-col">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                      {item.sector}
                    </p>
                    <span className="rounded-full border border-black/8 bg-white px-3 py-1 text-xs font-medium text-ink/64">
                      {item.badge}
                    </span>
                  </div>
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
                        System
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
                View all work
              </TrackedLink>
            </div>
          </Reveal>
        </section>

        <section
          id="systems-prototypes"
          className="scroll-mt-32 border-t border-line bg-white md:scroll-mt-24"
        >
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24" delayMs={55}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-end lg:gap-16">
              <div className="max-w-3xl">
                <SectionKicker label="Systems & Prototypes" />
                <h2 className="text-balance mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.5rem]">
                  Systems & Prototypes
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                A small set of field-tested systems, prototypes and clearly labeled concept work.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {primarySystems.map((system) => (
                <article key={system.title} className="premium-soft-card flex h-full flex-col">
                  <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                    {system.badge}
                  </p>
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-[2rem]">
                    {system.title}
                  </h3>
                  <dl className="mt-6 space-y-5">
                    <div>
                      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                        Description
                      </dt>
                      <dd className="mt-2 text-sm leading-7 text-ink/78">{system.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                        Status
                      </dt>
                      <dd className="mt-2 text-sm leading-7 text-ink/78">{system.audience}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                        Visible workflow
                      </dt>
                      <dd className="mt-2 text-sm leading-7 text-ink/78">{system.workflow}</dd>
                    </div>
                  </dl>

                  <div className="mt-auto pt-8">
                    <a
                      href={system.href}
                      target="_blank"
                      rel="noreferrer"
                      className="premium-cta-outline h-12 px-6"
                    >
                      {system.ctaLabel}
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 border-t border-line pt-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                Concepts
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {otherSystems.map((system) => (
                  <div key={system.title} className="flex items-start justify-between gap-6 rounded-[20px] border border-line bg-[#fbfaf7] px-5 py-4">
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                        {system.badge}
                      </p>
                      <p className="mt-1 text-base font-semibold tracking-[-0.02em] text-ink">
                        {system.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted">{system.description}</p>
                    </div>
                    <a
                      href={system.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 shrink-0 text-sm font-semibold text-ink transition-opacity hover:opacity-70"
                    >
                      Open concept
                    </a>
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
                Audits, internal tool setup, reporting structure and support for service teams that need cleaner day-to-day control.
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
