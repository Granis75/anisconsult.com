export const siteContent = {
  brand: "AnisConsult",
  navigation: [
    { label: "Case study", href: "/case-study/vesper" },
    { label: "MyBi", href: "/#mybi" },
    { label: "Méthode", href: "/#method" },
    { label: "Contact", href: "/#contact" },
  ],
  hero: {
    eyebrow: "Operations · CRM · Automatisation",
    title: "Des opérations plus claires, plus fiables, plus pilotables.",
    description:
      "Je conçois des systèmes simples pour structurer les flux métier, fiabiliser la donnée et améliorer l’exécution quotidienne.",
    emphasis:
      "L’objectif n’est pas d’ajouter des outils. L’objectif est de faire mieux fonctionner l’activité.",
    primaryCta: {
      label: "Voir le case study",
      href: "/case-study/vesper",
    },
    secondaryCta: {
      label: "Contact",
      href: "/#contact",
    },
  },
  proofs: [
    { label: "Review score", value: "7.6 → 9.2", meta: "TripAdvisor" },
    { label: "Classement", value: "450 → Top 30", meta: "" },
    { label: "Temps administratif", value: "~10h / semaine", meta: "" },
    { label: "Nouveau marché", value: "+50% CA", meta: "" },
  ],
  caseStudy: {
    title:
      "Transformation d’un modèle opérationnel en système plus clair, plus autonome et plus pilotable.",
    context:
      "Un fonctionnement fragmenté, dépendant du front desk et encore peu structuré sur les flux, la donnée et l’expérience.",
    intervention:
      "Refonte de la logique opérationnelle, de l’expérience client et des systèmes de gestion pour rendre l’activité plus lisible et plus robuste.",
    actions: [
      "Passage à un modèle plus autonome avec support ciblé",
      "Système d’accès RFID / Bluetooth",
      "Supports digitaux multilingues",
      "Structuration de la donnée client et intégration CRM",
    ],
    results: [
      "Réduction des frictions",
      "Meilleure exploitation de la donnée client",
      "Opérations plus lisibles et plus stables",
      "Capacité d’exécution plus fiable et plus scalable",
    ],
    cta: {
      label: "Ouvrir le case study",
      href: "/case-study/vesper",
    },
  },
  mybi: {
    description:
      "Un système de gestion conçu pour structurer une activité freelance : clients, missions, facturation, paiements et pilotage.",
    button: {
      label: "Voir MyBi",
      href: "https://mybi-business-app.vercel.app/",
    },
    dashboard: [
      { label: "Revenue", value: "€12.4k" },
      { label: "Impayés", value: "€2.1k" },
      { label: "Clients", value: "18" },
      { label: "Paiements", value: "36" },
    ],
    flow: ["Client", "Mission", "Facture", "Paiement"],
  },
  method: {
    title: "Méthode",
    subtitle: "Une méthode ancrée dans le réel.",
    steps: [
      {
        step: "Étape 1",
        title: "Lire le réel",
        intro: [
          "Le point de départ n’est pas l’outil.",
          "C’est le fonctionnement réel.",
        ],
        bullets: [
          "Observation des flux sur le terrain",
          "Analyse des interactions entre équipes",
          "Identification des frictions et des dépendances",
        ],
        emphasis: [
          "Le système officiel est rarement la réalité.",
          "Les équipes compensent.",
          "Notes. WhatsApp. Excel parallèle. Mémoire humaine.",
        ],
        objective: "comprendre ce qui se passe réellement, et pourquoi.",
      },
      {
        step: "Étape 2",
        title: "Structurer",
        intro: [
          "On ne corrige pas un problème avec un outil.",
          "On corrige le système.",
        ],
        bullets: [
          "Modélisation des flux",
          "Simplification des étapes",
          "Définition des états et des données utiles",
        ],
        objective: "clarifier, simplifier, rendre pilotable.",
      },
      {
        step: "Étape 3",
        title: "Déployer",
        intro: ["Une fois le système clair, on l’outille."],
        bullets: [
          "Intégration de solutions existantes ou outils ciblés",
          "Mise en place progressive",
          "Adoption réelle par les équipes",
        ],
        objective: "un système utilisable immédiatement, qui évolue vite.",
      },
    ],
    resultTitle: "Résultat",
    result: [
      "Opérations plus lisibles",
      "Moins de friction",
      "Exécution plus stable",
      "Meilleure capacité de scale",
    ],
    cta: {
      label: "Voir le case study Vesper →",
      href: "/case-study/vesper",
    },
  },
} as const;
