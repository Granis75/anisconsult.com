import type { Metadata } from "next";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Services | AnisConsult — Workflow Audits, Internal Tools & Reporting",
  description:
    "Workflow audits, internal tools setup, reporting structure and ongoing systems support for service-based businesses.",
};

const services = [
  {
    title: "Workflow Audit",
    fit: "For teams relying on spreadsheets, chats, emails or scattered tools.",
    problem: "Work is moving, but ownership, status and follow-up are hard to see.",
    delivers: [
      "Workflow map",
      "Friction points",
      "Ownership, status and next-action review",
      "Reporting gaps",
      "Improvement plan",
    ],
  },
  {
    title: "Internal Tools Setup",
    fit: "For businesses that need a simple internal system around a recurring workflow.",
    problem: "A repeated process needs one workspace instead of improvised tracking.",
    delivers: [
      "Client/missions/incidents/payments tracking",
      "Statuses and ownership",
      "Simple dashboards",
      "Reporting views",
      "Usable internal workspace",
    ],
  },
  {
    title: "Reporting & Automation",
    fit: "For teams rebuilding reports manually.",
    problem: "Updates take too long because the underlying work is not structured.",
    delivers: [
      "Reporting structure",
      "Recurring status views",
      "Simple automation",
      "Clearer operational indicators",
    ],
  },
  {
    title: "Ongoing Systems Support",
    fit: "For keeping systems usable after setup.",
    problem: "Tools drift unless they are adjusted around how work changes.",
    delivers: [
      "Adjustments",
      "Documentation",
      "Improvement cycles",
      "Workflow cleanup",
      "Reporting support",
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
            <div className="max-w-4xl">
              <SectionKicker label="Services" />
              <h1 className="mt-6 font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
                Business systems and workflow tools for service teams.
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                Practical help for teams that need clearer ownership, cleaner follow-up and reporting they can trust.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Start with an audit when the workflow is unclear. Move to setup when the recurring process needs one shared workspace.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:px-10 lg:py-20">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[2rem] border border-line bg-surface p-8 lg:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-12">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                      What you can buy
                    </p>
                    <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                      {service.fit}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-ink/72">
                      {service.problem}
                    </p>
                  </div>

                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                      Delivered
                    </p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {service.delivers.map((item) => (
                        <div key={item} className="rounded-2xl border border-line bg-white px-4 py-3">
                          <p className="text-sm font-medium leading-6 text-ink">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}

            <div className="border-t border-line pt-8">
              <Link href="/contact" className="premium-cta h-12 px-6">
                Discuss a workflow problem
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
