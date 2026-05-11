import type { Metadata } from "next";
import { BeforeAfterSection } from "@/components/before-after-section";
import { ContactSection } from "@/components/contact-section";
import { FinalCTASection } from "@/components/final-cta-section";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackedLink } from "@/components/tracked-link";
import { ValueSection } from "@/components/value-section";
import { bookingHref } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "AnisConsult — Operations, Workflow Systems & Business Tools",
  description: "Back-office operations, workflow systems and business tools for service-based businesses. Structured, clear, built around real operational problems.",
};

const services = [
  {
    title: "Ops Audit",
    fixes: "Messy handoffs, unclear ownership, duplicated admin and workflows nobody fully trusts.",
    bestFor: "Teams that know something is off but need clarity first.",
    outcome: "A clear operating map with the first fixes prioritized.",
  },
  {
    title: "Systems Setup",
    fixes: "Scattered trackers, manual follow-up, reporting gaps and internal tools that never quite fit.",
    bestFor: "Teams that need a simple system built and shipped fast.",
    outcome: "A working system the team can use in weeks, not months.",
  },
  {
    title: "Ongoing Support",
    fixes: "Systems that drift, dashboards that go stale and operational details that keep changing.",
    bestFor: "Teams that want ongoing support as operations evolve.",
    outcome: "Cleaner weekly visibility and systems that keep improving with the business.",
  },
] as const;

const featuredCases = [
  {
    sector: "Hospitality",
    title: "Résidence Cadet",
    problem: "Guest stays, access, follow-up and reporting were scattered across multiple tools.",
    system: "Ops Core operating flow for guest follow-up, access, issues and reporting.",
    outcome: "7.6 → 9.2 / 10 guest satisfaction",
    href: "/case-study/vesper",
    location: "home_proof_residence_cadet",
    ctaLabel: "View Case Study",
  },
  {
    sector: "Logistics",
    title: "Kepler Express",
    problem: "Mission follow-up, driver costs and billing lacked visibility and structure.",
    system: "Kepler workflow system connecting mission status, cost capture and billing.",
    outcome: "+50% revenue in new operating segment",
    href: "/case-study/kepler-express",
    location: "home_proof_kepler",
    ctaLabel: "View Case Study",
  },
  {
    sector: "Retail",
    title: "Northline Convenience",
    problem: "Workflow redesign needed for margin visibility and daily execution.",
    system: "StorePilot retail dashboard for daily execution, admin follow-up and reporting.",
    outcome: "~10h/week saved on admin work",
    href: "/work/northline-convenience",
    location: "home_proof_northline",
    ctaLabel: "View Case Study",
  },
] as const;

const products = [
  {
    title: "StorePilot",
    problem: "Retail operations scattered across inventory, tasks, costs and daily execution.",
    audience: "Retail operators and convenience store managers.",
    workflow: "Makes stock levels, task completion, and margin visibility transparent.",
    href: "https://storepilot.anisconsult.com",
    ctaLabel: "Explore",
  },
  {
    title: "Ops Core",
    problem: "Operational tasks, incidents, follow-up, and reporting lacked structure.",
    audience: "Operations teams in hospitality and service businesses.",
    workflow: "Makes task ownership, blockers, and status tracking visible.",
    href: "https://opscore.anisconsult.com",
    ctaLabel: "Explore",
  },
  {
    title: "MyBi",
    problem: "Freelancers and small operators struggled with client, project, and revenue visibility.",
    audience: "Freelancers and small business operators.",
    workflow: "Makes client relationships, project status, and revenue tracking clear.",
    href: "https://mybi.anisconsult.com",
    ctaLabel: "Explore",
  },
  {
    title: "Kepler Express",
    problem: "Logistics missions, expenses, invoicing, and payments were disconnected.",
    audience: "Logistics and delivery operations teams.",
    workflow: "Makes mission status, costs, and billing workflows transparent.",
    href: "https://kepler.anisconsult.com",
    ctaLabel: "Explore",
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

        <ValueSection />

        <BeforeAfterSection />

        <section
          id="services"
          className="scroll-mt-32 border-t border-line bg-white md:scroll-mt-24"
        >
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24" delayMs={32}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-end lg:gap-16">
              <div className="max-w-3xl">
                <SectionKicker label="Services" />
                <h2 className="text-balance mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.5rem]">
                  Three ways I help.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Clear entry points for teams that need clarity, a system, or ongoing operational support.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="premium-soft-card flex h-full flex-col">
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-[2rem]">
                    {service.title}
                  </h3>
                  <div className="mt-7 space-y-5">
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                        What it fixes
                      </p>
                      <p className="mt-2 text-sm leading-7 text-ink/78">{service.fixes}</p>
                    </div>
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                        Best for
                      </p>
                      <p className="mt-2 text-sm leading-7 text-ink/78">{service.bestFor}</p>
                    </div>
                  </div>
                  <div className="mt-7 border-t border-line pt-5">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                      Outcome
                    </p>
                    <p className="text-sm leading-7 text-ink/78">
                      {service.outcome}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-7 text-ink/78">
                Not sure which one you need? Tell me what&apos;s broken - I&apos;ll point
                you in the right direction.
              </p>

              <TrackedLink
                href={bookingHref}
                event="contact_cta_click"
                data={{ location: "services_footer" }}
                className="premium-cta h-12 px-6"
              >
                Book a 15-min Call
              </TrackedLink>
            </div>
          </Reveal>
        </section>

        <section
          id="case-study"
          className="scroll-mt-32 border-t border-line bg-white md:scroll-mt-24"
        >
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24" delayMs={40}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-end lg:gap-16">
              <div className="max-w-3xl">
                <SectionKicker label="Work" />
                <h2 className="text-balance mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.7rem]">
                  Selected Work
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Concrete outcomes from live operational work across hospitality, logistics and retail.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredCases.map((item) => (
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
          id="ops-core"
          className="scroll-mt-32 border-t border-line bg-white md:scroll-mt-24"
        >
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24" delayMs={55}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-end lg:gap-16">
              <div className="max-w-3xl">
                <SectionKicker label="Systems" />
                <h2 className="text-balance mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.5rem]">
                  Internal systems built from real operational problems.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Lightweight tools shaped by recurring follow-up, reporting and visibility problems.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {products.map((product) => (
                <article key={product.title} className="premium-soft-card flex h-full flex-col">
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-[2rem]">
                    {product.title}
                  </h3>
                  <dl className="mt-6 space-y-5">
                    <div>
                      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                        Problem
                      </dt>
                      <dd className="mt-2 text-sm leading-7 text-ink/78">{product.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                        For
                      </dt>
                      <dd className="mt-2 text-sm leading-7 text-ink/78">{product.audience}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                        Visible workflow
                      </dt>
                      <dd className="mt-2 text-sm leading-7 text-ink/78">{product.workflow}</dd>
                    </div>
                  </dl>

                  <div className="mt-auto pt-8">
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noreferrer"
                      className="premium-cta-outline h-12 px-6"
                    >
                      {product.ctaLabel}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <FinalCTASection />

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
