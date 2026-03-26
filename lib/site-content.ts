export const siteContent = {
  brand: "AnisConsult",
  navigation: [
    { label: "Case study", href: "/case-study/vesper" },
    { label: "MyBi", href: "/#mybi" },
    { label: "Méthode", href: "/#method" },
    { label: "Contact", href: "/#contact" },
  ],
  hero: {
    eyebrow: "Operations · CRM · Automatisation.",
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
      label: "Discuter du besoin",
      href: "mailto:anis.contactme@gmail.com",
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
  method: [
    {
      step: "Étape 1",
      title: "Lire le réel",
      description:
        "Comprendre le fonctionnement réel, les frictions et les priorités.",
    },
    {
      step: "Étape 2",
      title: "Structurer",
      description:
        "Définir les flux, la donnée utile, les états et les automatisations pertinentes.",
    },
    {
      step: "Étape 3",
      title: "Déployer",
      description:
        "Mettre en place une solution simple, maintenable et directement utile.",
    },
  ],
  positioning: [
    "Pas de tech pour la tech.",
    "Pas de digitalisation d’un mauvais flux.",
    "Des systèmes simples.",
  ],
} as const;
