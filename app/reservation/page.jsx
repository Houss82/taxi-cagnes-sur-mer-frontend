// ✅ SERVER COMPONENT - Pas de "use client"
// ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400

import Card from "../components/ui/Card"
import ReservationForm from "../components/client/ReservationForm"

export const metadata = {
  title: "Réservation - Taxi Cagnes-sur-Mer",
  description:
    "Réservez votre trajet en taxi à Cagnes-sur-Mer. Confirmation instantanée par email. Transferts aéroport Nice, Monaco, Antibes, Cannes. Service disponible 24/7.",
  keywords:
    "réservation taxi cagnes-sur-mer, réserver taxi nice, booking taxi monaco, réservation chauffeur privé",
}

export default function Reservation() {
  return (
    <main className="min-h-screen bg-white">

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Réserver un Trajet</h1>
            <p className="text-xl text-muted-foreground">
              Confirmation instantanée par email
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <ReservationForm />
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card className="p-6 bg-secondary">
                <h3 className="font-bold text-lg mb-4">Conditions d'Annulation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Gratuit jusqu'à 24h avant</li>
                  <li>• 50% entre 12h-24h</li>
                  <li>• 100% moins de 12h</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">À Savoir</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>Confirmation par email instantanée</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>Chauffeur vous attend 15 min</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>Prix fixes, pas de surprise</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>Paiement à bord</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

