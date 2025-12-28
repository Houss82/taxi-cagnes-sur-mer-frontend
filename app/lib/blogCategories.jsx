// blogCategories.jsx (Server Component)

const blogCategories = [
  {
    id: "taxi",
    label: "Transport & Service de Taxi",
    description:
      "Nos prestations de transport : transferts aéroport Nice, courses locales, longues distances, véhicules premium et réservations 24h/24.",
    icon: "Car",
    color: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      hover: "hover:bg-blue-100",
    },
    // Mapping des catégories d'articles vers cette catégorie
    articleCategories: ["Transferts Aéroport", "Taxi", "Transport", "Longue Distance"],
  },
  {
    id: "voyage",
    label: "Découvertes",
    description:
      "Explorer la région : sorties à Cagnes-sur-Mer, visites culturelles, plages, activités et escapades sur la Côte d'Azur.",
    icon: "Compass",
    color: {
      bg: "bg-pink-50",
      border: "border-pink-200",
      text: "text-pink-700",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      hover: "hover:bg-pink-100",
    },
    articleCategories: [
      "Tourisme",
      "Voyage & Tourisme",
      "Excursions",
      "Découvertes",
    ],
  },
  {
    id: "local",
    label: "Actualités & Partenaires ",
    description:
      "L'actualité : commerces locaux, artisans, restaurants partenaires, événements et initiatives.",
    icon: "Building2",
    color: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      hover: "hover:bg-green-100",
    },
    articleCategories: [
      "Partenaires",
      "Actualités",
      "Entreprises",
      "Vie locale & Entreprises",
    ],
  },
  {
    id: "sante",
    label: "Accompagnement, Accessibilité et Santé",
    description:
      "Services dédiés : transport médicalisé, accompagnement personnes à mobilité réduite, accès aux centres de santé et hôpitaux de la région.",
    icon: "Heart",
    color: {
      bg: "bg-rose-50",
      border: "border-rose-200",
      text: "text-rose-700",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      hover: "hover:bg-rose-100",
    },
    articleCategories: ["Santé", "Mobilité", "VSL"],
  },
  {
    id: "guides",
    label: "Conseils, Astuces & Déplacements",
    description:
      "Nos recommandations : comment organiser vos trajets, préparer vos déplacements, optimiser vos réservations et profiter de nos services.",
    icon: "BookOpen",
    color: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-700",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      hover: "hover:bg-purple-100",
    },
    articleCategories: [
      "Guides Pratiques",
      "Guide Pratique",
      "Conseils",
      "Conseils Pratiques",
      "Lifestyle",
      "Astuces",
    ],
  },
];

// Fonction pour obtenir l'ID de catégorie à partir de la catégorie d'un article
export function getCategoryIdFromArticleCategory(articleCategory) {
  const category = blogCategories.find((cat) =>
    cat.articleCategories.includes(articleCategory)
  );
  return category ? category.id : null;
}

// Fonction pour obtenir la catégorie à partir de son ID
export function getCategoryById(categoryId) {
  return blogCategories.find((cat) => cat.id === categoryId) || null;
}

export default blogCategories;
