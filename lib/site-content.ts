export const siteContent = {
  brand: "Anis",
  navigation: [
    { label: "Work", href: "/work" },
    { label: "MyBi", href: "/#mybi" },
    { label: "How I Work", href: "/#method" },
    { label: "Contact", href: "/#contact" },
  ],
  hero: {
    title:
      "I have managed operations where the work lived in Excel, calls and manual follow-up.",
    subtitle: "Operations • Execution • Control",
    description:
      "I cleaned up the day-to-day flow so tasks, issues, expenses and payments were easier to follow and less dependent on memory.",
    notes: [
      "Execution",
      "Follow-up",
      "Control",
    ],
    primaryCta: {
      label: "View work",
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
