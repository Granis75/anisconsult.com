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
        body: [
          "Le point de départ n’est pas l’outil. C’est le fonctionnement réel.",
          "Observation des flux sur le terrain. Analyse des interactions entre équipes. Identification des points de friction et des dépendances critiques.",
          "Très souvent, le système officiel ne reflète pas la réalité. Les équipes compensent avec des solutions de contournement : notes, WhatsApp, Excel parallèle, mémoire humaine.",
          "L’objectif est simple : comprendre ce qui se passe réellement, et pourquoi.",
        ],
        caseStudyTitle: "Cas Vesper",
        caseStudy:
          "Fonctionnement fragmenté, fortement dépendant du front desk. Informations dispersées, expérience client non homogène, peu de structure dans les flux et la donnée. Une partie du travail réel reposait sur des ajustements manuels et des habitudes d’équipe.",
      },
      {
        step: "Étape 2",
        title: "Structurer",
        body: [
          "Avant de parler d’outil, on corrige le système.",
          "Modélisation des flux : qui fait quoi, quand, avec quelle information. Simplification des étapes. Définition des états clés et de la donnée réellement utile.",
          "On transforme un fonctionnement implicite en système lisible.",
          "Objectif : enlever la complexité inutile, clarifier les responsabilités, rendre le pilotage possible.",
        ],
        caseStudyTitle: "Cas Vesper",
        caseStudy:
          "Reconstruction de la logique opérationnelle autour d’un modèle plus autonome. Structuration du parcours client. Centralisation et organisation de la donnée client pour permettre une exploitation réelle.",
      },
      {
        step: "Étape 3",
        title: "Déployer",
        body: [
          "Une fois le système clair, on l’outille.",
          "Intégration de solutions existantes ou création d’outils ciblés. Mise en place progressive. Adoption par les équipes prioritaire sur la sophistication technique.",
          "Le système doit être utilisable immédiatement, et évoluer rapidement.",
        ],
        caseStudyTitle: "Cas Vesper",
        caseStudy:
          "Déploiement d’un système d’accès RFID / Bluetooth. Mise en place de supports digitaux multilingues. Intégration d’une logique CRM pour structurer et exploiter la donnée client.",
        resultTitle: "Résultat",
        result: [
          "Opérations plus lisibles",
          "Moins de friction",
          "Capacité d’exécution plus stable et plus scalable",
        ],
      },
    ],
    tracking: {
      eyebrow: "Suivi & pilotage",
      title: "Un système opérationnel doit rester lisible.",
      body: [
        "Un système opérationnel ne s’arrête pas au déploiement. Il doit être pilotable.",
        "L’objectif est de rendre visibles les indicateurs qui reflètent réellement l’activité.",
        "MyBi est un système de gestion conçu pour structurer une activité freelance autour d’un flux simple :",
        "Chaque étape est reliée à une donnée exploitable.",
      ],
      dashboardIntro: "Le dashboard permet de suivre en temps réel :",
      benefitsIntro: "Ce type d’outil permet :",
      benefits: [
        "d’identifier immédiatement les retards de paiement",
        "de comprendre la dépendance à certains clients",
        "de suivre l’activité sans retraitement manuel",
        "de transformer la donnée en décision opérationnelle",
      ],
      closing:
        "Ce n’est pas un outil de plus. C’est une couche de lecture du système.",
    },
    positioning: {
      title: "Positionnement",
      items: [
        "Pas de tech pour la tech.",
        "Pas de digitalisation d’un mauvais flux.",
        "Des systèmes simples.",
      ],
    },
  },
} as const;
