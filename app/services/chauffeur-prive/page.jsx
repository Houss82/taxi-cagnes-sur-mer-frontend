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

export const metadata = {
  title:
    "Chauffeur Privé Cagnes-sur-Mer | Location avec Chauffeur | Taxi Premium",
  description:
    "Service de chauffeur privé à Cagnes-sur-Mer. Location avec chauffeur pour demi-journée ou journée complète. Véhicules Mercedes haut de gamme, itinéraires flexibles.",
  keywords:
    "chauffeur privé cagnes-sur-mer, location avec chauffeur, chauffeur privé nice, vtc cagnes-sur-mer, service chauffeur privé",
};

export default function ChauffeurPrive() {
  const avantages = [
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
  ];

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <ServiceHero
        src="/chauffeur-prive.jpg"
        alt="Chauffeur privé Cagnes-sur-Mer"
        eyebrow="Mercedes · demi-journée ou journée"
        title="Chauffeur privé à Cagnes-sur-Mer"
        subtitle="Location avec chauffeur pour vos déplacements professionnels, touristiques ou événements sur la Côte d&apos;Azur."
      >
        <Button href="/reservation" size="lg" className="bg-accent text-accent-foreground hover:brightness-105 shadow-xl">
          Demander une disponibilité
        </Button>
      </ServiceHero>

      <ServiceSection>
        <ServiceContainer narrow>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-950">Votre journée, notre volant</h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Besoin d&apos;un <strong>chauffeur privé à Cagnes-sur-Mer</strong> pour vos déplacements professionnels ou
                personnels ? Notre service de <strong>location avec chauffeur</strong> vous offre la flexibilité et le
                confort d&apos;un véhicule premium avec un chauffeur dédié.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl aspect-[5/6] max-h-[440px] relative group">
                <Image
                  src="/chauffeur-prive.jpg"
                  alt="Véhicule avec chauffeur privé"
                  fill
                  className="object-cover sector-media-hover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </ServiceContainer>
      </ServiceSection>

      <ServiceSection muted bordered>
        <ServiceContainer>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-950 mb-12 md:mb-14">
            Les avantages de notre chauffeur privé
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

      <ServiceSection>
        <ServiceContainer narrow>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-950 mb-12">Nos formules de location</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className={serviceCardClass("p-6 md:p-8 bg-white")}>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-neutral-950">
                <Clock className="w-6 h-6 text-accent" aria-hidden />
                Demi-journée
              </h3>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                Idéal pour vos rendez-vous professionnels, visites ou courses dans la région.{" "}
                <strong>4 heures</strong> avec votre chauffeur privé.
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-2">
                <li>Itinéraire flexible</li>
                <li>Véhicule Mercedes</li>
                <li>Chauffeur dédié</li>
              </ul>
            </Card>
            <Card className={serviceCardClass("p-6 md:p-8 bg-white")}>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-neutral-950">
                <Sun className="w-6 h-6 text-accent" aria-hidden />
                Journée complète
              </h3>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                Excursions, multi-destinations ou journée pro chargée. <strong>8 heures</strong> avec pauses incluses.
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-2">
                <li>Plusieurs destinations</li>
                <li>Service personnalisé</li>
                <li>Confort garanti</li>
              </ul>
            </Card>
          </div>
        </ServiceContainer>
      </ServiceSection>

      <ServiceSection muted>
        <ServiceContainer narrow>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-950 mb-12">Pour quelles occasions ?</h2>
          <div className="grid gap-6 md:gap-8 sector-stagger md:grid-cols-1">
            <Card className={serviceCardClass("p-6 md:p-8 bg-white")}>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-neutral-950">
                <Briefcase className="w-5 h-5 text-accent" aria-hidden />
                Professionnel
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Rendez-vous clients, visites de sites, séminaires — service discret et ponctuel.
              </p>
            </Card>
            <Card className={serviceCardClass("p-6 md:p-8 bg-white")}>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-neutral-950">
                <Target className="w-5 h-5 text-accent" aria-hidden />
                Tourisme
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Monaco, Cannes, Nice&nbsp;: itinéraires conseillés par des chauffeurs locaux.
              </p>
            </Card>
            <Card className={serviceCardClass("p-6 md:p-8 bg-white")}>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-neutral-950">
                <Sparkles className="w-5 h-5 text-accent" aria-hidden />
                Événements
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Mariages et soirées&nbsp;: arrivée soignée avec mise à disposition sur mesure.
              </p>
            </Card>
          </div>
        </ServiceContainer>
      </ServiceSection>

      <ServiceCtaFooter
        title="Réservez votre chauffeur privé"
        subtitle="Expliquez votre programme : nous adaptons véhicule, durée et itinéraire. ASM — créneaux et devis sous 24&nbsp;h lorsque disponible."
      />
    </main>
  );
}
