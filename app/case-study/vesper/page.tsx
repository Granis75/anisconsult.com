import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SectionTitle } from "@/components/section-title";
import { siteContent } from "@/lib/site-content";

export default function VesperCaseStudyPage() {
  const { caseStudy } = siteContent;

  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-5xl px-6 pb-16 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                Case study
              </p>

              <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tighter2 text-ink sm:text-5xl lg:text-6xl">
                {caseStudy.title}
              </h1>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr]">
              <div className="space-y-10">
                <div>
                  <SectionTitle eyebrow="Contexte" />
                  <p className="mt-4 text-base leading-8 text-muted">{caseStudy.context}</p>
                </div>

                <div>
                  <SectionTitle eyebrow="Intervention" />
                  <p className="mt-4 text-base leading-8 text-muted">
                    {caseStudy.intervention}
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-line bg-surface p-8 shadow-soft">
                <div>
                  <SectionTitle eyebrow="Actions clés" />
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                    {caseStudy.actions.map((action) => (
                      <li key={action}>• {action}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 border-t border-line pt-10">
                  <SectionTitle eyebrow="Résultats" />
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                    {caseStudy.results.map((result) => (
                      <li key={result}>• {result}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 border-t border-line pt-10">
                  <Link
                    href="/"
                    className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Retour à l’accueil
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
