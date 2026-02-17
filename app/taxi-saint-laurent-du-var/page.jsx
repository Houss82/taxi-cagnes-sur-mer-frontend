// ✅ SERVER COMPONENT - Pas de "use client"
// ISR: Revalidate toutes les heures pour permettre l'indexation Google
export const dynamic = "force-static";
export const revalidate = 3600;

import { CheckCircle, MapPin, Plane, Train } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export const metadata = {
  title:
    "Taxi Saint-Laurent-du-Var | Réservation 24h/24 | Aéroport Nice & Gares",
  description:
    "Taxi à Saint-Laurent-du-Var disponible 24h/24 pour transferts aéroport Nice, gares SNCF, transport médical conventionné CPAM. Service premium avec véhicules Mercedes, chauffeurs professionnels.",
  keywords:
    "taxi saint-laurent-du-var, taxi saint laurent du var, transfert aéroport nice saint-laurent-du-var, taxi gare saint-laurent-du-var, taxi conventionné saint-laurent-du-var, transport médical saint-laurent-du-var",
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
    canonical: "https://taxi-cagnes-sur-mer.fr/taxi-saint-laurent-du-var",
  },
  openGraph: {
    title:
      "Taxi Saint-Laurent-du-Var | Réservation 24h/24 | Aéroport Nice & Gares",
    description:
      "Taxi à Saint-Laurent-du-Var disponible 24h/24 pour transferts aéroport Nice, gares SNCF, transport médical conventionné CPAM.",
    url: "https://taxi-cagnes-sur-mer.fr/taxi-saint-laurent-du-var",
    type: "website",
    siteName: "Taxi Cagnes-sur-Mer",
    images: [
      {
        url: "https://taxi-cagnes-sur-mer.fr/taxi-cagnes-sur-mer-ville.jpeg",
        width: 1200,
        height: 630,
        alt: "Taxi Saint-Laurent-du-Var",
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Saint-Laurent-du-Var | Réservation 24h/24",
    description:
      "Taxi à Saint-Laurent-du-Var disponible 24h/24 pour transferts aéroport Nice, gares SNCF, transport médical conventionné CPAM.",
    images: ["https://taxi-cagnes-sur-mer.fr/taxi-cagnes-sur-mer-ville.jpeg"],
  },
};

export default function TaxiSaintLaurentDuVar() {
  const taxiServiceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": "https://taxi-cagnes-sur-mer.fr/taxi-saint-laurent-du-var",
    name: "Taxi Saint-Laurent-du-Var",
    description:
      "Service de taxi à Saint-Laurent-du-Var disponible 24h/24 pour transferts aéroport Nice, gares SNCF, transport médical conventionné CPAM",
    url: "https://taxi-cagnes-sur-mer.fr/taxi-saint-laurent-du-var",
    telephone: "+33663576534",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saint-Laurent-du-Var",
      addressRegion: "Alpes-Maritimes",
      postalCode: "06700",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "43.6700",
      longitude: "7.1900",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Saint-Laurent-du-Var",
      },
      {
        "@type": "City",
        name: "Cagnes-sur-Mer",
      },
      {
        "@type": "City",
        name: "Nice",
      },
    ],
    serviceType: "Service de taxi",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de taxi Saint-Laurent-du-Var",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Transfert aéroport Nice",
            description:
              "Taxi depuis Saint-Laurent-du-Var vers l'aéroport Nice Côte d'Azur",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Transport vers gares SNCF",
            description: "Taxi depuis Saint-Laurent-du-Var vers les gares SNCF",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Transport médical conventionné CPAM",
            description: "Taxi conventionné CPAM depuis Saint-Laurent-du-Var",
          },
        },
      ],
    },
    priceRange: "€€",
    openingHours: "Mo-Su 00:00-23:59",
    paymentAccepted: "Cash, Credit Card",
    currenciesAccepted: "EUR",
  };

  return (
    <main className="min-h-screen bg-white">
      <Script
        id="taxi-service-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(taxiServiceSchema, null, 2),
        }}
      />
      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/taxi-saint-laurent-du-var.png"
          alt="Taxi Saint-Laurent-du-Var - Service de transport premium 24h/24"
          fill
          className="object-cover"
          priority
          style={{
            objectPosition: "center 80%",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Taxi Saint-Laurent-du-Var
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Réservation 24h/24 – Aéroport Nice, Gares & Conventionné CPAM
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90"
          >
            Réserver maintenant
          </Button>
        </div>
      </section>

      {/* Section SEO - Contenu principal */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-lg text-gray-700 mb-6 leading-relaxed max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 pl-4">
              Taxi à Saint-Laurent-du-Var : Service Premium Disponible 24h/24
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Vous recherchez un <strong>taxi à Saint-Laurent-du-Var</strong>{" "}
              pour vos déplacements vers l'aéroport Nice Côte d'Azur, les gares
              SNCF ou vos rendez-vous médicaux ? Notre service de{" "}
              <strong>taxi Saint-Laurent-du-Var</strong> est disponible 24h/24
              et 7j/7 pour répondre à tous vos besoins de transport. Située
              entre Nice et Cagnes-sur-Mer, Saint-Laurent-du-Var bénéficie d'un
              emplacement stratégique à proximité immédiate de l'aéroport Nice
              Côte d'Azur et des principaux axes de transport de la Côte d'Azur.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Que vous habitiez dans le{" "}
              <strong>centre-ville de Saint-Laurent-du-Var</strong>, près de la{" "}
              <strong>Promenade des Flots Bleus</strong>, dans les{" "}
              <strong>quartiers résidentiels</strong> comme{" "}
              <strong>Var-Matin</strong> ou près de la{" "}
              <strong>plage de Saint-Laurent-du-Var</strong>, nos chauffeurs
              connaissent parfaitement tous les quartiers de la commune et vous
              garantissent un service ponctuel et professionnel.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900 pl-3">
                🚗 Pourquoi choisir notre taxi à Saint-Laurent-du-Var ?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Proximité aéroport</strong> : Saint-Laurent-du-Var
                    est à seulement 5 km de l'aéroport Nice, trajet ultra-rapide
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Disponibilité 24h/24</strong> : Service disponible
                    tous les jours, y compris les weekends et jours fériés
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Véhicules Mercedes</strong> : Flotte récente de
                    véhicules haut de gamme, climatisés et entretenus
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Chauffeurs professionnels</strong> : Chauffeurs
                    expérimentés, courtois et connaissant parfaitement
                    Saint-Laurent-du-Var et la région
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Prix transparents</strong> : Tarifs clairs et sans
                    surprise, confirmés dès la réservation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Conventionné CPAM</strong> : Transport médical
                    remboursé par l'Assurance Maladie sous certaines conditions
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 mt-12 pl-4">
              Taxi Saint-Laurent-du-Var vers l'aéroport Nice Côte d'Azur
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Vous devez vous rendre à l'
              <strong>aéroport Nice Côte d'Azur</strong> depuis
              Saint-Laurent-du-Var ? Notre service de{" "}
              <strong>taxi Saint-Laurent-du-Var vers l'aéroport Nice</strong>{" "}
              vous garantit un transfert confortable et ponctuel. Située à
              seulement <strong>5 kilomètres</strong> de l'aéroport,
              Saint-Laurent-du-Var est la commune la plus proche de l'aéroport
              Nice, ce qui en fait un point de départ idéal pour vos transferts
              aéroport.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Durée du trajet</strong> : Le trajet depuis
              Saint-Laurent-du-Var vers l'aéroport Nice dure généralement{" "}
              <strong>10 à 15 minutes</strong> selon le trafic et votre quartier
              de départ à Saint-Laurent-du-Var. C'est l'un des trajets les plus
              rapides vers l'aéroport depuis la Côte d'Azur.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Service inclus</strong> : Votre chauffeur vous attend à
              l'heure convenue à votre adresse à Saint-Laurent-du-Var, vous aide
              avec vos bagages et vous conduit directement à l'aéroport. Nous
              suivons votre vol en temps réel et ajustons l'heure de prise en
              charge en cas de retard. Pour les vols tôt le matin ou tard le
              soir, nous vous garantissons une ponctualité optimale.
            </p>

            <div className="mb-8">
              <Card className="p-6 text-center">
                <Plane className="w-12 h-12 mb-4 text-accent mx-auto" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Transfert aéroport Nice Côte d'Azur
                </h3>
                <p className="text-gray-700 mb-4">
                  Service aller-retour depuis Saint-Laurent-du-Var vers l'aéroport Nice Côte d'Azur. Suivi de vol inclus, chauffeur avec pancarte à votre nom dans le hall des arrivées pour le retour.
                </p>
                <p className="text-gray-700 font-semibold">
                  Tarif : 2,6€/km le jour, 3,3€/km la nuit
                </p>
              </Card>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 mt-12 pl-4">
              Taxi Gare SNCF depuis Saint-Laurent-du-Var
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Vous devez vous rendre à la <strong>gare SNCF</strong> depuis
              Saint-Laurent-du-Var ? Notre service de{" "}
              <strong>taxi gare Saint-Laurent-du-Var</strong> vous garantit un
              transport rapide et fiable vers les principales gares de la région
              : <strong>gare SNCF de Nice-Ville</strong> (la plus proche, à 8
              km), <strong>gare SNCF de Cagnes-sur-Mer</strong>,{" "}
              <strong>gare SNCF d'Antibes</strong> ou{" "}
              <strong>gare SNCF de Cannes</strong>.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Gare la plus proche</strong> : La{" "}
              <strong>gare SNCF de Nice-Ville</strong> est située à{" "}
              <strong>8 kilomètres</strong> de Saint-Laurent-du-Var, soit
              environ <strong>15 minutes</strong> en taxi. Cette gare principale
              dessert les TGV vers Paris, les trains régionaux TER vers Cannes,
              Monaco et toute la Côte d'Azur.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Service adapté</strong> : Que vous ayez des bagages
              volumineux, que vous voyagez avec des enfants ou que vous ayez
              besoin d'aide pour monter dans le train, nos chauffeurs vous
              accompagnent jusqu'au quai si nécessaire.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 pl-3">
                🚂 Gares SNCF accessibles depuis Saint-Laurent-du-Var
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Train className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Gare SNCF Nice-Ville</strong> : 8 km, 15 minutes –
                    Gare principale, TGV vers Paris, trains régionaux
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Train className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Gare SNCF Cagnes-sur-Mer</strong> : 5 km, 10 minutes
                    – Trains TER vers Nice, Cannes, Monaco
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Train className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Gare SNCF Antibes</strong> : 12 km, 20 minutes –
                    Trains TER vers Nice, Cannes, Monaco
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Train className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Gare SNCF Cannes</strong> : 22 km, 30-35 minutes –
                    Trains TER et TGV vers Paris
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 mt-12 pl-4">
              Taxi Conventionné CPAM à Saint-Laurent-du-Var
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Vous avez besoin d'un <strong>transport médical remboursé</strong>{" "}
              depuis Saint-Laurent-du-Var ? Notre service de{" "}
              <strong>taxi conventionné CPAM Saint-Laurent-du-Var</strong> vous
              permet de bénéficier d'un transport médical professionnel,
              potentiellement remboursé par l'Assurance Maladie sous certaines
              conditions.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Destinations médicales</strong> : Nous assurons les
              transports depuis Saint-Laurent-du-Var vers les principaux
              établissements de santé de la Côte d'Azur :{" "}
              <strong>CHU Nice</strong> (Hôpital Pasteur, Archet, Cimiez),{" "}
              <strong>Hôpital de Cannes</strong>,{" "}
              <strong>cliniques privées</strong> (Saint-Georges, Parc Impérial à
              Nice), <strong>centres de dialyse</strong>,{" "}
              <strong>centres de chimiothérapie</strong> et{" "}
              <strong>centres de rééducation</strong>.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Conditions de remboursement</strong> : La prise en charge
              dépend de votre situation et d'une prescription médicale.
              Renseignez-vous auprès de votre CPAM ou de votre médecin pour
              vérifier vos droits. Nous vous fournissons tous les justificatifs
              nécessaires (facture détaillée, justificatif de trajet).
            </p>

            <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900 pl-3">
                🏥 Transport médical depuis Saint-Laurent-du-Var
              </h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Consultations médicales et examens spécialisés</li>
                <li>Transport vers hôpitaux et cliniques</li>
                <li>Personnes à mobilité réduite</li>
                <li>
                  Trajets réguliers (dialyse, chimiothérapie, rééducation)
                </li>
                <li>Urgences médicales non critiques</li>
              </ul>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 mt-12 pl-4">
              Taxi Saint-Laurent-du-Var Toutes Distances
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Au-delà des transferts aéroport et gares, notre{" "}
              <strong>taxi Saint-Laurent-du-Var</strong> assure tous vos
              déplacements dans la région : trajets vers <strong>Nice</strong>,{" "}
              <strong>Cannes</strong>, <strong>Antibes</strong>,{" "}
              <strong>Monaco</strong>, <strong>Grasse</strong> ou toute autre
              destination de la Côte d'Azur.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>
                Destinations populaires depuis Saint-Laurent-du-Var
              </strong>{" "}
              :
            </p>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Nice</strong> : 8 km, 15 minutes – Centre-ville,
                  Promenade des Anglais, Vieux-Nice
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Cannes</strong> : 22 km, 30-35 minutes – Palais des
                  Festivals, Croisette, hôtels de luxe
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Antibes</strong> : 12 km, 20 minutes – Port Vauban,
                  Juan-les-Pins, plages
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Monaco</strong> : 28 km, 40-45 minutes – Casino,
                  Palais Princier, événements
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Cagnes-sur-Mer</strong> : 5 km, 10 minutes –
                  Centre-ville, Cros-de-Cagnes, Haut-de-Cagnes
                </span>
              </li>
            </ul>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 mt-12 pl-4">
              Comment réserver votre taxi à Saint-Laurent-du-Var ?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Réserver votre <strong>taxi Saint-Laurent-du-Var</strong> est
              simple et rapide :
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
                <strong>Indiquez</strong> : votre adresse à
                Saint-Laurent-du-Var, destination, heure souhaitée, nombre de
                passagers
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

            <div className="bg-linear-to-r from-accent to-accent/90 p-8 rounded-lg mb-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-accent-foreground">
                Service disponible 24h/24 et 7j/7
              </h3>
              <p className="text-lg mb-6 text-accent-foreground">
                Notre service de{" "}
                <strong className="text-accent-foreground">
                  taxi Saint-Laurent-du-Var
                </strong>{" "}
                est disponible en permanence pour répondre à tous vos besoins de
                transport.
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
        </div>
      </section>

      {/* Liens vers autres contenus */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 pl-4">
            En savoir plus sur nos services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Taxi Conventionné CPAM
              </h3>
              <p className="text-gray-700 mb-4 grow">
                Découvrez notre service de transport médical conventionné CPAM
                pour transport remboursé.
              </p>
              <Link
                href="/services/taxi-conventionne-cagnes-sur-mer"
                className="mt-auto"
              >
                <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">
                  En savoir plus →
                </Button>
              </Link>
            </Card>
            <Card className="p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Tous nos services
              </h3>
              <p className="text-gray-700 mb-4 grow">
                Découvrez tous nos services de taxi premium à Cagnes-sur-Mer et
                la Côte d'Azur.
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
