import type { Metadata } from "next";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackedLink } from "@/components/tracked-link";

export const metadata: Metadata = {
  title: "Selected Work | anisconsult",
  description:
    "Selected client work focused on clearer operations, connected workflows, and better business visibility.",
};

const projects = [
  {
    title: "Vesper Collection",
    description:
      "Hospitality operations transformed into a clearer, more reliable system.",
    highlights: [
      "9.2 review score",
      "Top 30 ranking",
      "~10h/week saved",
      "+50% revenue from a new market",
    ],
    href: "/case-study/vesper",
    location: "work_page_vesper",
  },
  {
    title: "Kepler Express Ops",
    description:
      "Manual logistics coordination replaced by a connected operational workflow.",
    highlights: [
      "Client → Mission → Expense → Invoice → Payment",
      "Mission-level cost visibility",
      "Reduced manual tracking",
      "Better coordination between operations and billing",
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
              <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tighter2 text-ink sm:text-5xl lg:text-6xl">
                Selected work
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                Real operational systems built around real business
                constraints.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Two examples of how fragmented workflows were turned into
                clearer, more reliable operating systems.
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
                    <h2 className="mt-5 text-3xl font-bold tracking-tighter2 text-ink sm:text-4xl">
                      {project.title}
                    </h2>
                    <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                      {project.description}
                    </p>

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
