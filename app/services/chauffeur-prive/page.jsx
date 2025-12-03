import {
  Briefcase,
  Car,
  Clock,
  MapPin,
  Shield,
  Sparkles,
  Star,
  Sun,
  Target,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export const metadata = {
  title:
    "Chauffeur Privé Cagnes-sur-Mer | Location avec Chauffeur | Taxi Premium",
  description:
    "Service de chauffeur privé à Cagnes-sur-Mer. Location avec chauffeur pour demi-journée ou journée complète. Véhicules Mercedes haut de gamme, itinéraires flexibles.",
  keywords:
    "chauffeur privé cagnes-sur-mer, location avec chauffeur, chauffeur privé nice, vtc cagnes-sur-mer, service chauffeur privé",
};

export default function ChauffeurPrive() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/chauffeur-prive.jpg"
          alt="Chauffeur privé Cagnes-sur-Mer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Chauffeur Privé
          </h1>
          <p className="text-xl md:text-2xl">
            Location avec chauffeur pour vos déplacements sur mesure
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Besoin d'un <strong>chauffeur privé à Cagnes-sur-Mer</strong> pour
              vos déplacements professionnels ou personnels ? Notre service de{" "}
              <strong>location avec chauffeur</strong> vous offre la flexibilité
              et le confort d'un véhicule premium avec un chauffeur dédié à
              votre service.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Les avantages de notre service de chauffeur privé
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Disponibilité flexible",
                desc: "Demi-journée, journée complète ou plusieurs jours selon vos besoins",
              },
              {
                icon: MapPin,
                title: "Itinéraires sur mesure",
                desc: "Vous choisissez vos destinations, nous adaptons l'itinéraire",
              },
              {
                icon: Car,
                title: "Véhicules Mercedes",
                desc: "Flotte de véhicules haut de gamme, confortables et bien entretenus",
              },
              {
                icon: User,
                title: "Chauffeur dédié",
                desc: "Un chauffeur professionnel et courtois à votre service exclusif",
              },
              {
                icon: Star,
                title: "Service premium",
                desc: "Accueil personnalisé, ponctualité garantie, discrétion assurée",
              },
              {
                icon: Shield,
                title: "Sécurité garantie",
                desc: "Chauffeurs expérimentés, véhicules assurés et entretenus régulièrement",
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

      {/* Formules */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nos formules de location
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-accent" />
                Demi-journée
              </h3>
              <p className="text-gray-700 mb-4">
                Parfait pour vos rendez-vous professionnels, visites
                touristiques ou courses dans la région.{" "}
                <strong>4 heures</strong> de service avec votre chauffeur privé.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>4 heures de service</li>
                <li>Itinéraire flexible</li>
                <li>Véhicule Mercedes</li>
                <li>Chauffeur dédié</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sun className="w-6 h-6 text-accent" />
                Journée complète
              </h3>
              <p className="text-gray-700 mb-4">
                Idéal pour vos excursions, visites multiples ou déplacements
                professionnels intensifs. <strong>8 heures</strong> de service
                avec pauses incluses.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>8 heures de service</li>
                <li>Plusieurs destinations</li>
                <li>Pauses incluses</li>
                <li>Service personnalisé</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Utilisations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pour quelles occasions ?
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-accent" />
                Professionnel
              </h3>
              <p className="text-gray-700">
                Déplacements professionnels, rendez-vous clients, visites de
                sites, séminaires d'entreprise. Un service discret et efficace
                pour vos besoins professionnels.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" />
                Tourisme
              </h3>
              <p className="text-gray-700">
                Visites de la Côte d'Azur, découverte de Monaco, Cannes,
                Antibes, Nice. Votre chauffeur connaît les meilleurs endroits et
                peut vous conseiller.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                Événements
              </h3>
              <p className="text-gray-700">
                Mariages, anniversaires, soirées. Arrivez en style avec un
                service de chauffeur privé pour vos événements spéciaux.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Réservez votre chauffeur privé
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Contactez-nous pour discuter de vos besoins et obtenir un devis
            personnalisé.
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
