import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Message received. — AnisConsult",
  description: "Thanks for reaching out to AnisConsult.",
  robots: {
    index: false,
    follow: false,
  },
};

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
                  Message sent
                </span>
              </div>

              <h1 className="mt-8 max-w-3xl font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[4.15rem]">
                Message received.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-[1.2rem] sm:leading-9">
                Thanks for reaching out. I&apos;ll review your message and get back to you if there is a clear fit.
              </p>

              <div className="mt-12 border-t border-line pt-8">
                <article className="premium-card p-6 sm:p-8 lg:p-10">
                  <Link href="/" className="premium-cta h-12 px-6">
                    Back to AnisConsult
                  </Link>
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
