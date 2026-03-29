import { SectionKicker } from "@/components/section-kicker";

export function MyBiHomeSection() {
  return (
    <section id="mybi" className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="max-w-xl">
          <SectionKicker label="MYBI" />

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl">
            MyBi — Business Operating System
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600 sm:text-xl">
            A system built from real operational needs.
          </p>

          <div className="mt-6 space-y-1.5 text-base leading-7 text-neutral-600 sm:text-lg">
            <p>
              It brings client records, missions, invoicing and payment
              follow-up into one place.
            </p>
            <p>
              A concrete example of how manual admin can be structured and
              easier to manage.
            </p>
          </div>
        </div>

        <div className="mt-10 max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
            System flow
          </p>
          <p className="mt-4 text-base font-semibold tracking-[-0.03em] text-neutral-950 sm:text-lg">
            Client → Mission → Invoice → Payment
          </p>

          <p className="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
            Live signals
          </p>
          <ul className="mt-4 space-y-1.5 text-sm leading-7 text-neutral-600 sm:text-base">
            <li>3 invoices overdue — €1,450</li>
            <li>2 active clients</li>
            <li>1 mission in progress</li>
          </ul>
        </div>

        <div className="mt-10 max-w-xl">
          <a
            href="https://mybi-business-app.vercel.app/dashboard"
            className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-200 bg-white px-5 text-sm font-semibold text-neutral-950 transition-colors duration-200 hover:bg-neutral-100"
          >
            Explore MyBi
          </a>
        </div>
      </div>
    </section>
  );
}
