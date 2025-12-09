// ✅ SERVER COMPONENT - Pas de "use client"
// ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400;

import { Check } from "lucide-react";
import Link from "next/link";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export const metadata = {
  title: "Tarifs - Taxi Cagnes-sur-Mer",
  description:
    "Tarifs transparents pour transferts aéroport Nice, Monaco, Antibes, Cannes. Prix fixes sans surprise. Service premium à des tarifs compétitifs.",
  keywords:
    "tarifs taxi cagnes-sur-mer, prix transfert aéroport nice, tarif taxi monaco, prix taxi antibes",
};

export default function Pricing() {
  const routes = [
    { from: "Aéroport Nice", to: "Cagnes-sur-Mer", priceMin: 35, priceMax: 50 },
    { from: "Cagnes-sur-Mer", to: "Monaco", priceMin: 90, priceMax: 110 },
    { from: "Cagnes-sur-Mer", to: "Antibes", priceMin: 35, priceMax: 50 },
    { from: "Cagnes-sur-Mer", to: "Cannes", priceMin: 60, priceMax: 80 },
    { from: "Cagnes-sur-Mer", to: "Nice", priceMin: 40, priceMax: 50 },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tarifs Transparents
            </h1>
            <p className="text-xl text-muted-foreground">
              Prix fixes, sans surprise. Service de qualité premium à des tarifs
              compétitifs.
            </p>
          </div>

          {/* Pricing Table */}
          <Card className="overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">De</th>
                    <th className="px-6 py-4 text-left font-bold">Vers</th>
                    <th className="px-6 py-4 text-right font-bold">Prix</th>
                  </tr>
                </thead>
                <tbody>
                  {routes.map((route, i) => (
                    <tr
                      key={i}
                      className="border-b border-border last:border-b-0 hover:bg-secondary transition-colors"
                    >
                      <td className="px-6 py-4">{route.from}</td>
                      <td className="px-6 py-4">{route.to}</td>
                      <td className="px-6 py-4 text-right font-bold text-accent">
                        {route.priceMin === route.priceMax
                          ? `${route.priceMin}€`
                          : `${route.priceMin}/${route.priceMax}€`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Chauffeur Privé</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span>Demi-journée (4h): 220€</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span>Journée complète (8h): 400€</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span>Itinéraires flexibles</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span>Chauffeur professionnel</span>
                </li>
              </ul>
              <Link href="/reservation">
                <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">
                  Réserver une journée
                </Button>
              </Link>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Forfait Événement</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span>Mariage: à partir de 450€</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span>Événements locaux: tarif spécial</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span>Transport groupe</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span>Discrétion et service blanc</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">
                  Devis personnalisé
                </Button>
              </Link>
            </Card>
          </div>

          {/* Info */}
          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="font-bold text-lg mb-4">Informations Tarifaires</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Tous les tarifs incluent la TVA</li>
              <li>• Surcharge de 20% entre 20h et 6h</li>
              <li>• Gratuit: bagages, enfant -3 ans</li>
              <li>• Attente (à partir de 15 min): 0,35€/min</li>
              <li>• Réduction groupe à partir de 5 personnes</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
