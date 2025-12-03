import Image from "next/image";
import Link from "next/link";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import { MapPin, Clock, Car, Wifi, Shield, Route, Euro, Phone } from "lucide-react";

export const metadata = {
  title: "Trajets Longue Distance | Taxi Cagnes-sur-Mer | Monaco, Cannes, Antibes",
  description:
    "Service de taxi longue distance depuis Cagnes-sur-Mer vers Monaco, Cannes, Antibes, Nice et toute la Côte d'Azur. Véhicules Mercedes confortables, WiFi gratuit.",
  keywords:
    "taxi longue distance cagnes-sur-mer, taxi monaco, taxi cannes, taxi antibes, trajet longue distance côte d'azur",
};

export default function LongueDistance() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/monaco-cagnes.jpg"
          alt="Trajets longue distance depuis Cagnes-sur-Mer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Trajets Longue Distance
          </h1>
          <p className="text-xl md:text-2xl">
            Découvrez la Côte d'Azur en toute sérénité
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Besoin d'un <strong>trajet longue distance</strong> depuis{" "}
              <strong>Cagnes-sur-Mer</strong> ? Nous vous proposons des
              transferts confortables vers <strong>Monaco</strong>,{" "}
              <strong>Cannes</strong>, <strong>Antibes</strong>,{" "}
              <strong>Nice</strong> et toutes les destinations de la Côte
              d'Azur. Nos véhicules Mercedes haut de gamme vous garantissent un
              trajet agréable et sécurisé.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nos principales destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
                desc: "Découvrez Cannes, la Croisette et ses festivals internationaux",
              },
              {
                destination: "Antibes",
                distance: "~10 km",
                duree: "15-20 min",
                desc: "Visitez Antibes, son port et la célèbre promenade du Cap d'Antibes",
              },
              {
                destination: "Nice",
                distance: "~8 km",
                duree: "15-25 min",
                desc: "Explorez Nice, sa promenade des Anglais et son Vieux-Nice",
              },
              {
                destination: "Saint-Tropez",
                distance: "~80 km",
                duree: "1h15-1h30",
                desc: "Excursion vers Saint-Tropez, ses plages et son port mythique",
              },
              {
                destination: "Aéroport Nice",
                distance: "~12 km",
                duree: "15-25 min",
                desc: "Transfert vers l'aéroport Nice Côte d'Azur pour vos départs",
              },
            ].map((dest, i) => (
              <Card key={i} className="p-6">
                <h3 className="text-2xl font-bold mb-2">{dest.destination}</h3>
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Route className="w-4 h-4" />
                    {dest.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {dest.duree}
                  </span>
                </div>
                <p className="text-gray-700">{dest.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pourquoi choisir notre service longue distance ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Car,
                title: "Confort optimal",
                desc: "Véhicules Mercedes spacieux et confortables pour vos trajets longue distance",
              },
              {
                icon: Wifi,
                title: "WiFi gratuit",
                desc: "Restez connecté pendant tout votre trajet avec notre connexion WiFi gratuite",
              },
              {
                icon: Shield,
                title: "Sécurité garantie",
                desc: "Chauffeurs expérimentés et véhicules régulièrement entretenus",
              },
              {
                icon: Clock,
                title: "Ponctualité",
                desc: "Respect des horaires, arrivée à l'heure à votre destination",
              },
              {
                icon: MapPin,
                title: "Connaissance du secteur",
                desc: "Chauffeurs locaux connaissant parfaitement les itinéraires et le trafic",
              },
              {
                icon: Route,
                title: "Itinéraires optimisés",
                desc: "Choix du meilleur itinéraire selon le trafic et vos préférences",
              },
            ].map((avantage, i) => {
              const Icon = avantage.icon;
              return (
                <Card key={i} className="p-6 text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-bold mb-2">{avantage.title}</h3>
                  <p className="text-gray-600">{avantage.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Informations pratiques
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Euro className="w-5 h-5 text-accent" />
                Tarifs
              </h3>
              <p className="text-gray-700">
                Nos tarifs sont <strong>fixes et transparents</strong>, annoncés
                dès la réservation. Le prix varie selon la destination et le
                type de véhicule choisi. Contactez-nous pour un devis
                personnalisé.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" />
                Véhicules disponibles
              </h3>
              <p className="text-gray-700 mb-3">
                Nous proposons différents types de véhicules selon vos besoins :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Mercedes GLB</strong> : jusqu'à 4 passagers</li>
                <li><strong>Mercedes Classe V</strong> : jusqu'à 7 passagers</li>
                <li>Tous équipés de climatisation et WiFi</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent" />
                Réservation
              </h3>
              <p className="text-gray-700">
                Réservez votre trajet longue distance en ligne ou par
                téléphone. Nous recommandons de réserver à l'avance, surtout
                pendant la haute saison (mai à septembre).
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Réservez votre trajet longue distance
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Service disponible 24h/24, 7j/7. Réservez en ligne ou par téléphone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservation">
              <Button className="bg-primary text-primary-foreground hover:opacity-90 px-8 py-3 text-lg">
                Réserver en ligne
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900/10 px-8 py-3 text-lg">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

