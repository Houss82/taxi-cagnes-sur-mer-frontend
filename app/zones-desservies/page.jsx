export const dynamic = "force-static";
export const revalidate = 86400;

import Script from "next/script";
import Link from "next/link";
import {
  SITE,
  listSectors,
  ZONES_DESSERVIES_PATH,
} from "../lib/sectorsData";
import { ChevronRight, MapPinned } from "lucide-react";

const url = `${SITE}${ZONES_DESSERVIES_PATH}`;

export const metadata = {
  title: "Zones desservies | Taxi Cagnes-sur-Mer ASM",
  description:
    "Taxi au départ ou à destination des Alpes-Maritimes : Villeneuve-Loubet, Saint-Laurent-du-Var, Vence, Pays de Vence, Biot… Aéroport Nice et transport CPAM.",
  alternates: { canonical: url },
  openGraph: {
    title: "Zones desservies – taxis & transferts depuis Cagnes-sur-Mer",
    description:
      "Chauffeur vers l’aéroport Nice ou les grandes communes aux alentours. Hub local pour trouver votre page ville.",
    url,
    locale: "fr_FR",
    siteName: "Taxi Cagnes-sur-Mer ASM",
  },
};

export default function ZonesDesserviesPage() {
  const sectors = listSectors();

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Zones desservies – Taxi Cagnes-sur-Mer ASM",
    description:
      "Pages locales pour transferts aéroport et transport médical CPAM depuis les villes desservies.",
    url,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE + "/" },
        { "@type": "ListItem", position: 2, name: "Zones desservies", item: url },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: sectors.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: SITE + s.path,
        name: `Taxi ${s.displayName}`,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <Script
        id="zones-collection-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <nav
        aria-label="Fil d'Ariane"
        className="pt-28 pb-4 bg-gray-50 border-b"
      >
        <div className="max-w-4xl mx-auto px-6 text-sm flex items-center gap-2 text-gray-600">
          <Link href="/" className="hover:text-accent">
            Accueil
          </Link>
          <ChevronRight className="w-4 h-4" aria-hidden />
          <span className="font-medium text-gray-900">Zones desservies</span>
        </div>
      </nav>

      <section className="py-14 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <MapPinned className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Une base à Cagnes-sur-Mer, tout un secteur desservi
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Chauffeur & transferts depuis votre commune
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Le site associe une <strong>page dédiée</strong> aux principales villes où nous vous prenons en charge pour l’
            <Link href="/services/transfert-aeroport" className="text-accent underline font-medium">
              aéroport Nice
            </Link>
            , la gare ou le{" "}
            <Link
              href="/services/taxi-conventionne-cagnes-sur-mer"
              className="text-accent underline font-medium"
            >
              transport médical CPAM
            </Link>{" "}
            (selon dossier).
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {sectors.map((s) => (
            <article
              key={s.path}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col sm:flex-row"
            >
              <div className="p-8 grow text-left space-y-3">
                <h2 className="text-xl font-bold text-gray-900">
                  <Link href={s.path} className="hover:text-accent transition-colors">
                    Taxi {s.displayName}
                  </Link>
                </h2>
                <p className="text-gray-700 text-[15px] leading-relaxed">
                  {s.hubTeaser}
                </p>
                <Link
                  href={s.path}
                  className="inline-flex items-center gap-1 text-accent font-semibold text-sm hover:underline"
                >
                  Voir la présentation détaillée
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex sm:flex-col justify-center shrink-0 p-6 sm:p-8 bg-gray-50 sm:border-l border-gray-100">
                <Link
                  href={s.path}
                  className="text-sm px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-center whitespace-nowrap"
                >
                  Page {s.displayName}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-14 text-center text-gray-600 text-sm border-t pt-10">
          <p>
            Vous ne voyez pas votre commune ? Essayez encore{" "}
            <Link href="/contact" className="text-accent underline">
              nous contacter
            </Link>{" "}
            : selon créneaux et trajet, nous couvrons d’autres secteurs depuis notre licence à Cagnes-sur-Mer.
          </p>
        </div>
      </section>
    </main>
  );
}
