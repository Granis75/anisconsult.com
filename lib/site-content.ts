export const bookingHref = "https://cal.com/anisconsult/ops-call";

export const directEmailHref = "mailto:hello@anisconsult.com";

export const siteContent = {
  brand: "Anis",
  navigation: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Systems", href: "/#ops-core" },
    { label: "Contact", href: "/#contact" },
  ],
  hero: {
    title: "I design and build operating systems for service teams — and the practical tools that make them work.",
    subtitle: "Business systems and workflow tools for service teams",
    description:
      "For service teams stuck in scattered tools, manual follow-up and recurring work that nobody can see clearly enough to control.",
    primaryCta: {
      label: "See my work",
      href: "/#case-study",
    },
    secondaryCta: {
      label: "Get in touch",
      href: "/#contact",
    },
  },
} as const;
