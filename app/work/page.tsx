import type { Metadata } from "next";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackedLink } from "@/components/tracked-link";

export const metadata: Metadata = {
  title: "Work | Operations & Internal Tools | Anis",
  description:
    "Real operational work across hospitality and logistics, plus retail proof shaped by execution, reporting and internal tools.",
};

const projects = [
  {
    kicker: "Case Study",
    title: "Résidence Cadet",
    subtitle: "Hospitality Operations",
    description: [
      "Guest stays, access, follow-up and reporting were reorganized into one clearer operating flow.",
    ],
    highlights: [
      "Guest satisfaction improved",
      "Platform visibility strengthened",
      "New revenue line opened",
      "~10h/week admin reduced",
    ],
    href: "/case-study/vesper",
    location: "work_page_residence_cadet",
    ctaLabel: "View Case Study",
  },
  {
    kicker: "Case Study",
    title: "Kepler Express",
    subtitle: "Logistics Operations",
    description: [
      "Mission follow-up, driver costs and billing were connected in one clearer logistics workflow.",
    ],
    highlights: [
      "Mission and cost capture aligned",
      "Billing matched to executed work",
      "Less manual follow-up",
      "Better dispatch-billing coordination",
    ],
    href: "/case-study/kepler-express",
    location: "work_page_kepler",
    ctaLabel: "View Case Study",
  },
  {
    kicker: "Case Study",
    title: "Retail Operations Proof",
    subtitle: "Conceptual Business Case Study",
    description: [
      "Conceptual business case study supported by StorePilot dashboard.",
    ],
    highlights: [
      "Hybrid checkout and labor flow redesign",
      "Revenue, staffing and waste made visible",
      "Store routines rebuilt around clear ownership",
      "Owner dependency reduced through stronger operating structure",
    ],
    href: "/work/retail-efficiency-model",
    location: "work_page_retail_operations_proof",
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
                <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
                  <div className="max-w-xl">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                      {project.kicker}
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
