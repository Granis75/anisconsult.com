import type { Metadata } from "next";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackedLink } from "@/components/tracked-link";

export const metadata: Metadata = {
  title: "Operational Systems | AnisConsult",
  description:
    "Operational systems built from real operational constraints across product operations, business systems, and implementation.",
};

const projects = [
  {
    title: "Vesper Collection",
    subtitle: "Hospitality operations structured into a scalable system.",
    description: [
      "Fragmented tools (Excel, manual tracking, calls) were replaced by a structured operational system.",
      "Workflows were redesigned to improve visibility, coordination and financial tracking.",
    ],
    highlights: [
      {
        title: "9.2/10 Customer Satisfaction",
        detail: "Immediate improvement from a 7.6 baseline",
      },
      {
        title: "Top 30 Ranking",
        detail: "Significant improvement in market positioning",
      },
      {
        title: "10h Saved / Week",
        detail: "Reduction of manual administrative workload",
      },
      {
        title: "+50% Revenue from New Market",
        detail: "New customer segment successfully captured",
      },
    ],
    href: "/case-study/vesper",
    location: "work_page_vesper",
  },
  {
    title: "Kepler Express Ops",
    subtitle: "Logistics operations structured into a connected workflow.",
    description: [
      "Manual coordination (Excel, calls) was replaced by a structured operational system.",
      "End-to-end workflow implemented: Client → Mission → Expense → Invoice → Payment",
      "Improved visibility across operations, costs and billing.",
    ],
    highlights: [
      {
        title: "End-to-end workflow visibility",
      },
      {
        title: "Mission-level cost tracking",
      },
      {
        title: "Reduced manual coordination",
      },
      {
        title: "Improved link between operations and billing",
      },
    ],
    href: "/case-study/kepler-express",
    location: "work_page_kepler",
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
                Operational Systems
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                Real systems built from real operational constraints.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Two examples of how fragmented operations were structured into
                clear, scalable and reliable systems.
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
                        View case study
                      </TrackedLink>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {project.highlights.map((item) => (
                      <div key={item.title} className="border-t border-line pt-4">
                        <p className="text-sm font-semibold leading-7 text-ink/90">
                          {item.title}
                        </p>
                        {"detail" in item ? (
                          <p className="mt-1 text-sm leading-7 text-muted">
                            {item.detail}
                          </p>
                        ) : null}
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
