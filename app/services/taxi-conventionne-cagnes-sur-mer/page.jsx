// ✅ SERVER COMPONENT - Pas de "use client"
// ISR: Revalidate toutes les heures pour permettre l'indexation Google
export const dynamic = "force-static";
export const revalidate = 3600; // ISR toutes les heures pour meilleure indexation

import { Building2, CheckCircle, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export const metadata = {
  title:
    "Taxi Conventionné CPAM Cagnes-sur-Mer | Transport Médical Remboursé 24/7",
  description:
    "Taxi conventionné CPAM à Cagnes-sur-Mer pour transport médical remboursé. Service conventionné Assurance Maladie vers hôpitaux Nice, Cannes, Antibes. Véhicules adaptés, chauffeurs formés, disponible 24/7.",
  keywords:
    "taxi conventionné cagnes sur mer, taxi conventionné cpam cagnes sur mer, transport médical cagnes sur mer, taxi remboursé sécurité sociale, vsl cagnes sur mer, taxi conventionné assurance maladie",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical:
      "https://taxi-cagnes-sur-mer.fr/services/taxi-conventionne-cagnes-sur-mer",
  },
  openGraph: {
    title:
      "Taxi Conventionné CPAM Cagnes-sur-Mer | Transport Médical Remboursé",
    description:
      "Taxi conventionné CPAM à Cagnes-sur-Mer pour transport médical remboursé. Service conventionné Assurance Maladie vers hôpitaux Nice, Cannes, Antibes.",
    url: "https://taxi-cagnes-sur-mer.fr/services/taxi-conventionne-cagnes-sur-mer",
    type: "website",
    siteName: "Taxi Cagnes-sur-Mer",
    images: [
      {
        url: "https://taxi-cagnes-sur-mer.fr/transport-medical-cagnes-sur-mer.jpeg",
        width: 1200,
        height: 630,
        alt: "Taxi Conventionné CPAM Cagnes-sur-Mer",
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Taxi Conventionné CPAM Cagnes-sur-Mer | Transport Médical Remboursé",
    description:
      "Taxi conventionné CPAM à Cagnes-sur-Mer pour transport médical remboursé. Service conventionné Assurance Maladie vers hôpitaux Nice, Cannes, Antibes.",
    images: [
      "https://taxi-cagnes-sur-mer.fr/transport-medical-cagnes-sur-mer.jpeg",
    ],
  },
};

export default function TransportMedical() {
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "TaxiService"],
    "@id":
      "https://taxi-cagnes-sur-mer.fr/services/taxi-conventionne-cagnes-sur-mer",
    name: "Taxi Conventionné CPAM Cagnes-sur-Mer",
    description:
      "Service de taxi conventionné CPAM pour transport médical remboursé par l'Assurance Maladie à Cagnes-sur-Mer",
    url: "https://taxi-cagnes-sur-mer.fr/services/taxi-conventionne-cagnes-sur-mer",
    telephone: "+33663576534",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cagnes-sur-Mer",
      addressRegion: "Alpes-Maritimes",
      postalCode: "06800",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "43.6644",
      longitude: "7.1489",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Cagnes-sur-Mer",
      },
      {
        "@type": "City",
        name: "Nice",
      },
      {
        "@type": "City",
        name: "Cannes",
      },
      {
        "@type": "City",
        name: "Antibes",
      },
    ],
    serviceType: "Transport médical conventionné CPAM",
    medicalSpecialty: [
      "Transport médical",
      "Transport vers hôpitaux",
      "Transport vers cliniques",
      "Transport personnes à mobilité réduite",
      "Accompagnement rendez-vous médicaux",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services transport médical conventionné CPAM",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Transport vers CHU Nice",
            description:
              "Taxi conventionné CPAM vers Centre Hospitalier Universitaire de Nice",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Transport vers Hôpital Cannes",
            description: "Taxi conventionné CPAM vers Hôpital de Cannes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Transport personnes à mobilité réduite",
            description:
              "Véhicules adaptés pour fauteuils roulants et équipements médicaux",
          },
        },
      ],
    },
    priceRange: "€€",
    openingHours: "Mo-Su 00:00-23:59",
    paymentAccepted: "Cash, Credit Card, Assurance Maladie",
    currenciesAccepted: "EUR",
    sameAs: ["https://maps.app.goo.gl/D6j4275xTCxMfvXP6"],
  };

  return (
    <main className="min-h-screen bg-white">
      <Script
        id="medical-business-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalBusinessSchema, null, 2),
        }}
      />
      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/taxi-cagnes-sur-mer-hopital.jpeg"
          alt="Taxi Conventionné CPAM Cagnes-sur-Mer - Transport médical remboursé"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 pl-4">
            Taxi Conventionné CPAM Cagnes-sur-Mer
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Transport médical remboursé par l'Assurance Maladie
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90"
          >
            Réserver un transport médical
          </Button>
        </div>
      </section>

      {/* Section SEO - Contenu principal */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-lg text-gray-700 mb-6 leading-relaxed max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 pl-5">
              Qu'est-ce qu'un taxi conventionné CPAM à Cagnes-sur-Mer ?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Un <strong>taxi conventionné CPAM Cagnes-sur-Mer</strong> est un
              service de transport médical agréé par la Caisse Primaire
              d'Assurance Maladie (CPAM). Cette convention garantit que notre
              service respecte les normes de qualité et de sécurité exigées par
              l'Assurance Maladie pour les transports médicaux et les
              déplacements de santé.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              En tant que <strong>taxi conventionné à Cagnes-sur-Mer</strong>,
              nous proposons un service de transport médical professionnel
              depuis <strong>tous les quartiers de Cagnes-sur-Mer</strong> : le{" "}
              <strong>Cros-de-Cagnes</strong> (village de pêcheurs et plages),
              le <strong>Haut-de-Cagnes</strong> (village perché médiéval), le{" "}
              <strong>centre-ville</strong> (gare SNCF, commerces), et toutes
              les <strong>zones résidentielles</strong>. Notre service est
              adapté aux besoins de santé et peut être partiellement ou
              totalement remboursé par la Sécurité Sociale selon votre
              situation.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nos taxis conventionnés CPAM assurent les transports médicaux
              depuis Cagnes-sur-Mer vers les principaux établissements de santé
              de la Côte d'Azur : <strong>CHU Nice</strong> (Hôpital Pasteur,
              Archet, Cimiez), <strong>Hôpital de Cannes</strong> (Simone Veil),{" "}
              <strong>cliniques privées</strong> (Saint-Georges, Parc Impérial à
              Nice, Polyclinique Antibes), et tous les{" "}
              <strong>centres spécialisés</strong> (dialyse, chimiothérapie,
              rééducation, imagerie médicale).
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900 pl-3">
                🏥 Avantages d'un taxi conventionné CPAM
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Remboursement possible</strong> : Le transport peut
                    être pris en charge par l'Assurance Maladie sous certaines
                    conditions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Normes de qualité</strong> : Respect des standards
                    de sécurité et de professionnalisme exigés par la CPAM
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Véhicules adaptés</strong> : Flotte conforme aux
                    exigences pour personnes à mobilité réduite
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Chauffeurs formés</strong> : Personnel qualifié pour
                    l'accompagnement médical et les personnes fragiles
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Traçabilité</strong> : Facturation conforme aux
                    normes CPAM pour faciliter le remboursement
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Fiabilité</strong> : Service reconnu et contrôlé par
                    les autorités sanitaires
                  </span>
                </li>
              </ul>
            </div>

            <Image
              src="/taxi-cagnes-sur-mer-pasteur2-nice.jpeg"
              alt="Taxi Conventionné CPAM Cagnes-sur-Mer - Véhicule adapté pour transport médical"
              width={400}
              height={200}
              className="w-full rounded-lg mb-8"
            />

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 mt-12 pl-4">
              Quand utiliser un taxi conventionné CPAM à Cagnes-sur-Mer ?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Un <strong>taxi conventionné Cagnes-sur-Mer</strong> est
              particulièrement adapté pour :
            </p>
            <ul className="space-y-4 mb-8 text-gray-700">
              <li className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Rendez-vous médicaux</strong> : Consultations, examens
                  spécialisés (IRM, scanner, échographie), suivi médical
                  régulier
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Transport vers hôpitaux</strong> : CHU Nice, Hôpital
                  Cannes, cliniques privées de la Côte d'Azur
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Personnes à mobilité réduite</strong> : Accès aux
                  établissements de santé avec fauteuil roulant ou équipements
                  médicaux
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Trajets réguliers</strong> : Dialyse, chimiothérapie,
                  rééducation, consultations de suivi
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Urgences médicales non critiques</strong> : Transport
                  rapide vers les services d'urgence
                </span>
              </li>
            </ul>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 mt-12 pl-4">
              Comment fonctionne le remboursement par la CPAM ?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Pour bénéficier du remboursement d'un{" "}
              <strong>transport médical en taxi conventionné</strong>, plusieurs
              conditions doivent être remplies :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 pl-3">
                Conditions de remboursement
              </h3>
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li>
                  <strong>Prescription médicale</strong> : Votre médecin doit
                  prescrire le transport médical sur une ordonnance
                </li>
                <li>
                  <strong>Justification médicale</strong> : Le transport doit
                  être justifié par votre état de santé (mobilité réduite,
                  urgence, équipements médicaux nécessaires)
                </li>
                <li>
                  <strong>Taxi conventionné</strong> : Le service de taxi doit
                  être conventionné CPAM (notre service l'est)
                </li>
                <li>
                  <strong>Facture détaillée</strong> : Nous vous fournissons
                  tous les justificatifs nécessaires pour votre demande de
                  remboursement
                </li>
              </ol>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              <strong>Important</strong> : Le remboursement dépend de votre
              situation médicale et de votre caisse d'assurance maladie.
              Contactez votre{" "}
              <strong>CPAM (Caisse Primaire d'Assurance Maladie)</strong> pour
              connaître les conditions exactes de remboursement selon votre cas.
              Nous pouvons vous fournir tous les justificatifs nécessaires
              (facture détaillée, justificatif de trajet).
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 mt-12 pl-4">
              Nos véhicules adaptés pour transport médical
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 pl-3">
                  Mercedes GLB
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Capacité : 1-4 passagers</li>
                  <li>• Espace pour équipements médicaux légers</li>
                  <li>• Portes larges, sièges réglables</li>
                  <li>• Idéal pour consultations et examens</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 pl-3">
                  Mercedes Classe V
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Capacité : jusqu'à 7 passagers</li>
                  <li>• Espace pour fauteuils roulants</li>
                  <li>• Portes coulissantes, hauteur adaptée</li>
                  <li>• Idéal pour mobilité réduite</li>
                </ul>
              </Card>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 mt-12 pl-4">
              Destinations médicales depuis Cagnes-sur-Mer : quartiers et
              établissements desservis
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              En tant que <strong>taxi conventionné CPAM Cagnes-sur-Mer</strong>
              , nous desservons tous les quartiers de Cagnes-sur-Mer et tous les
              établissements de santé de la Côte d'Azur. Nos taxis conventionnés
              assurent les transports médicaux depuis{" "}
              <strong>tous les quartiers de Cagnes-sur-Mer</strong> : le{" "}
              <strong>Cros-de-Cagnes</strong> (village de pêcheurs), le{" "}
              <strong>Haut-de-Cagnes</strong> (village perché médiéval), le{" "}
              <strong>centre-ville</strong>, les{" "}
              <strong>résidences du bord de mer</strong>, et les{" "}
              <strong>zones résidentielles</strong> vers les hôpitaux et
              cliniques de la région.
            </p>

            <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900 pl-3">
                📍 Zones de prise en charge à Cagnes-sur-Mer
              </h3>
              <p className="text-gray-700 mb-4">
                Nos taxis conventionnés CPAM prennent en charge les patients
                depuis <strong>tous les quartiers de Cagnes-sur-Mer</strong> :
              </p>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>
                  <strong>Cros-de-Cagnes</strong> : Village de pêcheurs, plages,
                  résidences du bord de mer
                </li>
                <li>
                  <strong>Haut-de-Cagnes</strong> : Village perché médiéval,
                  château Grimaldi, musée Renoir
                </li>
                <li>
                  <strong>Centre-ville</strong> : Gare SNCF, commerces, hôtels,
                  résidences
                </li>
                <li>
                  <strong>Zones résidentielles</strong> : Toutes les résidences
                  et quartiers de Cagnes-sur-Mer
                </li>
                <li>
                  <strong>Hippodrome de la Côte d'Azur</strong> : Zone hippique
                  et résidentielle
                </li>
              </ul>
            </div>

            {/* Tableau des trajets médicaux - Optimisé SEO */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">
                      Destination
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">
                      Service
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">
                      Distance
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">
                      Durée
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      CHU Nice - Hôpital Pasteur
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      Taxi conventionné CPAM
                    </td>
                    <td className="border border-gray-300 px-4 py-3">15 km</td>
                    <td className="border border-gray-300 px-4 py-3">
                      25-30 min
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      CHU Nice - Hôpital Archet
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      Transport médical
                    </td>
                    <td className="border border-gray-300 px-4 py-3">14 km</td>
                    <td className="border border-gray-300 px-4 py-3">
                      20-25 min
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Hôpital de Cannes
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      Taxi conventionné CPAM
                    </td>
                    <td className="border border-gray-300 px-4 py-3">20 km</td>
                    <td className="border border-gray-300 px-4 py-3">
                      30-35 min
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Clinique Saint-Georges (Nice)
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      Transport médical
                    </td>
                    <td className="border border-gray-300 px-4 py-3">15 km</td>
                    <td className="border border-gray-300 px-4 py-3">
                      25-30 min
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Clinique du Parc Impérial (Nice)
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      Taxi conventionné CPAM
                    </td>
                    <td className="border border-gray-300 px-4 py-3">14 km</td>
                    <td className="border border-gray-300 px-4 py-3">
                      20-25 min
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Polyclinique de l'Europe (Antibes)
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      Transport médical
                    </td>
                    <td className="border border-gray-300 px-4 py-3">8 km</td>
                    <td className="border border-gray-300 px-4 py-3">
                      12-15 min
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Centre de dialyse Nice
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      Taxi conventionné CPAM
                    </td>
                    <td className="border border-gray-300 px-4 py-3">14 km</td>
                    <td className="border border-gray-300 px-4 py-3">
                      20-25 min
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 pl-3">
                🏥 Établissements de santé desservis depuis Cagnes-sur-Mer
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>CHU de Nice</strong> : Hôpital Pasteur (urgences
                    adultes, cardiologie, neurologie), Hôpital Archet
                    (maternité, pédiatrie), Hôpital Cimiez (gériatrie), Hôpital
                    Saint-Roch (chirurgie, urgences)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Hôpital de Cannes</strong> : Hôpital Simone Veil
                    (urgences, maternité, chirurgie, consultations spécialisées)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Cliniques privées Nice</strong> : Clinique
                    Saint-Georges, Clinique du Parc Impérial, Clinique
                    Saint-Antoine, Polyclinique de l'Europe (Antibes)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Centres spécialisés</strong> : Centres de dialyse
                    (Nice, Antibes), centres de chimiothérapie, centres de
                    rééducation, centres d'imagerie médicale (IRM, scanner)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Cabinet médicaux Cagnes-sur-Mer</strong> :
                    Consultations généralistes et spécialistes dans tous les
                    quartiers de Cagnes-sur-Mer (Cros-de-Cagnes, Haut-de-Cagnes,
                    centre-ville)
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900 pl-3">
                💡 Expertise locale Cagnes-sur-Mer
              </h3>
              <p className="text-gray-700 mb-3">
                Nos chauffeurs connaissent parfaitement{" "}
                <strong>tous les quartiers de Cagnes-sur-Mer</strong>{" "}
                (Cros-de-Cagnes, Haut-de-Cagnes, centre-ville) et les accès aux
                établissements de santé de la région. Ils peuvent vous
                conseiller les meilleurs itinéraires selon votre destination
                médicale et votre quartier de départ à Cagnes-sur-Mer.
              </p>
              <p className="text-gray-700">
                Pour les trajets réguliers depuis Cagnes-sur-Mer (dialyse,
                chimiothérapie, consultations de suivi), des{" "}
                <strong>tarifs préférentiels</strong> peuvent être proposés.
                Nous proposons également des <strong>forfaits mensuels</strong>{" "}
                pour les patients nécessitant des transports médicaux réguliers
                depuis Cagnes-sur-Mer vers les hôpitaux de Nice, Cannes ou
                Antibes.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 mt-12 pl-4">
              Comment réserver un transport médical conventionné ?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Pour réserver un <strong>taxi conventionné CPAM</strong> à
              Cagnes-sur-Mer :
            </p>
            <ol className="space-y-4 mb-8 text-gray-700 list-decimal list-inside">
              <li>
                <strong>Appelez-nous</strong> au{" "}
                <strong>+33 6 63 57 65 34</strong> (disponible 24/7) ou{" "}
                <Link href="/reservation" className="text-accent underline">
                  réservez en ligne
                </Link>
              </li>
              <li>
                <strong>Indiquez</strong> : établissement de santé, type de
                rendez-vous, besoins spécifiques (fauteuil roulant, équipements
                médicaux)
              </li>
              <li>
                <strong>Confirmez</strong> votre réservation et recevez les
                détails par SMS/email
              </li>
              <li>
                <strong>Le jour J</strong>, votre chauffeur arrive à l'heure
                avec un véhicule adapté
              </li>
            </ol>
          </div>

          {/* Section CTA - Hors de prose pour éviter les conflits de styles */}
          <div className="bg-linear-to-r from-accent to-accent/90 p-8 rounded-lg mb-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-accent-foreground pl-3">
              Service disponible 24h/24 et 7j/7
            </h3>
            <p className="text-lg mb-6 text-accent-foreground">
              Notre service de{" "}
              <strong className="text-accent-foreground">
                taxi conventionné CPAM
              </strong>{" "}
              est disponible en permanence pour répondre à vos besoins de
              transport médical, y compris les urgences non critiques.
            </p>
            <Button
              href="/reservation"
              size="lg"
              className="bg-accent-foreground text-accent hover:opacity-90"
            >
              Réserver maintenant
            </Button>
          </div>
        </div>
      </section>

      {/* Liens vers autres contenus */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 pl-4">
            En savoir plus sur le transport médical
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-gray-900 pl-3">
                Guide complet transport médical
              </h3>
              <p className="text-gray-700 mb-4 grow">
                Découvrez notre guide détaillé sur le transport médical vers les
                hôpitaux et cliniques de la Côte d'Azur.
              </p>
              <Link
                href="/blog/transport-medical-cagnes-sur-mer-hopitaux-cliniques"
                className="mt-auto"
              >
                <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">
                  Lire le guide →
                </Button>
              </Link>
            </Card>
            <Card className="p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-gray-900 pl-3">
                Tous nos services
              </h3>
              <p className="text-gray-700 mb-4 grow">
                Découvrez tous nos services de taxi premium à Cagnes-sur-Mer.
              </p>
              <Link href="/services" className="mt-auto">
                <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">
                  Voir nos services →
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
