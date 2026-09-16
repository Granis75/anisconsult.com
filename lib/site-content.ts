export const directEmailHref = "mailto:hello@anisconsult.com";

export const siteContent = {
  brand: "ANIS ALLOUACHE",
  brandContext: "Operations Portfolio",
  navigation: [
    { label: "Work", href: "/work" },
    { label: "Systems", href: "/systems" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    title: "Operations portfolio.",
    subtitle: "Residence & Property Operations",
    description:
      "Selected work showing how operational problems were structured, improved and turned into clearer routines, controls and supporting systems.",
    support:
      "Focused on serviced residences, resident operations, property workflows and field-tested operations work across service environments.",
    primaryCta: {
      label: "View selected work",
      href: "/work",
    },
    secondaryCta: {
      label: "View systems",
      href: "/systems",
    },
  },
} as const;
