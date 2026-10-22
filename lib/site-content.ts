export const directEmailHref = "mailto:hello@anisconsult.com";
export const linkedInHref = "https://www.linkedin.com/in/anisallouachepro/";
export const cvHref: string | null = null;

export const siteContent = {
  brand: "ANIS ALLOUACHE",
  brandContext: "Organisation opérationnelle & outils métiers",
  navigation: [
    { label: "Réalisations", href: "/work" },
    { label: "Expertises", href: "/services" },
    { label: "Approche", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    title: "Des opérations mieux organisées.",
    subtitle: "Organisation opérationnelle et outils métiers",
    description:
      "Coordination des activités, amélioration des processus et outils numériques adaptés au terrain.",
    support:
      "Une approche concrète fondée sur l’expérience des résidences de services et des opérations quotidiennes.",
    primaryCta: {
      label: "Voir les réalisations",
      href: "/work",
    },
    secondaryCta: {
      label: "Download CV",
      href: cvHref,
    },
  },
} as const;
