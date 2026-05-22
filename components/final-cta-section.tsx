"use client";

import { TrackedLink } from "@/components/tracked-link";

export function FinalCTASection() {
  return (
    <section className="scroll-mt-32 border-t border-line bg-white md:scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.5rem]">
            Contact
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
            Reach out about operational systems, product work, workflow tooling or international collaboration.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <TrackedLink
              href="/#contact"
              event="contact_cta_click"
              data={{ location: "final_cta_primary" }}
              className="premium-cta h-12 px-8"
            >
              Send message
            </TrackedLink>

            <TrackedLink
              href="/#ops-core"
              event="contact_cta_click"
              data={{ location: "final_cta_secondary" }}
              className="premium-cta-outline h-12 px-8"
            >
              View systems
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
