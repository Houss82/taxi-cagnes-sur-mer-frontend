import { Calendar, Car, Shield, Sparkles, Star, Users } from "lucide-react";
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
  title: "Service Événements | Taxi Cagnes-sur-Mer | Mariages, Séminaires",
  description:
    "Service de transport premium pour événements à Cagnes-sur-Mer. Mariages, séminaires, événements d'entreprise. Véhicules Mercedes haut de gamme, service sur mesure.",
  keywords:
    "taxi événements cagnes-sur-mer, taxi mariage, transport événements, chauffeur événement, taxi séminaire",
};

export default function Evenements() {
  const types = [
    {
      icon: Sparkles,
      title: "Mariages",
      desc: "Transport des mariés et invités : mairie, cérémonie, réception.",
      details: ["Transport des mariés", "Navettes invités", "Décoration sur demande", "Timing millimétré"],
    },
    {
      icon: Users,
      title: "Séminaires & entreprise",
      desc: "Navettes ponctuelles pour conférences et événements pro.",
      details: ["Navettes régulières", "Facturation claire", "Discrétion", "Adaptation aux plannings"],
    },
    {
      icon: Calendar,
      title: "Anniversaires & célébrations",
      desc: "Mise à disposition festive et flexible.",
      details: ["Sur mesure", "Itinéraires libres", "Plusieurs véhicules possibles"],
    },
    {
      icon: Star,
      title: "Événements VIP",
      desc: "Service haut de gamme pour galas et soirées prestige.",
      details: ["Véhicules premium", "Chauffeurs expérimentés", "Réactivité"],
    },
  ];

  const avantages = [
    { icon: Car, title: "Véhicules haut de gamme", desc: "Mercedes récents, propres, climatisés" },
    { icon: Shield, title: "Fiabilité", desc: "Ponctualité et professionnalisme" },
    { icon: Users, title: "Capacité adaptée", desc: "4 à 7 places selon les besoins" },
    { icon: Star, title: "Sur mesure", desc: "Itinéraires et horaires calés sur votre événement" },
    { icon: Calendar, title: "Disponibilité", desc: "Jour, soirée et week-end" },
    { icon: Sparkles, title: "Décoration", desc: "Possibilité de personnaliser les véhicules" },
  ];

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <ServiceHero
        src="/hotels-cagnes.jpg"
        alt="Service événements Cagnes-sur-Mer"
        eyebrow="Mariage · séminaire · gala"
        title="Transport pour vos événements"
        subtitle="Mercedes, chauffeurs expérimentés et organisation sérieuse pour vos invités sur la Côte d&apos;Azur."
      >
        <Button href="/reservation" size="lg" className="bg-accent text-accent-foreground hover:brightness-105 shadow-xl">
          Demander un devis
        </Button>
      </ServiceHero>

      <ServiceSection>
        <ServiceContainer narrow>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 order-2 lg:order-none">
              <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl aspect-[4/5] max-h-[420px] relative group">
                <Image
                  src="/hotels-cagnes.jpg"
                  alt="Événement et transfert VIP"
                  fill
                  className="object-cover sector-media-hover"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-none space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-950">Vos invités, notre cadence</h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Mariages, <strong>séminaires</strong>, <strong>soirées d&apos;entreprise</strong> ou événements VIP&nbsp;:
                nous assurons transferts ponctuels et navettes avec une flotte Mercedes et des chauffeurs habitués aux
                contraintes de timing.
              </p>
            </div>
          </div>
        </ServiceContainer>
      </ServiceSection>

      <ServiceSection muted bordered>
        <ServiceContainer>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-950 mb-12 md:mb-14">Types d&apos;événements</h2>
          <div className="grid md:grid-cols-2 gap-8 sector-stagger">
            {types.map((event) => {
              const Icon = event.icon;
              return (
                <Card key={event.title} className={serviceCardClass("p-6 md:p-8 bg-white flex flex-col h-full")}>
                  <Icon className="w-12 h-12 mb-4 text-accent" aria-hidden />
                  <h3 className="text-2xl font-bold mb-3 text-neutral-950">{event.title}</h3>
                  <p className="text-neutral-700 mb-4 grow leading-relaxed">{event.desc}</p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-2">
                    {event.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </ServiceContainer>
      </ServiceSection>

      <ServiceSection>
        <ServiceContainer>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-950 mb-12 md:mb-14">
            Pourquoi notre service événements&nbsp;?
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-950 mb-12">Comment ça fonctionne&nbsp;?</h2>
          <div className="space-y-6">
            {[
              {
                n: "1",
                t: "Contact",
                d: "Date, nombre de convives, lieux multiples, horaires serrés : envoyez vos contraintes.",
              },
              { n: "2", t: "Devis", d: "Nous adaptons véhicules, créneaux et budget avec une proposition claire." },
              { n: "3", t: "Validation", d: "Confirmation écrite des horaires et points de prise en charge." },
              { n: "4", t: "Jour J", d: "Chauffeurs sur place aux heures prévues, coordination possible avec votre planner." },
            ].map((step) => (
              <Card key={step.n} className={serviceCardClass("p-6 md:p-8 bg-white")}>
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-extrabold shrink-0"
                    aria-hidden
                  >
                    {step.n}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-neutral-950">{step.t}</h3>
                    <p className="text-neutral-700 leading-relaxed">{step.d}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ServiceContainer>
      </ServiceSection>

      <ServiceCtaFooter
        title="Organisez le transport de votre événement"
        subtitle="Devis mariages, séminaires ou navettes événements — dossier clair, réponses rapides. ASM, équipe locale à Cagnes-sur-Mer."
      />
    </main>
  );
}
