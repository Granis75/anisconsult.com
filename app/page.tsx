import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackedLink } from "@/components/tracked-link";
import { bookingHref } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "AnisConsult — Operations Systems Specialist",
  description: "Fix messy operations. Reduce manual work. Build systems teams actually use.",
};

const services = [
  {
    title: "Ops Audit",
    description: "Find friction, wasted time, unclear ownership, and broken workflows.",
    support: "Best for teams that know something is off but need clarity first.",
  },
  {
    title: "Systems Setup",
    description: "CRM, dashboards, trackers, workflow automation, and lightweight internal tools.",
    support: "Best for teams that need a simple system built and shipped fast.",
  },
  {
    title: "Ongoing Support",
    description: "Continuous improvement, sharper workflows, and cleaner operational visibility.",
    support: "Best for teams that want ongoing support as operations evolve.",
  },
] as const;

const results = [
  {
    title: "7.6 → 9.2 / 10",
    description: "Guest satisfaction raised from 7.6 to 9.2 / 10.",
  },
  {
    title: "Top 30 of ~450",
    description: "Ranked in the top 30 of ~450 competitors on the main platform.",
  },
  {
    title: "+50% revenue",
    description: "+50% revenue in a new operating segment.",
  },
  {
    title: "~10h/week saved",
    description: "~10 hours per week saved on admin work.",
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
    supportNote: "Supported by Ops Core execution system",
  },
  {
    label: "Logistics",
    title: "Kepler Express",
    description:
      "Mission follow-up, driver costs and billing were connected in one clearer logistics workflow.",
    href: "/case-study/kepler-express",
    location: "home_proof_kepler",
    ctaLabel: "View Case Study",
    supportNote: "Supported by Kepler workflow system",
  },
  {
    label: "Retail",
    title: "Northline Convenience",
    description:
      "Workflow redesign, margin visibility and daily execution systems for a clearer, more profitable convenience retail operation.",
    href: "/work/northline-convenience",
    location: "home_proof_northline",
    ctaLabel: "View Case Study",
    supportNote: "Supported by StorePilot retail dashboard",
  },
] as const;

const products = [
  {
    title: "StorePilot",
    description:
      "Retail dashboard for margin visibility, incidents, checklist execution and daily store control.",
    href: "https://storepilot.anisconsult.com",
    ctaLabel: "Explore",
  },
  {
    title: "Ops Core",
    description: "Hospitality dashboard for tasks, incidents, expenses and daily operating control.",
    href: "https://opscore.anisconsult.com",
    ctaLabel: "Explore",
  },
  {
    title: "MyBi",
    description: "Client work, invoicing and payment status kept in one operating line.",
    href: "https://mybi.anisconsult.com",
    ctaLabel: "Explore",
  },
  {
    title: "Kepler Express",
    description: "Mission follow-up, cost capture and billing kept aligned.",
    href: "https://kepler.anisconsult.com",
    ctaLabel: "Explore",
  },
] as const;

const whoIWorkWith = [
  "Founders and lean teams overwhelmed by manual operations.",
  "Hospitality operators running properties, residences, or small chains.",
  "Retail and service businesses with messy back-office workflows.",
  "International teams working across English, French, or Arabic.",
] as const;

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main id="home" className="bg-white text-ink antialiased">
        <Reveal>
          <Hero />
        </Reveal>

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
                  <p className="mt-5 text-base leading-8 text-muted">{service.description}</p>
                  <div className="mt-auto border-t border-line pt-5">
                    <p className="text-sm leading-7 text-ink/78">{service.support}</p>
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

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {results.map((item, index) => (
                <article key={item.title} className="premium-card flex h-full min-h-[15rem] flex-col bg-[#fbfaf7]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink/60">
                    {index === 0 ? "Proof" : ""}
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

                  <div className="mt-6 border-t border-line pt-5">
                    <p className="text-sm leading-7 text-ink/78">{item.supportNote}</p>
                  </div>

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
                  Internal systems built around the work.
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
                      {product.ctaLabel}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section
          id="who-i-work-with"
          className="scroll-mt-32 border-t border-line bg-white md:scroll-mt-24"
        >
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24" delayMs={70}>
            <div className="max-w-3xl">
              <SectionKicker label="Who I work with" />
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted sm:text-[1.2rem]">
                People and teams I help best.
              </p>
            </div>

            <div className="mt-10 max-w-4xl">
              {whoIWorkWith.map((line) => (
                <div key={line} className="border-t border-line py-4">
                  <p className="text-base leading-8 text-ink/82 sm:text-lg">
                    {line}
                  </p>
                </div>
              ))}
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
