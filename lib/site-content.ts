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
    title: "Operational improvement for service businesses.",
    subtitle: "Operational improvement & process optimization",
    description:
      "AnisConsult helps small service teams clarify responsibilities, reduce manual friction and improve day-to-day execution.",
    support:
      "Field-tested operational thinking for teams dealing with scattered follow-up, unclear ownership and recurring execution issues.",
    primaryCta: {
      label: "Discuss an operations issue",
      href: "/contact",
    },
    secondaryCta: {
      label: "View operational cases",
      href: "/work",
    },
  },
} as const;
