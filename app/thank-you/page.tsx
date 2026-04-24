import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { bookingHref, directEmailHref } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Thank You — AnisConsult",
  description: "Your Operations Intro Call is confirmed.",
  robots: {
    index: false,
    follow: false,
  },
};

const preparationItems = [
  "What is currently slowing operations down",
  "Where time or energy is being lost",
  "What tools or workflows you use today",
  "What outcome you’d like to achieve",
] as const;

export default function ThankYouPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-24 lg:pt-24">
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-black/8 bg-[#f8f7f3] px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-ink" aria-hidden />
                <span className="ml-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-black/56">
                  Booked successfully
                </span>
              </div>

              <h1 className="mt-8 max-w-3xl font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[4.15rem]">
                Your intro call is confirmed.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-[1.2rem] sm:leading-9">
                You&apos;ll receive a confirmation email shortly with the meeting link and
                calendar invite.
              </p>

              <div className="mt-12 border-t border-line pt-8">
                <article className="premium-card p-6 sm:p-8 lg:p-10">
                  <section>
                    <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-[2.25rem]">
                      To make the most of our call, come prepared with:
                    </h2>

                    <ul className="mt-8 space-y-4 pl-5 text-base leading-8 text-ink/86 marker:text-black/28 sm:text-lg">
                      {preparationItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="mt-10 border-t border-line pt-8">
                    <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-[2.1rem]">
                      Need to send anything before the call?
                    </h2>

                    <a
                      href={directEmailHref}
                      className="mt-6 inline-flex text-base font-medium text-ink transition-opacity hover:opacity-70 sm:text-lg"
                    >
                      hello@anisconsult.com
                    </a>
                  </section>

                  <section className="mt-10 border-t border-line pt-8">
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Link href="/" className="premium-cta h-12 px-6">
                        Back to site
                      </Link>
                      <a href={bookingHref} className="premium-cta-outline h-12 px-6">
                        Book another time
                      </a>
                    </div>
                  </section>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
