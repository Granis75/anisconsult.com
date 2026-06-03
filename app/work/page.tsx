import type { Metadata } from "next";
import Image from "next/image";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackedLink } from "@/components/tracked-link";

export const metadata: Metadata = {
  title: "Work | AnisConsult — Business Systems & Workflow Tools",
  description:
    "Case studies, field-tested workflow systems and clearly labeled prototypes for service operations.",
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
  previewImage?: {
    src: string;
    alt: string;
  };
};

const projectGroups: { label: string; projects: Project[] }[] = [
  {
    label: "Client work and field-tested workflows",
    projects: [
      {
        category: "Hospitality",
        title: "Résidence Cadet",
        problem: "Guest stays, access, follow-up, payments and reporting were spread across files, calls and front-desk memory.",
        system: "A clearer operating flow for guest follow-up, access, issues and reporting.",
        outcome: "7.6 → 9.2 guest satisfaction · Top 30 / ~450 platform ranking · ~10h/week admin workload reduced",
        status: "Field-tested service operation",
        href: "/case-study/vesper",
        location: "work_page_residence_cadet",
        ctaLabel: "View operation",
      },
      {
        category: "Logistics",
        title: "Kepler Express",
        problem: "Mission follow-up, driver costs, invoicing and payments moved separately, making daily control harder.",
        system: "A logistics workflow system connecting mission status, cost capture and billing.",
        outcome: "Cleaner daily follow-up · mission-level cost visibility · billing matched to executed work · stronger dispatch-billing coordination",
        status: "Field-tested internal workflow",
        href: "/case-study/kepler-express",
        location: "work_page_kepler",
        ctaLabel: "View operation",
      },
    ],
  },
  {
    label: "Systems & Prototypes",
    projects: [
      {
        category: "Hospitality / PMS",
        badge: "Prototype in development",
        title: "StayOps Core",
        problem: "Small hospitality teams need reservations, rooms, balances, housekeeping and daily blockers in one focused workspace.",
        system: "A prototype connecting reservations, rooms, housekeeping, incidents and reporting in one focused workspace.",
        outcome: "Demo workspace only. No real hotel, guest or payment data is implied.",
        status: "Prototype in development",
        href: "/case-study/stayops-core",
        location: "work_page_stayops",
        ctaLabel: "View prototype",
        secondCtaLabel: "Open StayOps",
        secondCtaHref: "https://stayops.anisconsult.com",
      },
      {
        category: "Business tracking workspace",
        badge: "Prototype",
        title: "MyBi",
        problem: "Client work, project progress, invoicing and payment follow-up are difficult to control when they live in separate places.",
        system: "A business tracking workspace connecting clients, missions, invoices, payments and revenue visibility.",
        outcome: "Prototype workspace for testing clearer payment follow-up, client concentration and activity visibility.",
        status: "Prototype",
        href: "/showcase/mybi",
        location: "work_page_mybi",
        ctaLabel: "View workspace",
        secondCtaLabel: "Open MyBi",
        secondCtaHref: "https://mybi.anisconsult.com",
        previewImage: {
          src: "/mybi_mockup.png",
          alt: "MyBi dashboard mockup",
        },
      },
      {
        category: "Logistics / internal tools",
        badge: "Field-tested internal system",
        title: "Kepler Ops / internal tools",
        problem: "Operational teams need mission status, cost capture, invoicing and payment movement visible in one flow.",
        system: "Internal tooling shaped around Kepler Express operating logic and logistics follow-up.",
        outcome: "A visible workflow for connecting executed work, costs and billing.",
        status: "Field-tested internal workflow",
        href: "/case-study/kepler-express",
        location: "work_page_kepler_ops",
        ctaLabel: "View workflow",
        secondCtaLabel: "Open Kepler",
        secondCtaHref: "https://kepler.anisconsult.com",
      },
    ],
  },
  {
    label: "Concept-only explorations",
    projects: [
      {
        category: "Retail",
        badge: "Concept only — not a client engagement",
        title: "StorePilot",
        problem: "Retail operators need daily execution, exceptions and margin signals in one operating layer.",
        system: "A concept workspace for store-level visibility and operational control.",
        outcome: "Concept only — not a client engagement.",
        status: "Concept only",
        href: "https://storepilot.anisconsult.com",
        location: "work_page_storepilot",
        ctaLabel: "Open concept",
      },
      {
        category: "Service operations",
        badge: "Concept only — not a client engagement",
        title: "Ops Core",
        problem: "Tasks, blockers and follow-up lose momentum when ownership is unclear.",
        system: "A concept workspace for task ownership, blockers and status tracking.",
        outcome: "Concept only — not a client engagement.",
        status: "Concept only",
        href: "https://opscore.anisconsult.com",
        location: "work_page_ops_core",
        ctaLabel: "Open prototype",
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
                Proof of execution
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                Case studies, field-tested workflow systems and clearly labeled prototypes.
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
                        {project.previewImage ? (
                          <div className="overflow-hidden rounded-[1.5rem] border border-line bg-white p-2">
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.15rem] bg-white">
                              <Image
                                src={project.previewImage.src}
                                alt={project.previewImage.alt}
                                fill
                                sizes="(min-width: 1280px) 1120px, (min-width: 1024px) calc(100vw - 5rem), calc(100vw - 4rem)"
                                className="object-cover"
                                priority={false}
                              />
                            </div>
                          </div>
                        ) : null}
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
                              System
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
            <div className="border-t border-line pt-2">
              <TrackedLink
                href="/#systems-prototypes"
                event="case_study_cta_click"
                data={{ location: "work_page_footer" }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
              >
                Explore systems & prototypes
              </TrackedLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
