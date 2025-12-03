import Image from "next/image";
import Link from "next/link";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import { Plane, Clock, Shield, Wifi, Car, CheckCircle, MapPin, Euro } from "lucide-react";

export const metadata = {
  title: "Transfert Aéroport Nice | Taxi Cagnes-sur-Mer | Service 24h/24",
  description:
    "Transfert aéroport Nice Côte d'Azur vers Cagnes-sur-Mer. Service premium 24h/24, prix fixe garanti, chauffeur avec pancarte. Réservez votre taxi dès maintenant.",
  keywords:
    "transfert aéroport nice, taxi aéroport nice cagnes-sur-mer, transfert aéroport nice côte d'azur, taxi aéroport, chauffeur aéroport nice",
};

export default function TransfertAeroport() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/aeroport-nice-cagnes.jpg"
          alt="Transfert aéroport Nice vers Cagnes-sur-Mer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Transfert Aéroport Nice
          </h1>
          <p className="text-xl md:text-2xl">
            Service premium vers Cagnes-sur-Mer et la Côte d'Azur
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Arrivée à l'<strong>aéroport Nice Côte d'Azur</strong> ? Profitez
              d'un <strong>transfert confortable et fiable</strong> vers{" "}
              <strong>Cagnes-sur-Mer</strong> avec notre service de taxi
              premium. Votre chauffeur vous attend dans le hall des arrivées
              avec une pancarte à votre nom, prêt à vous conduire en toute
              sérénité.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pourquoi choisir notre service de transfert aéroport ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Informations pratiques
          </h2>
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-accent" />
                Prise en charge
              </h3>
              <p className="text-gray-700 mb-4">
                Votre chauffeur vous attend dans le <strong>hall des arrivées</strong> du Terminal 1 ou Terminal 2 de l'aéroport Nice Côte d'Azur, avec une{" "}
                <strong>pancarte à votre nom</strong>. Aucune attente, pas de
                stress, vous êtes pris en charge dès votre sortie de l'avion.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-accent" />
                Durée du trajet
              </h3>
              <p className="text-gray-700 mb-4">
                Le trajet entre l'aéroport Nice Côte d'Azur et Cagnes-sur-Mer
                dure environ <strong>15 à 25 minutes</strong> selon le trafic
                et votre destination exacte dans Cagnes-sur-Mer.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Euro className="w-6 h-6 text-accent" />
                Tarifs
              </h3>
              <p className="text-gray-700 mb-4">
                Nos tarifs sont <strong>fixes et transparents</strong>, annoncés dès la réservation. Le prix inclut :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Le trajet complet depuis l'aéroport</li>
                <li>Les frais de prise en charge</li>
                <li>Les bagages (jusqu'à 7 passagers et 7 bagages)</li>
                <li>Le suivi de vol</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Réservez votre transfert aéroport dès maintenant
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

