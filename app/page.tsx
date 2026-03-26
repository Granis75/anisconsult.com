import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SectionTitle } from "@/components/section-title";
import { siteContent } from "@/lib/site-content";

export default function HomePage() {
  const { hero, proofs, caseStudy, mybi, method } = siteContent;

  return (
    <>
      <SiteHeader />

      <main id="home" className="bg-white text-ink antialiased">
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
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
                <Link
                  href={hero.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  {hero.primaryCta.label}
                </Link>

                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink"
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <SectionTitle eyebrow="Chiffres preuves" />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {proofs.map((item) => (
                <article
                  key={`${item.label}-${item.value}`}
                  className="rounded-3xl border border-line bg-white p-7 shadow-card"
                >
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
          </div>
        </section>

        <section id="case-study" className="border-t border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
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

              <div className="rounded-[2rem] border border-line bg-surface p-8 shadow-soft">
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
                    <Link
                      href={caseStudy.cta.href}
                      className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                      {caseStudy.cta.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mybi" className="border-t border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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
                    className="inline-flex items-center rounded-full border border-ink px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
                  >
                    {mybi.button.label}
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-line bg-white p-4 shadow-card">
                <div className="overflow-hidden rounded-[1.5rem] border border-line bg-soft">
                  <Image
                    src="/mybi_mockup.png"
                    alt="Interface MyBi"
                    width={1400}
                    height={1000}
                    className="h-auto w-full"
                    priority
                  />
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-line bg-surface p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Dashboard
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {mybi.dashboard.map((item) => (
                        <div key={item.label} className="rounded-xl bg-white p-3">
                          <div className="text-xs text-muted">{item.label}</div>
                          <div className="mt-2 text-lg font-bold text-ink">
                            {item.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-line bg-surface p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Flux métier
                    </div>
                    <div className="mt-4 space-y-3">
                      {mybi.flow.map((step) => (
                        <div
                          key={step}
                          className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-ink"
                        >
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="method" className="border-t border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <SectionTitle eyebrow={method.title} title={method.subtitle} />

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {method.steps.map((item) => (
                <article
                  key={item.step}
                  className="rounded-3xl border border-line bg-surface p-8"
                >
                  <p className="text-sm font-semibold text-muted">{item.step}</p>
                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>

                  <div className="mt-5 space-y-4 text-sm leading-7 text-muted">
                    {item.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-line pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      {item.caseStudyTitle}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {item.caseStudy}
                    </p>

                    {"result" in item ? (
                      <div className="mt-5 rounded-2xl border border-line bg-white p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                          {item.resultTitle}
                        </p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
                          {item.result.map((result) => (
                            <li key={result}>• {result}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              <div className="rounded-[2rem] border border-line bg-surface p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  {method.tracking.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-bold tracking-[-0.02em] text-ink">
                  {method.tracking.title}
                </h3>

                <div className="mt-6 space-y-4 text-sm leading-7 text-muted">
                  <p>{method.tracking.body[0]}</p>
                  <p>{method.tracking.body[1]}</p>
                  <p>{method.tracking.body[2]}</p>
                  <p className="font-medium text-ink">{mybi.flow.join(" → ")}</p>
                  <p>{method.tracking.body[3]}</p>
                  <p>{method.tracking.dashboardIntro}</p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {mybi.dashboard.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-line bg-white p-4"
                    >
                      <p className="text-xs text-muted">{item.label}</p>
                      <p className="mt-2 text-xl font-bold text-ink">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-4 text-sm leading-7 text-muted">
                  <p>{method.tracking.benefitsIntro}</p>
                  <ul className="space-y-2">
                    {method.tracking.benefits.map((benefit) => (
                      <li key={benefit}>• {benefit}</li>
                    ))}
                  </ul>
                  <p>{method.tracking.closing}</p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-line bg-white p-4 shadow-card">
                <div className="overflow-hidden rounded-[1.5rem] border border-line bg-soft">
                  <div className="flex items-center gap-2 border-b border-line px-5 py-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                    <div className="ml-4 text-xs font-medium text-muted">Interface MyBi</div>
                  </div>

                  <div className="p-4">
                    <Image
                      src="/mybi_mockup.png"
                      alt="Interface MyBi"
                      width={1400}
                      height={1000}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 rounded-[2rem] border border-line bg-surface p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                {method.positioning.title}
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {method.positioning.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-line bg-white p-5 text-sm font-semibold text-ink"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-line bg-white">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">
            <SectionTitle eyebrow="Contact" />
            <div className="mt-10">
              <a
                href="mailto:anis.contactme@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Contact
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
