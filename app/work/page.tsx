import type { Metadata } from "next";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackedLink } from "@/components/tracked-link";

export const metadata: Metadata = {
  title: "Work | AnisConsult — Business Systems & Workflow Specialist",
  description:
    "Real case studies, active product work and conceptual systems studies built around clearer workflows, usable tools and better operating visibility.",
};

type Project = {
  category: string;
  badge?: string;
  title: string;
  description: string;
  support: string;
  href: string;
  location: string;
  ctaLabel: string;
  secondCtaLabel?: string;
  secondCtaHref?: string;
};

const projectGroups: { label: string; projects: Project[] }[] = [
  {
    label: "Real Case Studies",
    projects: [
      {
        category: "Hospitality",
        title: "Résidence Cadet",
        description: "Guest stays, access, follow-up and reporting were reorganized into one clearer operating flow.",
        support: "Real operating work · Supported by Ops Core workflow structure",
        href: "/case-study/vesper",
        location: "work_page_residence_cadet",
        ctaLabel: "View Case Study",
      },
      {
        category: "Logistics",
        title: "Kepler Express",
        description: "Mission follow-up, driver costs and billing were connected in one clearer logistics workflow.",
        support: "Real operating work · Supported by Kepler workflow system",
        href: "/case-study/kepler-express",
        location: "work_page_kepler",
        ctaLabel: "View Case Study",
      },
    ],
  },
  {
    label: "Product in Development",
    projects: [
      {
        category: "Hospitality / PMS",
        badge: "PMS in development",
        title: "StayOps Core",
        description: "Focused PMS product for boutique hotels and serviced apartments, currently in active development around reservations, rooms, balances, housekeeping and front-desk clarity.",
        support: "Live public demo workspace · No real hotel, guest or payment data implied",
        href: "/case-study/stayops-core",
        location: "work_page_stayops",
        ctaLabel: "View Product Study",
        secondCtaLabel: "Open StayOps",
        secondCtaHref: "https://stayops.anisconsult.com",
      },
    ],
  },
  {
    label: "Thinking Exercises",
    projects: [
      {
        category: "Retail",
        badge: "Thinking exercise — not a client engagement",
        title: "Northline Convenience",
        description: "A hypothetical retail operations study exploring how workflow redesign, margin visibility and daily execution systems could improve a founder-dependent urban store. This is a structured thinking exercise, not a delivered client engagement.",
        support: "All outcomes are modeled estimates used to test the operating logic — not reported client results.",
        href: "/work/northline-convenience",
        location: "work_page_northline",
        ctaLabel: "View thinking exercise",
      },
    ],
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
                Real case studies, active product work and conceptual systems studies.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                All built around clearer workflows, usable tools and better operating visibility.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:px-10 lg:py-20">
            {projectGroups.map((group) => (
              <div key={group.label}>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                  {group.label}
                </p>
                <div className="mt-5 grid gap-8">
                  {group.projects.map((project) => (
                    <article
                      key={project.title}
                      className="rounded-[2rem] border border-line bg-surface p-8 lg:p-10"
                    >
                      <div className="flex flex-col gap-6">
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                            {project.category}
                          </p>
                          {project.badge ? (
                            <span className="rounded-full border border-black/8 bg-white px-3 py-1 text-xs font-medium text-ink/64">
                              {project.badge}
                            </span>
                          ) : null}
                        </div>
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
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
