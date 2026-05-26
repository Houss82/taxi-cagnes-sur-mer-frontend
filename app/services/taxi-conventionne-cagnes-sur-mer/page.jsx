// ✅ SERVER COMPONENT - Pas de "use client"
// ISR: Revalidate toutes les heures pour permettre l'indexation Google
export const dynamic = "force-static";
export const revalidate = 3600; // ISR toutes les heures pour meilleure indexation

import {
  Building2,
  CheckCircle,
  Heart,
  MapPin,
  Phone,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import {
  ServiceCtaFooter,
  ServiceContainer,
  ServiceFeatureGrid,
  ServiceHero,
  ServiceSection,
  serviceCardClass,
} from "../../components/ServicePageChrome";
import { listSectors } from "../../lib/sectorsData";

export const metadata = {
  title:
    "Taxi Conventionné CPAM Cagnes-sur-Mer | Transport Médical Remboursé 24/7",
  description:
    "Taxi conventionné CPAM à Cagnes-sur-Mer pour transport médical remboursé. Service conventionné Assurance Maladie vers hôpitaux Nice, Cannes et cliniques du littoral. Véhicules adaptés, chauffeurs formés, disponible 24/7.",
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
      "Taxi conventionné CPAM à Cagnes-sur-Mer pour transport médical remboursé. Service conventionné Assurance Maladie vers hôpitaux Nice, Cannes et cliniques du littoral.",
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
      "Taxi conventionné CPAM à Cagnes-sur-Mer pour transport médical remboursé. Service conventionné Assurance Maladie vers hôpitaux Nice, Cannes et cliniques du littoral.",
    images: [
      "https://taxi-cagnes-sur-mer.fr/transport-medical-cagnes-sur-mer.jpeg",
    ],
  },
};

export default function TransportMedical() {
  const villesCpam = listSectors();
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
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Script
        id="medical-business-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalBusinessSchema, null, 2),
        }}
      />
      <ServiceHero
        src="/taxi-cagnes-sur-mer-hopital.jpeg"
        alt="Taxi Conventionné CPAM Cagnes-sur-Mer - Transport médical remboursé"
        eyebrow="CPAM · transport médical"
        title="Taxi conventionné CPAM Cagnes-sur-Mer"
        subtitle="Transport médical remboursé par l'Assurance Maladie selon conditions et prescription."
        minHeightClass="min-h-[560px] md:min-h-[76vh]"
      >
        <Button href="/reservation" size="lg" className="bg-accent text-accent-foreground hover:brightness-105 shadow-xl">
          Réserver un transport médical
        </Button>
      </ServiceHero>

      {/* Bloc SEO — découpé en sections visuelles (cartes / zigzag) */}
      <ServiceSection className="!py-14 md:!py-20">
        <ServiceContainer>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-5 lg:sticky lg:top-28">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight">
                Qu'est-ce qu'un taxi conventionné CPAM à Cagnes-sur-Mer ?
              </h2>
              <p className="text-[17px] text-neutral-700 leading-relaxed">
                Un <strong>taxi conventionné CPAM Cagnes-sur-Mer</strong> est un
                service de transport médical agréé par la Caisse Primaire
                d'Assurance Maladie (CPAM). Cette convention garantit que notre
                service respecte les normes de qualité et de sécurité exigées par
                l'Assurance Maladie pour les transports médicaux et les
                déplacements de santé.
              </p>
              <p className="text-[17px] text-neutral-700 leading-relaxed">
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
              <p className="text-[17px] text-neutral-700 leading-relaxed">
                Nos taxis conventionnés CPAM assurent les transports médicaux
                depuis Cagnes-sur-Mer vers les principaux établissements de santé
                de la Côte d'Azur : <strong>CHU Nice</strong> (Hôpital Pasteur,
                Archet, Cimiez), <strong>Hôpital de Cannes</strong> (Simone Veil),{" "}
                <strong>cliniques privées</strong> (Saint-Georges, Parc Impérial à
                Nice, structures du littoral proche par ex. Polyclinique de l&apos;Europe), et tous les{" "}
                <strong>centres spécialisés</strong> (dialyse, chimiothérapie,
                rééducation, imagerie médicale).
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl aspect-[4/5] max-h-[480px] group">
                <Image
                  src="/transport-medical-cagnes-sur-mer.jpeg"
                  alt="Transport médical conventionné CPAM à Cagnes-sur-Mer"
                  fill
                  className="object-cover sector-media-hover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute bottom-5 left-5 right-5 bg-accent text-accent-foreground font-bold text-sm text-center py-3.5 rounded-2xl shadow-xl">
                  Conventionné CPAM · Trajets santé
                </div>
              </div>
            </div>
          </div>
        </ServiceContainer>
      </ServiceSection>

      <ServiceSection muted bordered className="!py-14 md:!py-18">
        <ServiceContainer narrow>
          <div className={serviceCardClass("p-6 md:p-8 bg-white")}>
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-accent" aria-hidden />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-950 mb-2">
                  Parcours CPAM depuis les communes voisines
                </h3>
                <p className="text-neutral-700 text-[15px] leading-relaxed">
                  Le conventionnement CPAM s&apos;applique au{" "}
                  <strong>parcours de soins</strong>, pas uniquement au code postal de départ&nbsp;: précisions locales sur chaque fiche ; liste complète sur{" "}
                  <Link href="/zones-desservies" className="font-semibold text-accent underline">
                    Zones desservies
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {villesCpam.map((z) => (
                <Link
                  key={`cpam-${z.path}`}
                  href={z.path}
                  className="text-sm px-3 py-2 rounded-full bg-neutral-50 border border-neutral-200 hover:border-accent/50 transition-colors text-neutral-800 font-medium"
                >
                  Transport médical – {z.displayName}
                </Link>
              ))}
            </div>
          </div>
        </ServiceContainer>
      </ServiceSection>

      <ServiceSection className="!py-14 md:!py-20">
        <ServiceContainer>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-950 mb-4 max-w-3xl mx-auto">
            Avantages d&apos;un taxi conventionné CPAM
          </h2>
          <p className="text-center text-neutral-600 text-lg mb-12 max-w-2xl mx-auto">
            Des repères clairs pour votre dossier Assurance Maladie et votre tranquillité le jour du trajet.
          </p>
          <ServiceFeatureGrid columns="md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Remboursement possible",
                desc: "Le transport peut être pris en charge par l'Assurance Maladie sous certaines conditions.",
              },
              {
                title: "Normes de qualité",
                desc: "Respect des standards de sécurité et de professionnalisme exigés par la CPAM.",
              },
              {
                title: "Véhicules adaptés",
                desc: "Flotte conforme aux exigences pour personnes à mobilité réduite.",
              },
              {
                title: "Chauffeurs formés",
                desc: "Personnel qualifié pour l'accompagnement médical et les personnes fragiles.",
              },
              {
                title: "Traçabilité",
                desc: "Facturation conforme aux normes CPAM pour faciliter le remboursement.",
              },
              {
                title: "Fiabilité",
                desc: "Service reconnu et contrôlé par les autorités sanitaires.",
              },
            ].map((item) => (
              <Card key={item.title} className={serviceCardClass("p-6 bg-white flex flex-col gap-3 h-full")}>
                <CheckCircle className="w-9 h-9 text-accent shrink-0" aria-hidden />
                <h3 className="text-lg font-bold text-neutral-950">{item.title}</h3>
                <p className="text-[15px] text-neutral-600 leading-relaxed grow">{item.desc}</p>
              </Card>
            ))}
          </ServiceFeatureGrid>
        </ServiceContainer>
      </ServiceSection>

      <ServiceSection muted className="!py-14 md:!py-20">
        <ServiceContainer>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 order-2 lg:order-none">
              <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl relative aspect-[5/6] max-h-[520px] group">
                <Image
                  src="/taxi-cagnes-sur-mer-pasteur2-nice.jpeg"
                  alt="Taxi Conventionné CPAM Cagnes-sur-Mer - Véhicule adapté pour transport médical"
                  fill
                  className="object-cover sector-media-hover"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-none space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 mb-4">
                  Quand utiliser un taxi conventionné CPAM à Cagnes-sur-Mer ?
                </h2>
                <p className="text-[17px] text-neutral-700 leading-relaxed mb-6">
                  Un <strong>taxi conventionné Cagnes-sur-Mer</strong> est particulièrement adapté pour :
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Rendez-vous médicaux",
                    desc: "Consultations, examens spécialisés (IRM, scanner, échographie), suivi médical régulier",
                  },
                  {
                    title: "Transport vers hôpitaux",
                    desc: "CHU Nice, Hôpital Cannes, cliniques privées de la Côte d'Azur",
                  },
                  {
                    title: "Personnes à mobilité réduite",
                    desc: "Accès aux établissements avec fauteuil roulant ou équipements médicaux",
                  },
                  {
                    title: "Trajets réguliers",
                    desc: "Dialyse, chimiothérapie, rééducation, consultations de suivi",
                  },
                  {
                    title: "Urgences médicales non critiques",
                    desc: "Transport rapide vers les services d'urgence lorsque votre situation le permet (hors numéros d'urgence dédiés).",
                  },
                ].map((item) => (
                  <Card key={item.title} className={serviceCardClass("p-5 bg-white flex gap-3 h-full")}>
                    <Heart className="w-6 h-6 text-red-500 shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <h3 className="font-bold text-neutral-950 mb-1">{item.title}</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </ServiceContainer>
      </ServiceSection>

      <ServiceSection className="!py-14 md:!py-20">
        <ServiceContainer narrow>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 mb-4 text-center">
            Comment fonctionne le remboursement par la CPAM ?
          </h2>
          <p className="text-[17px] text-neutral-700 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            Pour bénéficier du remboursement d&apos;un{" "}
            <strong>transport médical en taxi conventionné</strong>, plusieurs conditions doivent être remplies :
          </p>
          <div className="grid sm:grid-cols-2 gap-5 mb-10 sector-stagger">
            {[
              {
                title: "Prescription médicale",
                desc: "Votre médecin doit prescrire le transport médical sur une ordonnance.",
              },
              {
                title: "Justification médicale",
                desc: "Le transport doit être justifié par votre état de santé (mobilité réduite, urgence, équipements médicaux nécessaires).",
              },
              {
                title: "Taxi conventionné",
                desc: "Le service de taxi doit être conventionné CPAM — notre service l'est.",
              },
              {
                title: "Facture détaillée",
                desc: "Nous vous fournissons tous les justificatifs nécessaires pour votre demande de remboursement.",
              },
            ].map((c, i) => (
              <Card key={c.title} className={serviceCardClass("p-6 bg-white border-l-4 border-l-accent")}>
                <span className="text-xs font-bold text-accent uppercase tracking-wider">Étape {i + 1}</span>
                <h3 className="text-lg font-bold text-neutral-950 mt-2 mb-2">{c.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{c.desc}</p>
              </Card>
            ))}
          </div>
          <div className="rounded-2xl border border-amber-400/40 bg-amber-50/80 px-6 py-6 text-neutral-800">
            <p className="text-[17px] leading-relaxed">
              <strong className="text-neutral-950">Important</strong> : Le remboursement dépend de votre situation
              médicale et de votre caisse d&apos;assurance maladie. Contactez votre{" "}
              <strong>CPAM (Caisse Primaire d&apos;Assurance Maladie)</strong> pour connaître les conditions exactes
              de remboursement selon votre cas. Nous pouvons vous fournir tous les justificatifs nécessaires (facture
              détaillée, justificatif de trajet).
            </p>
          </div>
        </ServiceContainer>
      </ServiceSection>

      <ServiceSection muted className="!py-14 md:!py-18">
        <ServiceContainer narrow>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 mb-10 text-center">
            Nos véhicules adaptés pour transport médical
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 sector-stagger">
            <Card className={serviceCardClass("p-6 md:p-8 bg-white")}>
              <h3 className="text-xl font-bold mb-3 text-neutral-950 flex items-center gap-2">
                <Stethoscope className="w-6 h-6 text-accent" aria-hidden />
                Mercedes GLB
              </h3>
              <ul className="space-y-2 text-neutral-700 text-[15px]">
                <li>• Capacité : 1-4 passagers</li>
                <li>• Espace pour équipements médicaux légers</li>
                <li>• Portes larges, sièges réglables</li>
                <li>• Idéal pour consultations et examens</li>
              </ul>
            </Card>
            <Card className={serviceCardClass("p-6 md:p-8 bg-white")}>
              <h3 className="text-xl font-bold mb-3 text-neutral-950 flex items-center gap-2">
                <Stethoscope className="w-6 h-6 text-accent" aria-hidden />
                Mercedes Classe V
              </h3>
              <ul className="space-y-2 text-neutral-700 text-[15px]">
                <li>• Capacité : jusqu'à 7 passagers</li>
                <li>• Espace pour fauteuils roulants</li>
                <li>• Portes coulissantes, hauteur adaptée</li>
                <li>• Idéal pour mobilité réduite</li>
              </ul>
            </Card>
          </div>
        </ServiceContainer>
      </ServiceSection>

      <ServiceSection bordered className="!py-12 md:!py-18">
        <ServiceContainer>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-neutral-950 mb-3 max-w-3xl mx-auto">
            Déposes à Nice et sur le littoral médical (exemples de destinations)
          </h2>
          <p className="text-center text-neutral-600 text-[15px] md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            Transferts CPAM depuis Cagnes-sur-Mer vers les grands centres du littoral : dépose régulière possible au pôle Antoine&nbsp;Lacassagne ainsi qu&apos;aux polycliniques et centres spécialisés à proximité.
          </p>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 sector-stagger">
            <figure className="relative overflow-hidden rounded-3xl border border-neutral-200 shadow-2xl aspect-[16/11] group">
              <Image
                src="/taxi-cagnes-sur-mer-lacassagne-nice.jpeg"
                alt="Taxi conventionné CPAM — trajet santé depuis Cagnes-sur-Mer vers le centre Antoine Lacassagne à Nice"
                fill
                className="object-cover sector-media-hover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-neutral-950/78 text-white text-[13px] sm:text-sm px-4 py-3 backdrop-blur-sm leading-snug">
                <strong className="text-accent">Nice</strong> — centre Antoine&nbsp;Lacassagne (exemple courant depuis Cagnes-sur-Mer)
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-3xl border border-neutral-200 shadow-2xl aspect-[16/11] group">
              <Image
                src="/taxi-cagnes-sur-mer-antibes-centre-medical.jpeg"
                alt="Taxi conventionné CPAM — transport médical vers centres et polycliniques du littoral depuis Cagnes-sur-Mer"
                fill
                className="object-cover sector-media-hover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-neutral-950/78 text-white text-[13px] sm:text-sm px-4 py-3 backdrop-blur-sm leading-snug">
                <strong className="text-accent">Littoral médical</strong> — centres et polycliniques desservis
              </figcaption>
            </figure>
          </div>
        </ServiceContainer>
      </ServiceSection>

      <ServiceSection className="!py-14 md:!py-20">
        <ServiceContainer>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 mb-5">
                Destinations médicales depuis Cagnes-sur-Mer : quartiers et établissements desservis
              </h2>
              <p className="text-[17px] text-neutral-700 leading-relaxed">
                En tant que <strong>taxi conventionné CPAM Cagnes-sur-Mer</strong>, nous desservons tous les quartiers
                de Cagnes-sur-Mer et tous les établissements de santé de la Côte d&apos;Azur. Nos taxis conventionnés
                assurent les transports médicaux depuis <strong>tous les quartiers de Cagnes-sur-Mer</strong> : le{" "}
                <strong>Cros-de-Cagnes</strong> (village de pêcheurs), le <strong>Haut-de-Cagnes</strong> (village perché
                médiéval), le <strong>centre-ville</strong>, les{" "}
                <strong>résidences du bord de mer</strong>, et les{" "}
                <strong>zones résidentielles</strong> vers les hôpitaux et cliniques de la région.
              </p>
            </div>
            <Card className={serviceCardClass("p-6 md:p-8 bg-neutral-50/80")}>
              <h3 className="text-xl font-bold mb-4 text-neutral-950 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-accent" aria-hidden />
                Zones de prise en charge à Cagnes-sur-Mer
              </h3>
              <ul className="space-y-2.5 text-neutral-700 text-[15px] list-disc list-inside">
                <li>
                  <strong>Cros-de-Cagnes</strong> : Village de pêcheurs, plages, résidences du bord de mer
                </li>
                <li>
                  <strong>Haut-de-Cagnes</strong> : Village perché médiéval, château Grimaldi, musée Renoir
                </li>
                <li>
                  <strong>Centre-ville</strong> : Gare SNCF, commerces, hôtels, résidences
                </li>
                <li>
                  <strong>Zones résidentielles</strong> : Toutes les résidences et quartiers de Cagnes-sur-Mer
                </li>
                <li>
                  <strong>Hippodrome de la Côte d&apos;Azur</strong> : Zone hippique et résidentielle
                </li>
              </ul>
            </Card>
          </div>

          <div className="rounded-2xl border border-neutral-200 overflow-hidden shadow-lg mb-12">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-0 min-w-[640px]">
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
          </div>

          <h3 className="text-2xl font-bold text-neutral-950 mb-6">
            Établissements de santé desservis depuis Cagnes-sur-Mer
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 sector-stagger">
            <Card className={serviceCardClass("p-5 bg-white flex gap-3 h-full")}>
              <Building2 className="w-7 h-7 text-accent shrink-0 mt-0.5" aria-hidden />
              <p className="text-sm text-neutral-700 leading-relaxed">
                <strong className="text-neutral-950">CHU de Nice</strong> — Pasteur (urgences adultes, cardio, neuro),
                Archet (maternité, pédiatrie), Cimiez (gériatrie), Saint-Roch (chirurgie, urgences).
              </p>
            </Card>
            <Card className={serviceCardClass("p-5 bg-white flex gap-3 h-full")}>
              <Building2 className="w-7 h-7 text-accent shrink-0 mt-0.5" aria-hidden />
              <p className="text-sm text-neutral-700 leading-relaxed">
                <strong className="text-neutral-950">Hôpital de Cannes</strong> — Simone Veil (urgences, maternité,
                chirurgie, consultations spécialisées).
              </p>
            </Card>
            <Card className={serviceCardClass("p-5 bg-white flex gap-3 h-full")}>
              <Building2 className="w-7 h-7 text-accent shrink-0 mt-0.5" aria-hidden />
              <p className="text-sm text-neutral-700 leading-relaxed">
                <strong className="text-neutral-950">Cliniques Nice &amp; littoral</strong> — Saint-Georges, Parc
                Impérial, Saint-Antoine, Polyclinique de l&apos;Europe.
              </p>
            </Card>
            <Card className={serviceCardClass("p-5 bg-white flex gap-3 h-full")}>
              <Building2 className="w-7 h-7 text-accent shrink-0 mt-0.5" aria-hidden />
              <p className="text-sm text-neutral-700 leading-relaxed">
                <strong className="text-neutral-950">Centres spécialisés</strong> — Dialyse, chimiothérapie,
                rééducation, imagerie (IRM, scanner).
              </p>
            </Card>
            <Card className={serviceCardClass("p-5 bg-white flex gap-3 h-full sm:col-span-2 lg:col-span-1")}>
              <Building2 className="w-7 h-7 text-accent shrink-0 mt-0.5" aria-hidden />
              <p className="text-sm text-neutral-700 leading-relaxed">
                <strong className="text-neutral-950">Cabinet médicaux à Cagnes</strong> — Généralistes et spécialistes
                (Cros-de-Cagnes, Haut-de-Cagnes, centre-ville).
              </p>
            </Card>
          </div>

          <Card className={serviceCardClass("p-6 md:p-8 bg-gradient-to-br from-accent/15 to-accent/5 border-accent/25 mb-12")}>
            <h3 className="text-xl font-bold mb-4 text-neutral-950">Expertise locale Cagnes-sur-Mer</h3>
            <p className="text-neutral-700 mb-4 leading-relaxed text-[15px]">
              Nos chauffeurs connaissent parfaitement <strong>tous les quartiers de Cagnes-sur-Mer</strong>{" "}
              (Cros-de-Cagnes, Haut-de-Cagnes, centre-ville) et les accès aux établissements de santé de la région. Ils
              peuvent vous conseiller les meilleurs itinéraires selon votre destination médicale et votre lieu de départ.
            </p>
            <p className="text-neutral-700 leading-relaxed text-[15px]">
              Pour les trajets réguliers depuis Cagnes-sur-Mer (dialyse, chimiothérapie, consultations de suivi), des{" "}
              <strong>tarifs préférentiels</strong> peuvent être proposés. Nous proposons également des{" "}
              <strong>forfaits mensuels</strong> pour les patients nécessitant des transports médicaux réguliers vers
              Nice ou Cannes.
            </p>
          </Card>
        </ServiceContainer>
      </ServiceSection>

      <ServiceSection muted className="!py-14 md:!py-20">
        <ServiceContainer narrow>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-950 text-center">
            Comment réserver un transport médical conventionné&nbsp;?
          </h2>
          <p className="text-[17px] text-neutral-700 mb-10 text-center max-w-xl mx-auto">
            Pour réserver un <strong>taxi conventionné CPAM</strong> à Cagnes-sur-Mer :
          </p>
          <div className="grid sm:grid-cols-2 gap-5 mb-6 sector-stagger">
            <Card className={serviceCardClass("p-6 bg-white")}>
              <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center mb-3">
                <Phone className="w-5 h-5 text-accent" aria-hidden />
              </div>
              <h3 className="font-bold text-neutral-950 mb-2">Appelez ou réservez</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                <strong>+33 6 63 57 65 34</strong> (24/7) ou{" "}
                <Link href="/reservation" className="text-accent font-semibold underline">
                  formulaire en ligne
                </Link>
                .
              </p>
            </Card>
            <Card className={serviceCardClass("p-6 bg-white")}>
              <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center mb-3 text-accent font-black text-lg" aria-hidden>2</div>
              <h3 className="font-bold text-neutral-950 mb-2">Précisez le trajet santé</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Établissement, créneau, fauteuil roulant ou équipements médicaux nécessaires.
              </p>
            </Card>
            <Card className={serviceCardClass("p-6 bg-white")}>
              <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center mb-3 text-accent font-black text-lg" aria-hidden>3</div>
              <h3 className="font-bold text-neutral-950 mb-2">Confirmation</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">Récapitulatif par SMS ou e-mail selon votre choix.</p>
            </Card>
            <Card className={serviceCardClass("p-6 bg-white")}>
              <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center mb-3 text-accent font-black text-lg" aria-hidden>4</div>
              <h3 className="font-bold text-neutral-950 mb-2">Le jour J</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Chauffeur à l&apos;heure, véhicule adapté à la situation décrite à la réservation.
              </p>
            </Card>
          </div>
        </ServiceContainer>
      </ServiceSection>

      {/* Liens vers autres contenus */}
      <ServiceSection muted className="!py-14">
        <ServiceContainer narrow>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 pl-4">
            En savoir plus sur le transport médical
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 sector-stagger">
            <Card className={serviceCardClass("p-6 flex flex-col bg-white")}>
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
            <Card className={serviceCardClass("p-6 flex flex-col bg-white")}>
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
        </ServiceContainer>
      </ServiceSection>

      <ServiceCtaFooter
        title="Réservez un transport médical conventionné"
        subtitle="ASM est joignable 24h/24 et 7j/7 selon rotations. Taxi conventionné CPAM : dossier et prescription sont déterminants, y compris pour les trajets urgents hors Samu lorsque vos droits le permettent. Base à Cagnes-sur-Mer."
      />
    </main>
  );
}
