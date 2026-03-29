export const siteContent = {
  brand: "AnisConsult",
  navigation: [
    { label: "Work", href: "/work" },
    { label: "MyBi", href: "/#mybi" },
    { label: "Method", href: "/#method" },
    { label: "Contact", href: "/#contact" },
  ],
  hero: {
    title: "Run your business with less manual work.",
    subtitle:
      "I help service businesses connect CRM, admin and billing, reduce repetition, and keep daily operations easier to manage.",
    description:
      "I help service businesses connect CRM, admin and billing, reduce repetition, and keep daily operations easier to manage.",
    notes: [
      "Use what you already have.",
      "Reduce manual work.",
      "Improve visibility.",
    ],
    primaryCta: {
      label: "View work",
      href: "/work",
    },
    secondaryCta: {
      label: "Contact",
      href: "/#contact",
    },
  },
  method: {
    title: "Method",
    subtitle: "A practical approach.",
    steps: [
      {
        step: "Step 1",
        title: "Read the real activity",
        bullets: [
          "Field work",
          "Team habits",
          "Bottlenecks and dependencies",
        ],
        emphasis: [
          "The documented process is rarely the one people actually follow.",
          "Teams fill the gaps themselves.",
          "Notes. Calls. Spreadsheets. Memory.",
        ],
        objective: "Understand how the business really runs before changing anything.",
      },
      {
        step: "Step 2",
        title: "Design the right setup",
        bullets: [
          "Map the flow",
          "Simplify key steps",
          "Define useful data",
        ],
        objective: "Make the work easier to handle, simpler to manage, and fit for daily use.",
      },
      {
        step: "Step 3",
        title: "Put it in place",
        bullets: [
          "Existing tools or custom logic",
          "Progressive rollout",
          "Adoption in real conditions",
        ],
        objective: "Deliver something usable now, with room to improve over time.",
      },
    ],
    cta: {
      label: "View work",
      href: "/work",
    },
  },
} as const;
