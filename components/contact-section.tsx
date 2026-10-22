import { directEmailHref, linkedInHref } from "@/lib/site-content";

type ContactSectionProps = {
  headingLevel?: "h1" | "h2";
  locale?: "fr" | "en";
};
export function ContactSection({ headingLevel = "h1", locale = "fr" }: ContactSectionProps) {
  const Heading = headingLevel;
  const english = locale === "en";
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{english ? "Contact" : "Contact"}</p>
      <Heading className="mt-5 font-display text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
        {english ? "Let's discuss your situation." : "Parlons de votre contexte."}
      </Heading>
      <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
        {english
          ? "Have a question about my work, an operations challenge or a practical project? You can reach me directly by email or LinkedIn."
          : "Une question sur mon activité, une problématique de coordination ou un projet concret ? Vous pouvez me joindre directement par e-mail ou LinkedIn."}
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <a href={directEmailHref} className="premium-cta h-12 px-6">{english ? "Send an email" : "Écrire un e-mail"}</a>
        <a href={linkedInHref} target="_blank" rel="noopener noreferrer" className="premium-cta-outline h-12 px-6">LinkedIn</a>
      </div>
      <p className="mt-5 text-sm text-muted">hello@anisconsult.com</p>
    </div>
  );
}
