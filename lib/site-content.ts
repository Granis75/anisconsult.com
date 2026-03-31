export const siteContent = {
  brand: "AnisConsult",
  navigation: [
    { label: "Work", href: "/work" },
    { label: "MyBi", href: "/#mybi" },
    { label: "Capabilities", href: "/#method" },
    { label: "Contact", href: "/#contact" },
  ],
  hero: {
    title: "Structure messy operations into clear business systems.",
    subtitle:
      "I structure CRM, workflow, automation and internal tools for service businesses that need execution, billing and follow-up to stay readable.",
    description:
      "Less manual coordination. Better visibility. One operating logic people can actually use.",
    notes: [
      "CRM structure",
      "Workflow logic",
      "Automation with control",
    ],
    primaryCta: {
      label: "Discuss your operations",
      href: "/#contact",
    },
    secondaryCta: {
      label: "See selected work",
      href: "/work",
    },
  },
  method: {
    title: "Capabilities",
    subtitle: "Operational systems designed for clarity, control and daily use.",
    intro:
      "Not a stack of disconnected services. The work is to give the business clearer structure, better logic and better visibility.",
    steps: [
      {
        step: "01",
        title: "Read the real workflow",
        bullets: [
          "Where requests enter and who owns what",
          "How delivery, admin and billing actually move",
          "Where follow-up depends on memory, workarounds or spreadsheets",
        ],
        objective:
          "See the live operating chain before changing tools or adding automation.",
      },
      {
        step: "02",
        title: "Structure the operating model",
        bullets: [
          "CRM stages, statuses and ownership rules",
          "Workflow handoffs between request, delivery, invoicing and payment",
          "Useful data points that support action instead of noise",
        ],
        objective:
          "Create one clear system logic the team can use day to day.",
      },
      {
        step: "03",
        title: "Implement the working system",
        bullets: [
          "Automation only where it removes real friction",
          "Internal views, forms or control layers where needed",
          "Progressive rollout in live operating conditions",
        ],
        objective:
          "Ship a setup that is lighter to run now and easier to improve later.",
      },
    ],
    cta: {
      label: "View selected work",
      href: "/work",
    },
  },
} as const;
