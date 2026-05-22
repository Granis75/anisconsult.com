export const directEmailHref = "mailto:hello@anisconsult.com";

export const siteContent = {
  brand: "Anis",
  navigation: [
    { label: "Products", href: "/#ops-core" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/#contact" },
  ],
  hero: {
    title: "Operational systems and AI-powered workflows for service businesses.",
    subtitle: "Operational Systems Lab",
    description:
      "Built from real operations to reduce scattered tools, manual follow-up and operational blind spots.",
    primaryCta: {
      label: "Explore the systems",
      href: "/#ops-core",
    },
    secondaryCta: {
      label: "View the work",
      href: "/#case-study",
    },
  },
} as const;
