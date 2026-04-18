export const siteContent = {
  brand: "Anis",
  navigation: [
    { label: "Work", href: "/work" },
    { label: "MyBi", href: "/#mybi" },
    { label: "How I Work", href: "/#method" },
    { label: "Contact", href: "/#contact" },
  ],
  hero: {
    title: "I help businesses turn scattered operations into clear, trackable systems.",
    subtitle: "Structure • Execution • Visibility",
    description:
      "Workflows, follow-up, invoicing and execution aligned in one readable flow.",
    notes: [
      "Structure",
      "Execution",
      "Follow-up",
      "Costs",
    ],
    primaryCta: {
      label: "View Work",
      href: "/#case-study",
    },
    secondaryCta: {
      label: "Contact",
      href: "/#contact",
    },
  },
  method: {
    title: "Positioning",
    subtitle: "How I work inside operations.",
    intro:
      "The starting point is usually the same: spreadsheets, calls, manual checks and unclear ownership.",
    steps: [
      {
        step: "01",
        title: "Daily work",
        bullets: [
          "Tasks",
          "Handoffs",
          "Follow-up",
        ],
        objective:
          "Make the work easier to run day to day.",
      },
      {
        step: "02",
        title: "Money flow",
        bullets: [
          "Costs",
          "Invoicing",
          "Payments",
        ],
        objective:
          "Keep expenses, invoices and payment status tied to the work.",
      },
      {
        step: "03",
        title: "Visibility",
        bullets: [
          "Status",
          "Ownership",
          "Reporting",
        ],
        objective:
          "Make open items and delays easier to see.",
      },
    ],
    cta: {
      label: "View work",
      href: "/#case-study",
    },
  },
} as const;
