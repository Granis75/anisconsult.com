import { cvHref, directEmailHref, linkedInHref } from "@/lib/site-content";

type ContactSectionProps = {
  headingLevel?: "h1" | "h2";
};

export function ContactSection({ headingLevel = "h1" }: ContactSectionProps) {
  const Heading = headingLevel;

  return (
    <div className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/42">
        Contact
      </p>
      <Heading className="mt-5 font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
        Get in touch.
      </Heading>
      <p className="mt-7 text-base leading-8 text-muted sm:text-lg">
        For professional opportunities or conversations about operations:
      </p>

      <a
        href={directEmailHref}
        className="mt-7 inline-flex text-lg font-semibold text-ink underline-offset-4 hover:underline sm:text-xl"
      >
        hello@anisconsult.com
      </a>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={directEmailHref} className="premium-cta-outline h-11 px-5">
          Email
        </a>
        <a
          href={linkedInHref}
          target="_blank"
          rel="noreferrer"
          className="premium-cta-outline h-11 px-5"
        >
          LinkedIn
        </a>
        {cvHref ? (
          <a href={cvHref} className="premium-cta-outline h-11 px-5" download>
            Download CV
          </a>
        ) : null}
      </div>
    </div>
  );
}
