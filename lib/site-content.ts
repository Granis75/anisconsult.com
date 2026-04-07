export const siteContent = {
  brand: "AnisConsult",
  navigation: [
    { label: "Work", href: "/work" },
    { label: "MyBi", href: "/#mybi" },
    { label: "Systems", href: "/#method" },
    { label: "Contact", href: "/#contact" },
  ],
  hero: {
    title: "I’m an Operations Manager who structures daily operations.",
    subtitle: "Coordination • Follow-up • Reporting",
    description:
      "I organize workflows, follow-up and reporting so work stays clear, on time and easy to manage.",
    notes: [
      "Daily coordination",
      "Process follow-up",
      "Reporting",
    ],
    primaryCta: {
      label: "View Case Study",
      href: "/#case-study",
    },
    secondaryCta: {
      label: "Contact",
      href: "/#contact",
    },
  },
  method: {
    title: "Positioning",
    subtitle: "Business systems. Not more tools.",
    intro:
      "I help structure operations into clear systems. The goal is not to add tools. The goal is to make work easier to manage, track and control.",
    steps: [
      {
        step: "01",
        title: "Workflows",
        bullets: [
          "Workflow structuring",
          "Clear handoffs",
          "Less manual tracking",
        ],
        objective:
          "Make daily operations easier to manage.",
      },
      {
        step: "02",
        title: "Systems",
        bullets: [
          "CRM",
          "Invoicing",
          "Payments",
        ],
        objective:
          "Connect the operating chain into one readable system.",
      },
      {
        step: "03",
        title: "Control",
        bullets: [
          "Reporting",
          "Ownership",
          "Visibility",
        ],
        objective:
          "Keep the business easier to track and control.",
      },
    ],
    cta: {
      label: "View Case Study",
      href: "/#case-study",
    },
  },
} as const;
