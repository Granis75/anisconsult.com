export const siteContent = {
  brand: "Anis",
  navigation: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Internal Tools", href: "/#ops-core" },
    { label: "Contact", href: "/#contact" },
  ],
  hero: {
    title:
      "I help operations run cleaner — through coordination, structure and the right tools.",
    subtitle: "Operations & Internal Tools Coordinator",
    description:
      "Operations coordination, internal tools and reporting structure shaped by real work on the ground.",
    notes: [
      "Coordination",
      "Structure",
      "Follow-up",
      "Visibility",
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
      "The starting point is usually the same: spreadsheets, messages, manual checks and unclear ownership.",
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
