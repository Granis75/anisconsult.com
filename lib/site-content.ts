export const bookingHref = "https://cal.com/a-a-eqld1k/ops-call";

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
    title: "Fix messy operations. Reduce manual work. Build systems teams actually use.",
    subtitle: "Operations Systems Specialist",
    description:
      "For founders and small teams tired of scattered tools, broken workflows, and losing time on manual follow-up.",
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
