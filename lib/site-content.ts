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
    title: "Fix recurring workflow problems. Build systems teams actually use.",
    subtitle: "Business systems and workflow tools for service teams",
    description:
      "For service teams stuck in scattered tools, manual follow-up and recurring work that nobody can see clearly enough to control.",
    primaryCta: {
      label: "Book a 15-min Call",
      href: bookingHref,
    },
    secondaryCta: {
      label: "See My Work",
      href: "/#case-study",
    },
  },
} as const;
