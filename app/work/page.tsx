import type { Metadata } from "next";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackedLink } from "@/components/tracked-link";

export const metadata: Metadata = {
  title: "Work | Anis",
  description:
    "Case studies across hospitality, logistics and urban retail operations, focused on workflow, visibility and systems design.",
};

const projects = [
  {
    title: "Vesper Collection",
    subtitle: "Case study",
    description: [
      "Guest stays, access, follow-up and reporting stopped relying on Excel and front-desk coordination.",
    ],
    highlights: [
      "Guest data and follow-up in one place",
      "Less front-desk dependency",
      "Clearer payment and reporting flow",
      "Administrative time reduced",
    ],
    href: "/case-study/vesper",
    location: "work_page_vesper",
    ctaLabel: "View Case Study",
  },
  {
    title: "Kepler Express",
    subtitle: "Case study",
    description: [
      "Mission updates, driver costs and invoicing were brought into one logistics workflow.",
    ],
    highlights: [
      "Mission and cost tracking linked",
      "Billing tied to the work itself",
      "Less phone-and-spreadsheet follow-up",
      "Better daily coordination",
    ],
    href: "/case-study/kepler-express",
    location: "work_page_kepler",
    ctaLabel: "View Case Study",
  },
  {
    title: "Retail Efficiency Model",
    subtitle: "Modeled case study",
    description: [
      "Workflow redesign for a 520k€ convenience retail operation.",
    ],
    highlights: [
      "Hybrid checkout and labor flow redesign",
      "Revenue, staffing and waste made visible",
      "Store routines rebuilt around clear ownership",
      "Owner dependency reduced through systems design",
    ],
    href: "/work/retail-efficiency-model",
    location: "work_page_retail_efficiency_model",
    ctaLabel: "View Case Study",
  },
] as const;

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
                Case Studies
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                Direct operational work in hospitality and logistics, plus one modeled urban retail redesign.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Each study shows how clearer systems reduce manual overhead, improve visibility and make execution easier to run.
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
                <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
                  <div className="max-w-xl">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                      Case Study
                    </p>
                    <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
                      {project.title}
                    </h2>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink/68">
                      {project.subtitle}
                    </p>

                    <div className="mt-5 grid gap-4">
                      {project.description.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base leading-8 text-muted sm:text-lg"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-8">
                      <TrackedLink
                        href={project.href}
                        event="case_study_cta_click"
                        data={{ location: project.location }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
                      >
                        {project.ctaLabel}
                      </TrackedLink>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {project.highlights.map((item) => (
                      <div key={item} className="border-t border-line pt-4">
                        <p className="text-sm font-semibold leading-7 text-ink/90">
                          {item}
                        </p>
                      </div>
                    ))}
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
