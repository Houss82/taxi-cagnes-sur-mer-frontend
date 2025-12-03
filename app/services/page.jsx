// ✅ SERVER COMPONENT - Pas de "use client"
// ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400;

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export const metadata = {
  title: "Services - Taxi Cagnes-sur-Mer",
  description:
    "Services de taxi premium à Cagnes-sur-Mer : transferts aéroport Nice, trajets vers Monaco, Antibes, Cannes. Chauffeur privé disponible 24/7.",
  keywords:
    "services taxi cagnes-sur-mer, transfert aéroport nice, taxi monaco, taxi antibes, chauffeur privé cagnes-sur-mer",
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
      title: "Chauffeur Privé",
      desc: "Location avec chauffeur pour demi-journée ou journée complète",
      image: "/chauffeur-prive.jpg",
      details: [
        "Itinéraires flexibles",
        "Accueil personnalisé",
        "Services adaptés",
      ],
      href: "/services/chauffeur-prive",
    },
    {
      title: "Longue Distance",
      desc: "Trajets vers Monaco, Cannes, Antibes et toute la Côte d'Azur",
      image: "/monaco-cagnes.jpg",
      details: ["Confort assuré", "Trajets réguliers", "WiFi à bord"],
      href: "/services/longue-distance",
    },
    {
      title: "Événements",
      desc: "Service premium pour mariages, séminaires et événements d'entreprise",
      image: "/hotels-cagnes.jpg",
      details: [
        "Véhicules haut de gamme",
        "Service sur mesure",
        "Disponibilité garantie",
      ],
      href: "/services/evenements",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/page-services.jpg"
          alt="Services Taxi Cagnes-sur-Mer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold">Nos Services</h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <Card
                key={i}
                className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <ul className="space-y-2 mb-6 grow">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <ChevronRight className="w-4 h-4 text-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="mt-auto">
                    <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">
                      Voir
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
