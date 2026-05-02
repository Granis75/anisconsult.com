import type { Metadata } from "next";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackedLink } from "@/components/tracked-link";

export const metadata: Metadata = {
  title: "Work | Operations Systems Specialist | AnisConsult",
  description:
    "Operational case studies across hospitality, logistics and retail, showing clearer systems, less manual work and better execution.",
};

type Project = {
  category: string;
  title: string;
  description: string;
  support: string;
  href: string;
  location: string;
  ctaLabel: string;
  secondCtaLabel?: string;
  secondCtaHref?: string;
};

const projects: Project[] = [
  {
    category: "Hospitality",
    title: "Résidence Cadet",
    description: "Guest stays, access, follow-up and reporting were reorganized into one clearer operating flow.",
    support: "Supported by Ops Core execution system",
    href: "/case-study/vesper",
    location: "work_page_residence_cadet",
    ctaLabel: "View Case Study",
  },
  {
    category: "Logistics",
    title: "Kepler Express",
    description: "Mission follow-up, driver costs and billing were connected in one clearer logistics workflow.",
    support: "Supported by Kepler workflow system",
    href: "/case-study/kepler-express",
    location: "work_page_kepler",
    ctaLabel: "View Case Study",
  },
  {
    category: "Retail",
    title: "Northline Convenience",
    description: "Workflow redesign, margin visibility and daily execution systems for a clearer, more profitable convenience retail operation.",
    support: "Supported by StorePilot retail dashboard",
    href: "/work/northline-convenience",
    location: "work_page_northline",
    ctaLabel: "View Case Study",
  },
  {
    category: "Hospitality SaaS / PMS Prototype",
    title: "StayOps Core — Core PMS Prototype",
    description: "A functional PMS prototype for boutique hotels and serviced apartments, designed around reservations, rooms, billing and daily front-desk clarity.",
    support: "Prototype · Not production software",
    href: "/case-study/stayops-core",
    location: "work_page_stayops",
    ctaLabel: "View Case Study",
    secondCtaLabel: "View Live Prototype",
    secondCtaHref: "https://stayops.anisconsult.com",
  },
];

export default function WorkPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
            <div className="max-w-4xl">
              <SectionKicker label="Work" />
              <h1 className="mt-6 font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
                Proof, not promises.
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                Real operational work shaped inside hospitality, logistics and retail environments.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Each case shows what changed in the work itself.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:px-10 lg:py-20">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[2rem] border border-line bg-surface p-8 lg:p-10"
              >
                <div className="flex flex-col gap-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                    {project.category}
                  </p>
                  <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
                    {project.title}
                  </h2>
                  <p className="text-base leading-8 text-muted sm:text-lg">
                    {project.description}
                  </p>
                  <p className="text-sm text-muted/70">
                    {project.support}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <TrackedLink
                      href={project.href}
                      event="case_study_cta_click"
                      data={{ location: project.location }}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
                    >
                      {project.ctaLabel}
                    </TrackedLink>
                    {project.secondCtaHref && project.secondCtaLabel && (
                      <a
                        href={project.secondCtaHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-[gap,color] duration-200 hover:gap-3 hover:text-ink"
                      >
                        {project.secondCtaLabel}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
