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
import Script from "next/script";
import VehicleCarousel from "./components/client/VehicleCarousel";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";

const vehicles = [
  { name: "Mercedes GLB", image: "/taxi-cagnes-glb.png" },

  { name: "Mercedes classe V", image: "/taxi-cagnes-sur-mer-van.png" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen md:h-screen flex items-center justify-center overflow-hidden pt-0 md:pt-20">
        {/* Image mobile - optimisée pour mobile */}
        <Image
          src="/taxi-cagnes-sur-mer-mobile.png"
          alt="Taxi Cagnes-sur-Mer Mercedes pour transferts aéroport Nice"
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
          alt="Taxi Cagnes-sur-Mer Mercedes pour transferts aéroport Nice"
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
          <p className="text-3xl md:text-4xl  mb-6 text-white">
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

      {/* Section SEO - Placé juste après le hero pour optimiser le référencement */}
      <section className="py-12 bg-linear-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-lg border border-gray-200/50">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-12 bg-linear-to-r from-transparent via-accent to-transparent rounded-full"></div>
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <div className="h-1 w-12 bg-linear-to-r from-accent via-transparent to-accent rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">
              Service taxi 7j/7 : aéroport Nice, gares, courses locales et
              longues distances
            </h2>
            <p className="text-lg md:text-xl text-gray-800 text-center leading-relaxed font-medium">
              Notre compagnie de{" "}
              <strong className="font-bold text-accent">
                taxi à Cagnes-sur-Mer
              </strong>{" "}
              vous propose des transferts{" "}
              <strong className="font-bold text-primary">7j/7</strong> avec{" "}
              <strong className="font-bold text-primary">
                réservation 24h/24
              </strong>{" "}
              vers l&apos;aéroport{" "}
              <strong className="font-bold text-primary">
                Nice Côte d&apos;Azur
              </strong>
              , les{" "}
              <strong className="font-bold text-primary">gares SNCF</strong>,
              les hôtels, résidences de vacances et les villes voisines comme{" "}
              <strong className="font-bold text-primary">
                Antibes, Nice, Cannes ou Monaco
              </strong>
              .
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="h-1 w-12 bg-linear-to-r from-transparent via-primary to-transparent rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="h-1 w-12 bg-linear-to-r from-primary via-transparent to-primary rounded-full"></div>
            </div>
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

      {/* SECTION TEXTE SEO: Taxi Cagnes-sur-Mer */}
      <section className="py-24 bg-linear-to-b from-accent/5 via-white to-accent/5 relative overflow-hidden">
        {/* Éléments décoratifs plus visibles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* En-tête centré avec design moderne */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                Transport Premium
              </span>
            </div>
            <div className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Votre Taxi
              </span>
              <br />
              <span className="text-gray-700">à Cagnes-sur-Mer</span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-linear-to-r from-accent to-primary bg-clip-text text-transparent font-extrabold">
                  & ses Alentours
                </span>
                <span className="absolute bottom-2 left-0 right-0 h-4 bg-accent/30 -rotate-1 z-0 rounded-sm"></span>
              </span>
            </div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-1 w-16 bg-linear-to-r from-transparent to-accent rounded-full"></div>
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <div className="h-1 w-24 bg-linear-to-r from-accent via-primary to-accent rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="h-1 w-16 bg-linear-to-r from-primary to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Contenu avec design amélioré */}
          <div className="space-y-10 text-lg leading-relaxed">
            {/* Premier paragraphe avec fond coloré */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <p className="text-gray-800 mb-0 leading-relaxed text-lg">
                À seulement{" "}
                <strong className="font-bold text-accent text-xl">
                  15 kilomètres
                </strong>{" "}
                de l&apos;aéroport Nice Côte d&apos;Azur, Cagnes-sur-Mer est une
                destination idéale pour vos séjours sur la Riviera. Nos{" "}
                <strong className="font-bold text-accent text-xl">
                  taxis à Cagnes-sur-Mer
                </strong>{" "}
                vous accompagnent depuis votre arrivée jusqu&apos;à votre
                hébergement, que ce soit dans le{" "}
                <strong className="font-bold text-primary text-lg">
                  Haut-de-Cagnes
                </strong>
                , au{" "}
                <strong className="font-bold text-primary text-lg">
                  Cros-de-Cagnes
                </strong>{" "}
                ou dans les résidences du bord de mer.
              </p>
            </div>

            {/* Deuxième paragraphe avec bordure accent */}
            <div className="relative pl-6 border-l-4 border-accent bg-linear-to-r from-accent/5 to-transparent py-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed text-lg">
                Spécialisés dans les{" "}
                <strong className="font-bold text-accent text-xl">
                  transferts aéroport
                </strong>
                , notre compagnie de{" "}
                <strong className="font-bold text-accent text-xl">
                  taxis à Cagnes-sur-Mer
                </strong>{" "}
                maîtrise parfaitement les horaires de vol et les contraintes
                logistiques. Nos véhicules Mercedes haut de gamme sont équipés
                pour accueillir vos bagages en toute sécurité, tandis que nos
                chauffeurs expérimentés vous garantissent une arrivée sereine à
                destination, même après un long voyage.
              </p>
            </div>

            {/* Troisième paragraphe avec design premium */}
            <div className="bg-linear-to-r from-accent/10 via-white to-primary/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -ml-16 -mb-16"></div>
              <p className="text-gray-800 mb-0 leading-relaxed text-lg relative z-10">
                Au-delà des transferts aéroport, Les{" "}
                <strong className="font-bold text-accent text-xl">
                  taxis de Cagnes-sur-Mer
                </strong>{" "}
                desservent également les{" "}
                <strong className="font-bold text-primary text-lg">
                  gares SNCF de Cagnes-sur-Mer
                </strong>{" "}
                et{" "}
                <strong className="font-bold text-primary text-lg">
                  Saint-Laurent-du-Var
                </strong>
                . Que vous souhaitiez découvrir le{" "}
                <strong className="font-bold text-primary text-lg">
                  Renoir Museum
                </strong>
                , profiter des plages familiales ou rejoindre rapidement{" "}
                <strong className="font-bold text-primary text-lg">
                  Monaco
                </strong>{" "}
                ou{" "}
                <strong className="font-bold text-primary text-lg">
                  Antibes
                </strong>
                , notre service répond à tous vos besoins de mobilité sur la
                Côte d&apos;Azur.
              </p>
            </div>

            {/* Quatrième paragraphe avec icône visuelle */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-md">
              <p className="text-gray-800 leading-relaxed text-lg">
                La particularité de Cagnes-sur-Mer réside dans sa{" "}
                <strong className="font-bold text-primary text-lg">
                  double identité
                </strong>
                : le village perché historique et la station balnéaire moderne.
                Nos{" "}
                <strong className="font-bold text-accent text-xl">
                  chauffeurs de Cagnes-sur-Mer
                </strong>{" "}
                connaissent parfaitement ces deux visages de la ville et vous
                propose des itinéraires adaptés selon votre destination, en
                évitant les zones de forte circulation estivale et les rues
                étroites du vieux village.
              </p>
            </div>

            {/* Call-to-action avec design premium */}
            <div className="bg-linear-to-r from-accent/10 via-white to-primary/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -ml-16 -mb-16"></div>
              <p className="text-gray-800 mb-0 leading-relaxed text-lg relative z-10">
                Pour{" "}
                <a
                  href="/reservation"
                  className="inline-flex items-center gap-1 text-accent font-bold hover:text-primary transition-all duration-200 relative group text-xl"
                >
                  <span className="relative">
                    réserver votre taxi Cagnes-sur-Mer
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  </span>
                </a>
                , consultez nos{" "}
                <a
                  href="/tarifs"
                  className="inline-flex items-center gap-1 text-accent font-bold hover:text-primary transition-all duration-200 relative group text-xl"
                >
                  <span className="relative">
                    tarifs transparents
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  </span>
                </a>{" "}
                ou contactez-nous directement. Nos{" "}
                <strong className="font-bold text-accent text-xl">
                  taxis Cagnes-sur-Mer
                </strong>{" "}
                sont disponibles{" "}
                <strong className="font-bold text-primary text-lg">
                  24 heures sur 24
                </strong>{" "}
                pour répondre à vos besoins de transport, qu&apos;il
                s&apos;agisse d&apos;un déplacement professionnel, d&apos;une
                sortie culturelle ou d&apos;un transfert vers une autre ville de
                la Riviera.
              </p>
            </div>
          </div>

          {/* Séparateur décoratif amélioré */}
          <div className="mt-16 pt-8">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-20 bg-linear-to-r from-transparent via-accent to-transparent"></div>
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <div className="h-px w-20 bg-linear-to-r from-transparent via-primary to-transparent"></div>
              </div>
              <span className="text-base font-bold text-gray-700 bg-white/80 px-6 py-2 rounded-full border border-gray-200 shadow-sm">
                Service disponible 24h/24 - 7j/7
              </span>
            </div>
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
            src="/taxi-aeroport-nice-cagnes-van.png"
            alt="Taxi Cagnes-sur-Mer pour transfert aéroport Nice"
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
                name: "Olivier B.",
                rating: 5,
                review:
                  "Très courtois, toujours à l'heure, une conversation agréable et discrète. Véhicule toujours très propre intérieur et extérieur, conduite prudente et souple, un professionnel à recommander sans réserve.",
                date: "Mars 2025",
              },
              {
                name: "Elizabeth C.",
                rating: 5,
                review:
                  "Très compétent, est très réactif ! Il a été présent pour plusieurs interventions même en dernière minute. Serviable et très sympa je recommande.",
                date: "Octobre 2024",
              },
              {
                name: "Fanny V.",
                rating: 5,
                review:
                  "Très ponctuel, toujours aimable, super pro je recommande vraiment !",
                date: "Juillet 2024",
              },
            ].map((review, i) => (
              <Card key={i} className="p-8 flex flex-col h-full">
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
                <p className="text-foreground mb-4 italic grow">
                  "{review.review}"
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <p className="font-bold text-sm">{review.name}</p>
                  {review.date && (
                    <p className="text-xs text-muted-foreground">
                      {review.date}
                    </p>
                  )}
                </div>
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

      {/* JSON-LD LocalBusiness pour Taxi Cagnes-sur-Mer */}
      <Script
        id="localbusiness-taxi-cagnes-sur-mer"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Taxi Cagnes-sur-Mer",
            url: "https://taxi-cagnes-sur-mer.fr/",
            telephone: "+33 6 15 29 37 21",
            areaServed: [
              "Cagnes-sur-Mer",
              "Nice",
              "Antibes",
              "Monaco",
              "Cannes",
              "Alpes-Maritimes",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Cagnes-sur-Mer",
              addressRegion: "Provence-Alpes-Côte d'Azur",
              addressCountry: "FR",
            },
            sameAs: [],
          }),
        }}
      />
    </main>
  );
}
