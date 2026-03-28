import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const sectionLinks = [
  { label: "Context", href: "#context" },
  { label: "Problem", href: "#problem" },
  { label: "System", href: "#system" },
  { label: "Structured", href: "#structured" },
  { label: "Results", href: "#results" },
] as const;

const systemFlow = [
  "Client",
  "Order",
  "Delivery",
  "Invoice",
  "Payment",
] as const;

const structuredItems = [
  "Centralized order tracking",
  "Delivery linked to drivers and missions",
  "Driver expense tracking",
  "Automated invoice generation after delivery completion",
  "Payment tracking per client",
  "Client and supplier management",
  "Vehicle maintenance tracking",
  "Tablet-based workflows to reduce phone dependency",
] as const;

const resultItems = [
  "~60% less admin workload",
  "Same-day invoicing",
  "100% operational visibility",
  "Safer field communication",
  "Better expense control",
] as const;

export default function KeplerExpressCaseStudyPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-14 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
            <div className="max-w-5xl">
              <SectionKicker label="Case Study" />
              <h1 className="mt-6 max-w-5xl text-balance text-4xl font-extrabold leading-tight tracking-tighter2 text-ink sm:text-5xl lg:text-6xl">
                Structuring operations and cashflow in a small logistics company
              </h1>

              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                From fragmented workflows to a connected operational system.
              </p>

              <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-black/40">
                Operations · Workflow Structuring · Cashflow Visibility
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-5 lg:px-10">
            <nav
              aria-label="Section navigation"
              className="-mx-1 flex gap-6 overflow-x-auto px-1"
            >
              {sectionLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap text-sm font-medium text-muted transition hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section id="context" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_1fr] lg:gap-14">
              <div className="max-w-2xl">
                <SectionKicker label="Context" />
                <p className="mt-6 text-base leading-8 text-ink sm:text-lg">
                  A small logistics company (SASU, 1–7 employees) operating
                  across France and Europe.
                </p>
              </div>

              <div className="border-t border-line pt-4">
                <p className="text-base leading-8 text-muted sm:text-lg">
                  The company handled subcontracted deliveries, including small
                  parcels and light pallets, using a compact fleet of vans.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <article>
                <SectionKicker label="Problem" />
                <p className="mt-6 text-base leading-8 text-ink">
                  Operations were fragmented and mostly manual:
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
                  <li>• Orders tracked via Excel and paper</li>
                  <li>• Expenses recorded with physical tickets</li>
                  <li>• Drivers advancing mission costs</li>
                  <li>• Communication via phone calls, including during driving</li>
                  <li>• Outdated, disconnected software</li>
                </ul>
              </article>

              <article className="border-t border-line pt-4 lg:mt-10">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                  This resulted in
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
                  <li>• No real-time visibility on operations</li>
                  <li>• Frequent tracking errors</li>
                  <li>• Delayed invoicing</li>
                  <li>• Unsafe communication practices</li>
                  <li>• Heavy administrative workload</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="system" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-4xl">
              <SectionKicker label="System" />
              <h2 className="mt-6 text-3xl font-bold tracking-tighter2 text-ink sm:text-4xl">
                The system was redesigned around one connected flow
              </h2>
            </div>

            <div className="mt-10 rounded-[2rem] border border-line bg-surface p-6 lg:p-8">
              <div className="flex flex-wrap items-center gap-3">
                {systemFlow.map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink">
                      {item}
                    </span>
                    {index < systemFlow.length - 1 ? (
                      <span className="text-sm text-black/25">→</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
              <article className="border-t border-line pt-4">
                <p className="text-sm font-semibold text-ink">Website & platforms</p>
              </article>
              <article className="border-t border-line pt-4">
                <p className="text-sm font-semibold text-ink">Booking intake</p>
              </article>
              <article className="border-t border-line pt-4">
                <p className="text-sm font-semibold text-ink">Customer data (PMS)</p>
              </article>
              <article className="border-t border-line pt-4">
                <p className="text-sm font-semibold text-ink">
                  CRM logic (preferences, follow-ups)
                </p>
              </article>
              <article className="border-t border-line pt-4">
                <p className="text-sm font-semibold text-ink">RFID / Bluetooth access</p>
              </article>
              <article className="border-t border-line pt-4">
                <p className="text-sm font-semibold text-ink">Internal tools & reporting</p>
              </article>
            </div>
          </div>
        </section>

        <section id="structured" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-4xl">
              <SectionKicker label="What Was Structured" />
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {structuredItems.map((item) => (
                <article
                  key={item}
                  className="rounded-[2rem] border border-line bg-white p-6"
                >
                  <p className="text-sm leading-7 text-ink">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
                <SectionKicker label="Results" />
                <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                  Operations became more visible, more connected and easier to run.
                </p>
            </div>

            <div className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:mt-12">
              {resultItems.map((item) => (
                <article key={item} className="border-t border-line pt-4">
                  <p className="text-sm font-semibold text-ink">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-4xl">
              <SectionKicker label="Connection" />
              <p className="mt-6 text-base leading-8 text-ink sm:text-lg">
                This project reflects the same operational logic applied in MyBi
                — a lightweight business operating system designed to structure
                service-based activity through clear workflows, financial
                visibility, and execution control.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://mybi-business-app.vercel.app/dashboard"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
                >
                  Explore MyBi →
                </a>

                <Link
                  href="/"
                  className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
