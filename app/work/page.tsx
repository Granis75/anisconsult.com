import type { Metadata } from "next";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackedLink } from "@/components/tracked-link";

export const metadata: Metadata = {
  title: "Operational Case Studies | AnisConsult",
  description:
    "Selected operational improvement cases across hospitality, logistics and service environments.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Operational Case Studies | AnisConsult",
    description:
      "Selected operational improvement cases across hospitality, logistics and service environments.",
    url: "/work",
  },
  twitter: {
    title: "Operational Case Studies | AnisConsult",
    description:
      "Selected operational improvement cases across hospitality, logistics and service environments.",
  },
};

type Project = {
  category: string;
  badge?: string;
  title: string;
  problem: string;
  system: string;
  outcome: string;
  status: string;
  href: string;
  location: string;
  ctaLabel: string;
  secondCtaLabel?: string;
  secondCtaHref?: string;
  tools?: {
    label: string;
    href?: string;
  }[];
};

const projectGroups: { label: string; projects: Project[] }[] = [
  {
    label: "Field-tested operational cases",
    projects: [
      {
        category: "Hospitality",
        title: "Résidence Cadet",
        problem: "Guest stays, access, payments, incidents, housekeeping and reporting depended on fragmented information and recurring manual follow-up.",
        system: "Clearer routines for daily follow-up, incidents, payments, housekeeping coordination and reporting.",
        outcome: "7.6 → 9.2 guest satisfaction · Top 30 / ~450 platform ranking · ~10h/week admin workload reduced",
        status: "Operational improvement case",
        href: "/case-study/vesper",
        location: "work_page_residence_cadet",
        ctaLabel: "View operational case",
        tools: [
          {
            label: "StayOps — stayops.anisconsult.com",
            href: "https://stayops.anisconsult.com",
          },
        ],
      },
      {
        category: "Logistics",
        title: "Kepler Express",
        problem: "Mission follow-up, costs, invoicing and payments moved separately, making daily control harder.",
        system: "A clearer operating flow connecting mission execution, expense tracking, invoicing and payment follow-up.",
        outcome: "Cleaner daily follow-up · mission-level cost visibility · billing matched to executed work · stronger dispatch-billing coordination",
        status: "Operational improvement case",
        href: "/case-study/kepler-express",
        location: "work_page_kepler",
        ctaLabel: "View operational case",
        tools: [
          {
            label: "Kepler Express — kepler.anisconsult.com",
            href: "https://kepler.anisconsult.com",
          },
        ],
      },
      {
        category: "Retail operations",
        title: "Famimart",
        problem: "A family-run convenience store context relied on informal routines, manual coordination and unclear daily handovers.",
        system: "A clearer store operating model for cashier routines, stock replenishment, supplier follow-up and daily control.",
        outcome: "No measured business outcome is presented; this remains a workflow study around retail routines and daily control.",
        status: "Operational study",
        href: "/case-study/famimart",
        location: "work_page_famimart",
        ctaLabel: "View operational study",
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
              <SectionKicker label="Operational cases" />
              <h1 className="mt-6 font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
                Operational case studies
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                Field-tested examples of clearer follow-up, responsibility and day-to-day operating control.
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
                        <dl className="grid gap-5">
                          <div>
                            <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                              Problem
                            </dt>
                            <dd className="mt-2 text-base leading-8 text-muted sm:text-lg">
                              {project.problem}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                              Operating change
                            </dt>
                            <dd className="mt-2 text-base leading-8 text-muted sm:text-lg">
                              {project.system}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                              Outcome
                            </dt>
                            <dd className="mt-2 text-base leading-8 text-muted sm:text-lg">
                              {project.outcome}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                              Status
                            </dt>
                            <dd className="mt-2 text-sm text-muted/70">
                              {project.status}
                            </dd>
                          </div>
                          {project.tools ? (
                            <div>
                              <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                                {project.tools.length > 1
                                  ? "Operational tools built for this context"
                                  : "Operational tool built for this context"}
                              </dt>
                              <dd className="mt-3 flex flex-wrap gap-3">
                                {project.tools.map((tool) =>
                                  tool.href ? (
                                    <a
                                      key={tool.label}
                                      href={tool.href}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex items-center rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-surface"
                                    >
                                      {tool.label}
                                    </a>
                                  ) : (
                                    <span
                                      key={tool.label}
                                      className="inline-flex items-center rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-muted/70"
                                    >
                                      {tool.label}
                                    </span>
                                  ),
                                )}
                              </dd>
                            </div>
                          ) : null}
                        </dl>
                        <div className="flex flex-wrap items-center gap-4">
                          {project.href.startsWith("http") ? (
                            <a
                              href={project.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
                            >
                              {project.ctaLabel}
                            </a>
                          ) : (
                            <TrackedLink
                              href={project.href}
                              event="case_study_cta_click"
                              data={{ location: project.location }}
                              className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
                            >
                              {project.ctaLabel}
                            </TrackedLink>
                          )}
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
