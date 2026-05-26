import { Plane, Clock, Shield, Wifi, Car, CheckCircle, MapPin, Euro, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import {
  ServiceContainer,
  ServiceCtaFooter,
  ServiceFeatureGrid,
  ServiceHero,
  ServiceSection,
  serviceCardClass,
} from "../../components/ServicePageChrome";
import { listSectors } from "../../lib/sectorsData";

export const metadata = {
  title: "Transfert Aéroport Nice | Taxi Cagnes-sur-Mer | Service 24h/24",
  description:
    "Transfert aéroport Nice Côte d'Azur vers Cagnes-sur-Mer. Service premium 24h/24, prix fixe garanti, chauffeur avec pancarte. Réservez votre taxi dès maintenant.",
  keywords:
    "transfert aéroport nice, taxi aéroport nice cagnes-sur-mer, transfert aéroport nice côte d'azur, taxi aéroport, chauffeur aéroport nice",
};

export default function TransfertAeroport() {
  const villesPourAeroport = listSectors();
  const avantages = [
    {
      icon: Clock,
      title: "Disponibilité 24h/24",
      desc: "Service disponible tous les jours, y compris les weekends et jours fériés",
    },
    {
      icon: Shield,
      title: "Prix fixe garanti",
      desc: "Aucune surprise, le tarif est annoncé dès la réservation",
    },
    {
      icon: Plane,
      title: "Suivi de vol inclus",
      desc: "Suivi en temps réel de votre vol, ajustement automatique en cas de retard",
    },
    {
      icon: Car,
      title: "Véhicules Mercedes",
      desc: "Flotte récente de véhicules haut de gamme, climatisés et entretenus",
    },
    {
      icon: Wifi,
      title: "WiFi gratuit",
      desc: "Connexion internet gratuite à bord pour rester connecté",
    },
    {
      icon: CheckCircle,
      title: "Chauffeur professionnel",
      desc: "Chauffeurs expérimentés, courtois et connaissant parfaitement la région",
    },
  ];

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <ServiceHero
        src="/aeroport-nice-cagnes.jpg"
        alt="Transfert aéroport Nice vers Cagnes-sur-Mer"
        eyebrow="Nice Côte d&apos;Azur · T1 &amp; T2"
        title="Transfert aéroport Nice"
        subtitle="Prix fixe, suivi de vol et prise en charge hall des arrivées vers Cagnes-sur-Mer et la Côte d&apos;Azur."
      >
        <Button href="/reservation" size="lg" className="bg-accent text-accent-foreground hover:brightness-105 shadow-xl">
          Réserver
        </Button>
      </ServiceHero>

      <ServiceSection>
        <ServiceContainer narrow>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 order-2 lg:order-none">
              <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl aspect-[4/5] max-h-[420px] relative group">
                <Image
                  src="/aeroport-nice-cagnes.jpg"
                  alt="Terminal et prise en charge aéroport Nice"
                  fill
                  className="object-cover sector-media-hover"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-none space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-950">Un transfert fluide dès l&apos;atterrissage</h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Arrivée à l&apos;<strong>aéroport Nice Côte d&apos;Azur</strong> ? Profitez d&apos;un{" "}
                <strong>transfert confortable et fiable</strong> vers <strong>Cagnes-sur-Mer</strong> avec notre taxi
                premium. Votre chauffeur vous attend dans le hall des arrivées avec une pancarte à votre nom.
              </p>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex gap-2 items-start">
                  <ChevronRight className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden />
                  <span>Pancarte nominative &amp; attente ajustée au vol</span>
                </li>
                <li className="flex gap-2 items-start">
                  <ChevronRight className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden />
                  <span>Berlines &amp; vans Mercedes, bagages volumineux</span>
                </li>
              </ul>
            </div>
          </div>
        </ServiceContainer>
      </ServiceSection>

      <ServiceSection muted bordered>
        <ServiceContainer>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-950 mb-12 md:mb-14">
            Pourquoi choisir notre service de transfert aéroport ?
          </h2>
          <ServiceFeatureGrid>
            {avantages.map((avantage) => {
              const Icon = avantage.icon;
              return (
                <Card key={avantage.title} className={serviceCardClass("p-6 text-center bg-white")}>
                  <Icon className="w-12 h-12 mx-auto mb-4 text-accent" aria-hidden />
                  <h3 className="text-xl font-bold mb-2 text-neutral-950">{avantage.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{avantage.desc}</p>
                </Card>
              );
            })}
          </ServiceFeatureGrid>
        </ServiceContainer>
      </ServiceSection>

      <ServiceSection>
        <ServiceContainer narrow>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-950 mb-12">Informations pratiques</h2>
          <div className="space-y-6">
            <Card className={serviceCardClass("p-6 md:p-8 bg-white")}>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-neutral-950">
                <MapPin className="w-6 h-6 text-accent" aria-hidden />
                Prise en charge
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Votre chauffeur vous attend dans le <strong>hall des arrivées</strong> du Terminal 1 ou Terminal 2 de
                l&apos;aéroport Nice Côte d&apos;Azur, avec une <strong>pancarte à votre nom</strong>.
              </p>
            </Card>
            <Card className={serviceCardClass("p-6 md:p-8 bg-white")}>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-neutral-950">
                <Clock className="w-6 h-6 text-accent" aria-hidden />
                Durée du trajet
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Le trajet entre l&apos;aéroport Nice Côte d&apos;Azur et Cagnes-sur-Mer dure environ{" "}
                <strong>15 à 25 minutes</strong> selon le trafic et votre destination exacte.
              </p>
            </Card>
            <Card className={serviceCardClass("p-6 md:p-8 bg-white")}>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-neutral-950">
                <Euro className="w-6 h-6 text-accent" aria-hidden />
                Tarifs
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Nos tarifs sont <strong>fixes et transparents</strong>, annoncés dès la réservation. Le prix inclut :
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-2">
                <li>Le trajet complet depuis l&apos;aéroport</li>
                <li>Les frais de prise en charge</li>
                <li>Les bagages (jusqu&apos;à 7 passagers et 7 bagages)</li>
                <li>Le suivi de vol</li>
              </ul>
            </Card>
          </div>
        </ServiceContainer>
      </ServiceSection>

      <ServiceSection muted>
        <ServiceContainer narrow>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-950">Transfert aéroport Nice depuis votre commune</h2>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Nos chauffeurs se déplacent couramment depuis les principales villes autour de Cagnes-sur-Mer&nbsp;: choisissez
            votre secteur pour des repères locaux. La{" "}
            <Link href="/zones-desservies" className="text-accent font-semibold underline">
              carte des zones
            </Link>{" "}
            regroupe ces fiches.
          </p>
          <div className="flex flex-wrap gap-3">
            {villesPourAeroport.slice(0, 8).map((z) => (
              <Link
                key={z.path}
                href={z.path}
                className="px-4 py-2 rounded-full bg-white border border-neutral-200 text-neutral-900 text-sm font-medium hover:border-accent/60 shadow-sm transition-colors"
              >
                Chauffeur + aéroport · {z.displayName}
              </Link>
            ))}
          </div>
        </ServiceContainer>
      </ServiceSection>

      <ServiceCtaFooter
        title="Réservez votre transfert aéroport Nice"
        subtitle="Disponibilité 24h/24 et 7j/7 — réservez en ligne, par téléphone ou WhatsApp. Indiquez votre terminal (T1 / T2) et vos horaires de vol : nous vous confirmons sous réserve de disponibilités."
      />
    </main>
  );
}
