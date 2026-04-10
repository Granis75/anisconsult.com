import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { MyBiHomeSection } from "@/components/mybi-home-section";
import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackedLink } from "@/components/tracked-link";

const results = [
  {
    title: "Satisfaction client 9,2/10",
    description:
      "Amélioration immédiate depuis une base à 7,6.",
  },
  {
    title: "+32% vitesse d'exécution",
    description:
      "Les points de friction ont diminué.",
  },
  {
    title: "Visibilité opérationnelle",
    description:
      "Le suivi est devenu lisible au quotidien.",
  },
  {
    title: "10h gagnées / semaine",
    description:
      "La charge administrative a été réduite.",
  },
] as const;

const featuredCases = [
  {
    label: "Cas réel",
    title: "Vesper Collection",
    description:
      "Un cas terrain où l'exécution, le suivi et les données ont été réalignés.",
    href: "/case-study/vesper",
    location: "home_proof_vesper",
    ctaLabel: "Voir le cas",
  },
  {
    label: "Système",
    title: "Ops Core — Système opérationnel",
    description:
      "Un cadre interne pensé pour piloter l'exécution quotidienne à partir de contraintes terrain.",
    href: "/#ops-core",
    location: "home_proof_ops_core",
    ctaLabel: "Voir le système",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main id="home" className="bg-white text-ink antialiased">
        <Reveal>
          <Hero />
        </Reveal>

        <section id="case-study" className="border-t border-line bg-white">
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24" delayMs={40}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-end lg:gap-16">
              <div className="max-w-3xl">
                <SectionKicker label="Vesper Collection" />
                <h2 className="text-balance mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.7rem]">
                  Une preuve terrain avant toute modélisation.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Un cas terrain, un système interne, puis une preuve produit.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {results.map((item) => (
                <article key={item.title} className="premium-card flex h-full min-h-[15rem] flex-col bg-[#fbfaf7]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink/60">
                    Résultats
                  </p>
                  <h3 className="mt-6 font-display text-[2rem] font-semibold leading-[1.02] tracking-[-0.05em] text-ink sm:text-[2.3rem]">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-md text-sm leading-7 text-ink/78">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {featuredCases.map((item) => (
                <article key={item.title} className="premium-soft-card flex h-full flex-col">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                    {item.label}
                  </p>
                  <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-[2.2rem]">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-muted">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <TrackedLink
                      href={item.href}
                      event="case_study_cta_click"
                      data={{ location: item.location }}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
                    >
                      {item.ctaLabel}
                    </TrackedLink>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex justify-start border-t border-line pt-6">
              <TrackedLink
                href="/work"
                event="case_study_cta_click"
                data={{ location: "home_proof_footer" }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
              >
                Voir les projets
              </TrackedLink>
            </div>
          </Reveal>
        </section>

        <section id="ops-core" className="border-t border-line bg-white">
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24" delayMs={55}>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-16">
              <div className="max-w-3xl">
                <SectionKicker label="Ops Core" />
                <h2 className="text-balance mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.5rem]">
                  Ops Core — Système opérationnel
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  Un système conçu pour structurer l'exécution quotidienne à partir de contraintes réelles observées sur le terrain.
                </p>
                <p className="mt-5 text-sm leading-7 text-ink/78">
                  Construit à partir de problématiques réelles en environnement hospitality.
                </p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-ink/70">
                  Incident → Action → Dépense → Impact
                </p>

                <div className="mt-10">
                  <TrackedLink
                    href="/#mybi"
                    event="case_study_cta_click"
                    data={{ location: "ops_core" }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
                  >
                    Voir le système
                  </TrackedLink>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Suivi maintenance",
                  "Coordination opérationnelle",
                  "Flux de dépenses",
                  "Signaux clients",
                ].map((item) => (
                  <article key={item} className="premium-soft-card">
                    <p className="text-sm leading-7 text-ink/82">{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="method" className="border-t border-line bg-white">
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24" delayMs={60}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
              <div className="max-w-3xl">
                <SectionKicker label="Méthode" />
                <h2 className="text-balance mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.5rem]">
                  Partir du terrain. Cadrer l’exécution. Rendre le suivi pilotable.
                </h2>
              </div>

              <div className="max-w-2xl">
                <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  Le point de départ n’est pas l’outil. Le point de départ, c’est ce qui bloque l’exécution au quotidien.
                </p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-ink/70">
                  Terrain • Exécution • Coordination • Dépenses • Suivi
                </p>
              </div>
            </div>

            <div className="mt-12 flex justify-start border-t border-line pt-6">
              <TrackedLink
                href="/#case-study"
                event="case_study_cta_click"
                data={{ location: "method" }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
              >
                Voir Vesper
              </TrackedLink>
            </div>
          </Reveal>
        </section>

        <Reveal delayMs={80}>
          <MyBiHomeSection />
        </Reveal>

        <section id="contact" className="border-t border-line bg-white">
          <Reveal className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24" delayMs={100}>
            <ContactSection />
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
