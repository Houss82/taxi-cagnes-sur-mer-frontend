// ✅ SERVER COMPONENT - Pas de "use client"
// ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400;

import {
  Building2,
  Car,
  ChevronRight,
  Clock,
  Compass,
  CreditCard,
  Plane,
  Star,
  Train,
  Users,
} from "lucide-react";
import Image from "next/image";
import VehicleCarousel from "./components/client/VehicleCarousel";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";

const vehicles = [
  { name: "Mercedes GLB", image: "/mercedes-glb-luxury-suv.jpg" },

  { name: "Mercedes classe V", image: "/mercedes-vito-luxury-van.jpg" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen md:h-screen flex items-center justify-center overflow-hidden pt-0 md:pt-20">
        {/* Image mobile - optimisée pour mobile */}
        <Image
          src="/taxi-cagnes-sur-mer-mobile.png"
          alt="Cagnes-sur-Mer"
          fill
          className="md:hidden"
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
        {/* Image desktop */}
        <Image
          src="/taxi-cagnes-sur-mer.png"
          alt="Cagnes-sur-Mer"
          fill
          className="hidden md:block object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-3xl px-4 sm:px-6 pt-0 pb-8 md:pt-0 md:py-0 flex flex-col items-center justify-center h-full md:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 md:mb-6 leading-tight text-balance -mt-20 md:mt-0">
            Taxi Cagnes-sur-Mer
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-8 text-white/90 text-balance">
            Transferts Premium sur la Côte d'Azur
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              href="/reservation"
              size="lg"
              className="bg-accent text-accent-foreground hover:opacity-90 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
            >
              Réserver maintenant
            </Button>
            <Button
              href="/tarifs"
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg bg-transparent"
            >
              Consulter les tarifs
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Plane, label: "Aéroport Nice", desc: "Transfert direct" },
              {
                icon: Train,
                label: "Gare de Cagnes-sur-Mer",
                desc: "Trajets rapides",
              },
              {
                icon: Building2,
                label: "Hôtels & Résidences",
                desc: "Service VIP",
              },
              {
                icon: Compass,
                label: "Longue Distance",
                desc: "Monaco, Antibes, Cannes",
              },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <Card
                  key={i}
                  className="p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-8 h-8 mx-auto mb-4 text-accent" />
                  <h3 className="font-bold mb-2">{service.label}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.desc}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pourquoi nous choisir
            </h2>
            <p className="text-lg text-muted-foreground">
              Excellence et fiabilité depuis 2015
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Chauffeurs Professionnels",
                desc: "Expérience et courtoisie garanties",
              },
              {
                icon: Car,
                title: "Véhicules Premium",
                desc: "Mercedes dernière génération",
              },
              {
                icon: Clock,
                title: "Disponibilité 24/7",
                desc: "Toujours à votre service",
              },
              {
                icon: CreditCard,
                title: "Paiement Flexible",
                desc: "CB à bord ou virement",
              },
            ].map((advantage, i) => {
              const Icon = advantage.icon;
              return (
                <div key={i} className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="font-bold mb-2 text-lg">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {advantage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vehicles Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Notre Flotte
            </h2>
            <p className="text-lg text-muted-foreground">
              Véhicules haut de gamme pour votre confort
            </p>
          </div>
          <VehicleCarousel vehicles={vehicles} />
        </div>
      </section>

      {/* Airport Transfer Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transfert Aéroport Nice ↔ Cagnes-sur-Mer
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              À seulement 20 minutes de l'aéroport Nice-Côte d'Azur, nous
              proposons un service de transfert rapide, fiable et confortable
              vers Cagnes-sur-Mer et ses environs.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Prix fixe, pas de surprises",
                "Chauffeur à l'arrivée avec panneau",
                "Pas de supplément pour bagages",
                "Réservation en ligne facile",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              href="/reservation"
              className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
            >
              Réserver un transfert
            </Button>
          </div>
          <Image
            src="/arrivée-glc-2.jpeg"
            alt="Aéroport Nice"
            width={500}
            height={500}
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Avis de nos clients
            </h2>
            <p className="text-lg text-muted-foreground">
              Satisfait ou remboursé
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marie Dupont",
                rating: 5,
                review:
                  "Service impeccable pour notre séjour à Cagnes-sur-Mer. Très professionnel!",
              },
              {
                name: "Jean Martin",
                rating: 5,
                review:
                  "Chauffeur courtois, véhicule propre et à l'heure. Je recommande!",
              },
              {
                name: "Sophie Laurent",
                rating: 5,
                review:
                  "Expérience premium du début à la fin. Excellent rapport qualité-prix.",
              },
            ].map((review, i) => (
              <Card key={i} className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.review}"</p>
                <p className="font-bold text-sm">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt pour votre voyage?
          </h2>
          <p className="text-lg mb-8 text-accent-foreground/90">
            Réservez maintenant et recevez une confirmation instantanée par
            email
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-primary text-primary-foreground hover:opacity-90 px-8 py-6 text-lg"
          >
            Réserver un trajet
          </Button>
        </div>
      </section>
    </main>
  );
}
