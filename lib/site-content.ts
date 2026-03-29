export const siteContent = {
  brand: "AnisConsult",
  navigation: [
    { label: "Case Studies", href: "/#case-study" },
    { label: "MyBi", href: "/#mybi" },
    { label: "Method", href: "/#method" },
    { label: "Contact", href: "/#contact" },
  ],
  hero: {
    title: "Operations. Systemized.",
    subtitle:
      "From fragmented workflows to a clear, reliable operating system.",
    description:
      "I design systems that structure your operations, make your data usable, and improve execution.",
    notes: [
      "No extra tools.",
      "No unnecessary complexity.",
      "Just better operations.",
    ],
    primaryCta: {
      label: "View Case Study",
      href: "/case-study/vesper",
    },
    secondaryCta: {
      label: "Contact",
      href: "/#contact",
    },
  },
  method: {
    title: "Method",
    subtitle: "A system-first approach.",
    steps: [
      {
        step: "Step 1",
        title: "Read real activity",
        bullets: [
          "Field workflows",
          "Team interactions",
          "Friction & dependencies",
        ],
        emphasis: [
          "The official system is rarely the real one.",
          "Teams compensate.",
          "Notes. WhatsApp. Spreadsheets. Memory.",
        ],
        objective: "Understand what is really happening — and why.",
      },
      {
        step: "Step 2",
        title: "Structure",
        bullets: [
          "Flow modeling",
          "Step simplification",
          "Data definition",
        ],
        objective: "Clarify, simplify, make it operable.",
      },
      {
        step: "Step 3",
        title: "Deploy",
        bullets: [
          "Existing tools or custom logic",
          "Progressive rollout",
          "Real team adoption",
        ],
        objective: "A system that works immediately — and evolves fast.",
      },
    ],
    cta: {
      label: "View Case Study →",
      href: "/case-study/vesper",
    },
  },
} as const;
