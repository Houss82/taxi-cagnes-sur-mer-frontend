import Image from "next/image";
import Link from "next/link";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import { MapPin, Clock, Car, Wifi, Shield, Route, Euro, Phone } from "lucide-react";
import {
  ServiceContainer,
  ServiceCtaFooter,
  ServiceFeatureGrid,
  ServiceHero,
  ServiceSection,
  serviceCardClass,
} from "../../components/ServicePageChrome";

export const metadata = {
  title: "Trajets Longue Distance | Taxi Cagnes-sur-Mer | Monaco, Cannes, Nice",
  description:
    "Service de taxi longue distance depuis Cagnes-sur-Mer vers Monaco, Cannes, Nice et toute la Côte d'Azur. Véhicules Mercedes confortables, WiFi gratuit.",
  keywords:
    "taxi longue distance cagnes-sur-mer, taxi monaco, taxi cannes, trajet longue distance côte d'azur",
};

export default function LongueDistance() {
  const destinations = [
    {
      destination: "Monaco",
      distance: "~25 km",
      duree: "25-35 min",
      desc: "Transfert vers la Principauté de Monaco, ses casinos et ses hôtels de luxe",
    },
    {
      destination: "Cannes",
      distance: "~15 km",
      duree: "20-30 min",
      desc: "Croisette, festivals et palais des congrès",
    },
    {
      destination: "Nice",
      distance: "~8 km",
      duree: "15-25 min",
      desc: "Promenade des Anglais, aéroport, gare",
    },
    {
      destination: "Saint-Tropez",
      distance: "~80 km",
      duree: "1h15-1h30",
      desc: "Excursion vers le Golfe de Saint-Tropez",
    },
    {
      destination: "Aéroport Nice",
      distance: "~12 km",
      duree: "15-25 min",
      desc: "Aligné sur notre offre transfert aéroport",
    },
  ];

  const avantages = [
    { icon: Car, title: "Confort optimal", desc: "Mercedes spacieux pour vos longs trajets" },
    { icon: Wifi, title: "WiFi gratuit", desc: "Connexion à bord pendant le trajet" },
    { icon: Shield, title: "Sécurité", desc: "Chauffeurs expérimentés, véhicules entretenus" },
    { icon: Clock, title: "Ponctualité", desc: "Respect des horaires convenus" },
    { icon: MapPin, title: "Connaissance locale", desc: "Itinéraires et trafic maîtrisés" },
    { icon: Route, title: "Itinéraires optimisés", desc: "Adaptation en temps réel" },
  ];

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <ServiceHero
        src="/monaco-cagnes.jpg"
        alt="Trajets longue distance depuis Cagnes-sur-Mer"
        eyebrow="Côte d&apos;Azur · confort Mercedes"
        title="Trajets longue distance"
        subtitle="Monaco, Cannes, Nice, Saint-Tropez et au-delà depuis Cagnes-sur-Mer."
      >
        <Button href="/reservation" size="lg" className="bg-accent text-accent-foreground hover:brightness-105 shadow-xl">
          Obtenir un tarif
        </Button>
      </ServiceHero>

      <ServiceSection>
        <ServiceContainer narrow>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl aspect-[16/11] relative group max-h-[380px] lg:max-h-none">
                <Image
                  src="/monaco-cagnes.jpg"
                  alt="Route côtière vers Monaco"
                  fill
                  className="object-cover sector-media-hover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-950">Explorer la région sans fatigue</h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Besoin d&apos;un <strong>trajet longue distance</strong> depuis <strong>Cagnes-sur-Mer</strong> ?
                Transferts confortables vers <strong>Monaco</strong>, <strong>Cannes</strong>,{" "}
                <strong>Nice</strong> et toute la Côte d&apos;Azur en Mercedes.
              </p>
              <Link
                href="/services/transfert-aeroport"
                className="inline-flex font-semibold text-accent underline underline-offset-4 hover:opacity-90"
              >
                Voir aussi transfert aéroport Nice →
              </Link>
            </div>
          </div>
        </ServiceContainer>
      </ServiceSection>

      <ServiceSection muted bordered>
        <ServiceContainer>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-950 mb-12 md:mb-14">Principales destinations</h2>
          <ServiceFeatureGrid>
            {destinations.map((dest) => (
              <Card key={dest.destination} className={serviceCardClass("p-6 md:p-7 bg-white")}>
                <h3 className="text-2xl font-bold mb-2 text-neutral-950">{dest.destination}</h3>
                <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-neutral-600">
                  <span className="flex items-center gap-1">
                    <Route className="w-4 h-4 shrink-0" aria-hidden />
                    {dest.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 shrink-0" aria-hidden />
                    {dest.duree}
                  </span>
                </div>
                <p className="text-neutral-700 leading-relaxed">{dest.desc}</p>
              </Card>
            ))}
          </ServiceFeatureGrid>
        </ServiceContainer>
      </ServiceSection>

      <ServiceSection>
        <ServiceContainer>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-950 mb-12 md:mb-14">
            Pourquoi notre longue distance&nbsp;?
          </h2>
          <ServiceFeatureGrid>
            {avantages.map((a) => {
              const Icon = a.icon;
              return (
                <Card key={a.title} className={serviceCardClass("p-6 text-center bg-white")}>
                  <Icon className="w-12 h-12 mx-auto mb-4 text-accent" aria-hidden />
                  <h3 className="text-xl font-bold mb-2 text-neutral-950">{a.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{a.desc}</p>
                </Card>
              );
            })}
          </ServiceFeatureGrid>
        </ServiceContainer>
      </ServiceSection>

      <ServiceSection muted>
        <ServiceContainer narrow>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-950 mb-12">Informations pratiques</h2>
          <div className="space-y-6 sector-stagger">
            <Card className={serviceCardClass("p-6 md:p-8 bg-white")}>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-neutral-950">
                <Euro className="w-5 h-5 text-accent" aria-hidden />
                Tarifs
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Tarifs <strong>fixes et transparents</strong> communiqués à la réservation selon destination et véhicule.
              </p>
            </Card>
            <Card className={serviceCardClass("p-6 md:p-8 bg-white")}>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-neutral-950">
                <Car className="w-5 h-5 text-accent" aria-hidden />
                Véhicules
              </h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-2">
                <li>
                  <strong>Mercedes GLB</strong> : jusqu&apos;à 4 passagers
                </li>
                <li>
                  <strong>Mercedes Classe V</strong> : jusqu&apos;à 7 passagers
                </li>
                <li>Climatisation et WiFi à bord</li>
              </ul>
            </Card>
            <Card className={serviceCardClass("p-6 md:p-8 bg-white")}>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-neutral-950">
                <Phone className="w-5 h-5 text-accent" aria-hidden />
                Réservation
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Réservation conseillée à l&apos;avance en haute saison (mai–septembre).
              </p>
            </Card>
          </div>
        </ServiceContainer>
      </ServiceSection>

      <ServiceCtaFooter
        title="Réservez votre trajet longue distance"
        subtitle="24h/24 et 7j/7 — précisez votre départ depuis Cagnes-sur-Mer, la destination et l’horaire souhaités. Itinéraires réguliers vers Monaco, Cannes, Nice et tout le littoral."
      />
    </main>
  );
}
