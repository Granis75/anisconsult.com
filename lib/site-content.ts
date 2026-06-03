export const directEmailHref = "mailto:hello@anisconsult.com";

export const siteContent = {
  brand: "AnisConsult",
  navigation: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    title: "Fix recurring workflow problems. Build systems teams actually use.",
    subtitle: "Business systems & workflow tools",
    description:
      "Business systems and workflow tools for service teams stuck in scattered tools, manual follow-up and unclear ownership.",
    support:
      "Built from real operations to reduce operational blind spots and make day-to-day work easier to run.",
    primaryCta: {
      label: "View work",
      href: "/work",
    },
    secondaryCta: {
      label: "Discuss a workflow problem",
      href: "/contact",
    },
  },
} as const;
