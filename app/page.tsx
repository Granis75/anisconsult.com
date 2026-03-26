import Link from "next/link";
import { ContactModal } from "@/components/contact-modal";
import { MyBiShowcase } from "@/components/mybi-showcase";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SectionTitle } from "@/components/section-title";
import { TrackedLink } from "@/components/tracked-link";
import { siteContent } from "@/lib/site-content";

export default function HomePage() {
  const { hero, proofs, caseStudy, mybi, method } = siteContent;

  return (
    <>
      <SiteHeader />

      <main id="home" className="bg-white text-ink antialiased">
        <section className="relative overflow-hidden">
          <Reveal className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
            <div className="max-w-4xl">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                {hero.eyebrow}
              </p>

              <h1 className="max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-tighter2 text-ink sm:text-5xl lg:text-6xl">
                {hero.title}
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                {hero.description}
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink">
                {hero.emphasis}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <TrackedLink
                  href={hero.primaryCta.href}
                  event="case_study_cta_click"
                  data={{ location: "hero" }}
                  className="premium-cta"
                >
                  {hero.primaryCta.label}
                </TrackedLink>

                <Link
                  href={hero.secondaryCta.href}
                  className="premium-cta-outline"
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="border-t border-line bg-surface">
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10" delayMs={40}>
            <SectionTitle eyebrow="Chiffres preuves" />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {proofs.map((item) => (
                <article key={`${item.label}-${item.value}`} className="premium-card p-7">
                  <p className="text-sm font-medium text-muted">{item.label}</p>
                  <p className="mt-4 text-3xl font-extrabold tracking-tighter2 text-ink">
                    {item.value}
                  </p>
                  {item.meta ? (
                    <p className="mt-3 text-sm leading-7 text-muted">{item.meta}</p>
                  ) : null}
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="case-study" className="border-t border-line bg-white">
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10" delayMs={60}>
            <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <SectionTitle eyebrow="Case study" />
                <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tighter2 text-ink sm:text-4xl">
                  {caseStudy.title}
                </h2>

                <div className="mt-10 space-y-8">
                  <div>
                    <h3 className="text-base font-semibold text-ink">Contexte</h3>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-muted">
                      {caseStudy.context}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-ink">Intervention</h3>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-muted">
                      {caseStudy.intervention}
                    </p>
                  </div>
                </div>
              </div>

              <div className="premium-soft-card">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-base font-semibold text-ink">Actions clés</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                      {caseStudy.actions.map((action) => (
                        <li key={action}>• {action}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-line pt-8">
                    <h3 className="text-base font-semibold text-ink">Résultats</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                      {caseStudy.results.map((result) => (
                        <li key={result}>• {result}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-line pt-8">
                    <TrackedLink
                      href={caseStudy.cta.href}
                      event="case_study_cta_click"
                      data={{ location: "case_study_block" }}
                      className="premium-cta"
                    >
                      {caseStudy.cta.label}
                    </TrackedLink>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="mybi" className="border-t border-line bg-surface">
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10" delayMs={80}>
            <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
              <div>
                <SectionTitle eyebrow="MyBi" />

                <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                  {mybi.description}
                </p>

                <div className="mt-10">
                  <a
                    href={mybi.button.href}
                    target="_blank"
                    rel="noreferrer"
                    className="premium-cta-outline"
                  >
                    {mybi.button.label}
                  </a>
                </div>
              </div>

              <MyBiShowcase />
            </div>
          </Reveal>
        </section>

        <section id="method" className="border-t border-line bg-white">
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10" delayMs={100}>
            <SectionTitle eyebrow={method.title} title={method.subtitle} />

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {method.steps.map((item) => (
                <article key={item.step} className="premium-soft-card">
                  <p className="text-sm font-semibold text-muted">{item.step}</p>
                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>

                  <div className="mt-5 space-y-3 text-sm leading-7 text-muted">
                    {item.intro.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>

                  {"emphasis" in item ? (
                    <div className="mt-8 rounded-2xl border border-line bg-white p-5">
                      <div className="space-y-3 text-sm leading-7 text-muted">
                        {item.emphasis.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-8 border-t border-line pt-6">
                    <p className="text-sm font-semibold text-ink">Objectif :</p>
                    <p className="mt-3 text-sm leading-7 text-muted">{item.objective}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="premium-card">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  {method.resultTitle}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
                  {method.result.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center lg:justify-end">
                <TrackedLink
                  href={method.cta.href}
                  event="case_study_cta_click"
                  data={{ location: "method_section" }}
                  className="premium-cta"
                >
                  {method.cta.label}
                </TrackedLink>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="border-t border-line bg-white">
          <Reveal
            className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10"
            delayMs={120}
          >
            <SectionTitle eyebrow="Contact" />
            <div className="mt-10">
              <ContactModal />
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
