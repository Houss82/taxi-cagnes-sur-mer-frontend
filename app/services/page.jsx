// ✅ SERVER COMPONENT - Pas de "use client"
export const revalidate = 86400;

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/ui/Button";
import {
  ServiceContainer,
  ServiceCtaFooter,
  ServiceFeatureGrid,
  ServiceHero,
  ServiceSection,
  serviceCardClass,
} from "../components/ServicePageChrome";

export const metadata = {
  title: "Services - Taxi Cagnes-sur-Mer",
  description:
    "Services de taxi premium à Cagnes-sur-Mer : transferts aéroport Nice, trajets vers Monaco, Cannes, Nice centre. Chauffeur privé disponible 24/7.",
  keywords:
    "services taxi cagnes-sur-mer, transfert aéroport nice, taxi monaco, chauffeur privé cagnes-sur-mer",
};

export default function Services() {
  const services = [
    {
      title: "Transfert Aéroport",
      desc: "Service rapide et fiable vers/depuis l'aéroport Nice-Côte d'Azur",
      image: "/aeroport-nice-cagnes.jpg",
      details: ["Prix fixe", "Chauffeur à l'accueil", "24h/24 disponible"],
      href: "/services/transfert-aeroport",
    },
    {
      title: "Transport Médical Conventionné",
      desc: "Taxi conventionné CPAM pour transport médical remboursé par l'Assurance Maladie",
      image: "/transport-medical-cagnes-sur-mer.jpeg",
      details: ["Conventionné CPAM", "Remboursement possible", "Véhicules adaptés"],
      href: "/services/taxi-conventionne-cagnes-sur-mer",
    },
    {
      title: "Chauffeur Privé",
      desc: "Location avec chauffeur pour demi-journée ou journée complète",
      image: "/chauffeur-prive.jpg",
      details: ["Itinéraires flexibles", "Accueil personnalisé", "Services adaptés"],
      href: "/services/chauffeur-prive",
    },
    {
      title: "Longue Distance",
      desc: "Trajets vers Monaco, Cannes, Nice et toute la Côte d'Azur",
      image: "/monaco-cagnes.jpg",
      details: ["Confort assuré", "Trajets réguliers", "WiFi à bord"],
      href: "/services/longue-distance",
    },
    {
      title: "Événements",
      desc: "Service premium pour mariages, séminaires et événements d'entreprise",
      image: "/hotels-cagnes.jpg",
      details: ["Véhicules haut de gamme", "Service sur mesure", "Disponibilité garantie"],
      href: "/services/evenements",
    },
  ];

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <ServiceHero
        src="/page-services.jpg"
        alt="Services Taxi Cagnes-sur-Mer"
        eyebrow="Taxi premium &amp; transport santé"
        title="Nos services sur la Côte d'Azur"
        subtitle="Transferts aéroport Nice, transport médical conventionné, chauffeur privé et longue distance depuis Cagnes-sur-Mer."
      >
        <Button href="/reservation" size="lg" className="bg-accent text-accent-foreground hover:brightness-105 shadow-xl">
          Réserver
        </Button>
        <Button
          href="/contact"
          size="lg"
          className="border-2 border-white/90 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
        >
          Nous écrire
        </Button>
      </ServiceHero>

      <ServiceSection bordered>
        <ServiceContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 mb-4">Une offre claire par usage</h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Cliquez sur une fiche pour découvrir nos engagements, nos véhicules Mercedes et les informations pratiques.
            </p>
          </div>
          <ServiceFeatureGrid columns="md:grid-cols-2" className="gap-8">
            {services.map((service) => (
              <article
                key={service.href}
                className={serviceCardClass("overflow-hidden flex flex-col h-full bg-white group")}
              >
                <div className="relative h-52 shrink-0">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover sector-media-hover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-7 flex flex-col grow">
                  <h3 className="text-xl font-bold text-neutral-950 mb-2">{service.title}</h3>
                  <p className="text-neutral-600 mb-5 grow leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-neutral-700">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0" aria-hidden />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="mt-auto">
                    <Button className="w-full bg-accent text-accent-foreground hover:brightness-105">Voir la fiche</Button>
                  </Link>
                </div>
              </article>
            ))}
          </ServiceFeatureGrid>

          <div className="mt-14 text-center">
            <Link
              href="/zones-desservies"
              className="inline-flex text-accent font-semibold underline underline-offset-4 hover:opacity-90"
            >
              Carte des villes desservies — aéroport Nice &amp; transport médical
            </Link>
          </div>
        </ServiceContainer>
      </ServiceSection>

      <ServiceCtaFooter
        title="Besoin d’un taxi à Cagnes-sur-Mer&nbsp;?"
        subtitle="Réservation en ligne, appel ou WhatsApp — nous vous confirmons les horaires rapidement."
      />
    </main>
  );
}
