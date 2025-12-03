import { Calendar, Car, Shield, Sparkles, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export const metadata = {
  title: "Service Événements | Taxi Cagnes-sur-Mer | Mariages, Séminaires",
  description:
    "Service de transport premium pour événements à Cagnes-sur-Mer. Mariages, séminaires, événements d'entreprise. Véhicules Mercedes haut de gamme, service sur mesure.",
  keywords:
    "taxi événements cagnes-sur-mer, taxi mariage, transport événements, chauffeur événement, taxi séminaire",
};

export default function Evenements() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/hotels-cagnes.jpg"
          alt="Service événements Cagnes-sur-Mer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Service Événements
          </h1>
          <p className="text-xl md:text-2xl">
            Transport premium pour vos événements spéciaux
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Organisez un <strong>événement à Cagnes-sur-Mer</strong> ou dans
              la région ? Notre service de transport premium vous garantit que
              vos invités arrivent en style et à l'heure. Que ce soit pour un{" "}
              <strong>mariage</strong>, un <strong>séminaire</strong>, un{" "}
              <strong>événement d'entreprise</strong> ou toute autre occasion
              spéciale, nous mettons à votre disposition une flotte de véhicules
              Mercedes haut de gamme et des chauffeurs professionnels.
            </p>
          </div>
        </div>
      </section>

      {/* Types d'événements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Types d'événements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Mariages",
                desc: "Transport des mariés et invités vers la cérémonie, la mairie, l'église et la salle de réception. Service discret et élégant pour votre jour spécial.",
                details: [
                  "Transport des mariés",
                  "Navette pour les invités",
                  "Véhicules décorés sur demande",
                  "Service personnalisé",
                ],
              },
              {
                icon: Users,
                title: "Séminaires & Événements d'entreprise",
                desc: "Transport des participants vers les lieux de séminaires, conférences et événements professionnels. Service ponctuel et professionnel.",
                details: [
                  "Navettes régulières",
                  "Ponctualité garantie",
                  "Service discret",
                  "Facturation simplifiée",
                ],
              },
              {
                icon: Calendar,
                title: "Anniversaires & Célébrations",
                desc: "Faites de votre anniversaire ou célébration un moment mémorable avec un service de transport premium.",
                details: [
                  "Service sur mesure",
                  "Décorations possibles",
                  "Itinéraires flexibles",
                  "Service festif",
                ],
              },
              {
                icon: Star,
                title: "Événements VIP",
                desc: "Service haut de gamme pour vos événements VIP, galas et soirées prestigieuses.",
                details: [
                  "Véhicules premium",
                  "Chauffeurs en tenue",
                  "Service blanc",
                  "Discretion absolue",
                ],
              },
            ].map((event, i) => {
              const Icon = event.icon;
              return (
                <Card key={i} className="p-6">
                  <Icon className="w-12 h-12 mb-4 text-accent" />
                  <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                  <p className="text-gray-700 mb-4">{event.desc}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    {event.details.map((detail, j) => (
                      <li key={j}>{detail}</li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pourquoi choisir notre service événements ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Car,
                title: "Véhicules haut de gamme",
                desc: "Flotte de véhicules Mercedes récents, propres et bien entretenus",
              },
              {
                icon: Shield,
                title: "Fiabilité garantie",
                desc: "Ponctualité, professionnalisme et discrétion pour vos événements",
              },
              {
                icon: Users,
                title: "Capacité adaptée",
                desc: "Véhicules de 4 à 7 places selon le nombre d'invités à transporter",
              },
              {
                icon: Star,
                title: "Service sur mesure",
                desc: "Itinéraires personnalisés, horaires adaptés à votre événement",
              },
              {
                icon: Calendar,
                title: "Disponibilité",
                desc: "Service disponible 24h/24, même pour les événements en soirée",
              },
              {
                icon: Sparkles,
                title: "Décoration possible",
                desc: "Décoration des véhicules sur demande pour mariages et célébrations",
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

      {/* Processus */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Comment ça fonctionne ?
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Contactez-nous</h3>
                  <p className="text-gray-700">
                    Appelez-nous ou remplissez notre formulaire de réservation
                    avec les détails de votre événement (date, nombre de
                    personnes, lieux, horaires).
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Devis personnalisé</h3>
                  <p className="text-gray-700">
                    Nous vous envoyons un devis détaillé adapté à vos besoins et
                    à votre budget.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Confirmation</h3>
                  <p className="text-gray-700">
                    Une fois le devis accepté, nous confirmons tous les détails
                    et organisons le service pour votre événement.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Le jour J</h3>
                  <p className="text-gray-700">
                    Nos chauffeurs arrivent à l'heure, prêts à transporter vos
                    invités en toute sécurité et élégance.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Organisez le transport de votre événement
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Contactez-nous dès maintenant pour discuter de vos besoins et
            obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservation">
              <Button className="bg-primary text-primary-foreground hover:opacity-90 px-8 py-3 text-lg">
                Demander un devis
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
