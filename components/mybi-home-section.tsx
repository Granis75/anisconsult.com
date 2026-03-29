import Image from "next/image";
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

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-[720px] overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
            <Image
              src="/visuals/mybi-control-view.svg"
              alt="Business control view showing revenue, unpaid invoices, clients, and recent activity."
              width={1600}
              height={1200}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="mt-8 max-w-xl">
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
