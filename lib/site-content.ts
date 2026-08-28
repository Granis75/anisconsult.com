export const directEmailHref = "mailto:hello@anisconsult.com";

export const siteContent = {
  brand: "AnisConsult",
  navigation: [
    { label: "Cases", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    title: "Clearer operations. Less manual friction.",
    subtitle: "Operational improvement & process optimization",
    description:
      "Selected operational work across hospitality, logistics and service environments, focused on day-to-day execution, follow-up, reporting and process improvement.",
    support:
      "Field-tested operational thinking for environments dealing with scattered follow-up, unclear ownership and recurring execution issues.",
    primaryCta: {
      label: "View operational cases",
      href: "/work",
    },
    secondaryCta: {
      label: "Get in touch",
      href: "/contact",
    },
  },
} as const;
