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
    title: "Fix messy operations. Make work visible.",
    subtitle: "Operations systems for service businesses",
    description:
      "Practical systems for service teams drowning in scattered tools, manual follow-up and unclear ownership.",
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
