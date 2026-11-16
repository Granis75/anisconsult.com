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
        {english ? "Let's discuss your project or opportunity." : "Échangeons sur votre projet ou votre besoin."}
      </Heading>
      <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
        {english
          ? "For a role within your organisation, a process improvement assignment or a digital tools project, you can reach me directly by email or LinkedIn."
          : "Pour une opportunité professionnelle, une mission d'amélioration des processus ou un projet numérique, vous pouvez me contacter par e-mail ou LinkedIn."}
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <a href={directEmailHref} className="premium-cta h-12 px-6">{english ? "Send an email" : "Écrire un e-mail"}</a>
        <a href={linkedInHref} target="_blank" rel="noopener noreferrer" className="premium-cta-outline h-12 px-6">LinkedIn</a>
      </div>
      <p className="mt-5 text-sm text-muted">hello@anisconsult.com</p>
    </div>
  );
}
