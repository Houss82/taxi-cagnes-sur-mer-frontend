// ✅ SERVER COMPONENT — animations CSS pures (globals.css), aucun "use client"

import {
  Award,
  BriefcaseBusiness,
  Car,
  CheckCircle,
  ChevronRight,
  Clock,
  HeartHandshake,
  Leaf,
  MapPin,
  Phone,
  Plane,
  Shield,
  Train,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  ZONES_DESSERVIES_PATH,
  getSector,
  resolveNeighborLinks,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE,
} from "../lib/sectorsData";
import Button from "./ui/Button";

const IMG_AIRPORT = "/aeroport-nice-cagnes.jpg";
const IMG_MEDICAL = "/transport-medical-cagnes-sur-mer.jpeg";
const IMG_FLEET = "/face-avant-mercedes-glb-2.jpeg";

function RichText({ text }) {
  if (!text) return null;
  const chunks = text.split(/(\*\*[^*]+\*\*)/).filter(Boolean);
  return chunks.map((chunk, i) => {
    if (chunk.startsWith("**") && chunk.endsWith("**")) {
      return <strong key={i}>{chunk.replace(/\*\*/g, "")}</strong>;
    }
    return chunk;
  });
}

export default function SectorLandingTemplate({ sectorId }) {
  const s = getSector(sectorId);
  const canonical = `${SITE}${s.path}`;
  const neighbors = resolveNeighborLinks(s.neighborIds);
  const waDigits = PHONE_TEL.replace(/^\+/, "");

  const breadcrumbLd = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: `${SITE}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Zones desservies",
        item: `${SITE}${ZONES_DESSERVIES_PATH}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Taxi ${s.displayName}`,
        item: canonical,
      },
    ],
  };

  const localBusinessLd = {
    "@type": "LocalBusiness",
    "@id": `${canonical}#local`,
    name: `Taxi Cagnes-sur-Mer ASM – ${s.displayName}`,
    image: `${SITE}${s.heroImage}`,
    url: canonical,
    telephone: PHONE_TEL,
    email: "taxicagnessurmer2025@gmail.com",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: s.displayName,
      postalCode: s.postalCode,
      addressRegion: "Alpes-Maritimes",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: s.lat,
      longitude: s.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [{ "@type": "City", name: s.displayName }],
    parentOrganization: {
      "@type": "Organization",
      name: "Taxi Cagnes-sur-Mer ASM",
    },
  };

  const taxiLd = {
    "@type": "TaxiService",
    "@id": `${canonical}#taxi`,
    name: `Taxi à ${s.displayName}`,
    url: canonical,
    telephone: PHONE_TEL,
    provider: { "@type": "LocalBusiness", "@id": `${canonical}#local` },
    areaServed: [{ "@type": "City", name: s.displayName }],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      itemOffered: [
        {
          "@type": "Service",
          name: "Transfert aéroport Nice Côte d'Azur",
          description: `Prise en charge à ${s.displayName} pour l’aéroport de Nice.`,
        },
        {
          "@type": "Service",
          name: "Transport médical conventionné",
          description: `Transport sous prescription médicale – selon dossier CPAM.`,
        },
      ],
    },
  };

  const faqLd = {
    "@type": "FAQPage",
    "@id": `${canonical}#faq`,
    mainEntity: s.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.replace(/\*\*/g, ""),
      },
    })),
  };

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbLd, localBusinessLd, taxiLd, faqLd],
  };

  const h1Title = `Taxi ${s.displayName} – Transfert Aéroport Nice & Taxi Conventionné CPAM`;

  const zonesGrid = [...neighbors, { href: ZONES_DESSERVIES_PATH, label: "Toutes les zones" }];

  const whyBlocks = [
    {
      Icon: Shield,
      title: "Tarifs lisibles",
      text: `Courses réglementées depuis ${s.displayName} avec devis lorsque vous le demandez.`,
    },
    {
      Icon: Clock,
      title: "Réactivité 24/7",
      text: "Prise en charge nuit ou week-end lorsque nos créneaux le permettent.",
    },
    {
      Icon: Car,
      title: "Berlines & vans premium",
      text: "Flotte Mercedes confort climatisée, bagages volumineux sur demande.",
    },
    {
      Icon: Award,
      title: "Une base à Cagnes-sur-Mer",
      text: "Expérience des routes bleues depuis 2015 : littoral ou arrière-pays.",
    },
    {
      Icon: HeartHandshake,
      title: "Accompagnement médical calme",
      text: `Trajets hôpitaux et cliniques depuis ${s.displayName} lorsque vos droits CPAM s’alignent.`,
    },
    {
      Icon: BriefcaseBusiness,
      title: "Pro & particuliers",
      text: "Entreprises, congrès Sophia Antipolis et familles depuis la commune.",
    },
    {
      Icon: MapPin,
      title: "Maille locale",
      text: `${s.displayName}, Nice, Cannes, Monaco dans la même logistique.`,
    },
    {
      Icon: Leaf,
      title: "Véhicules récents",
      text: "Entretien suivi pour limiter le bruit et le confort de conduite.",
    },
  ];

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Script
        id={`sector-schema-${sectorId}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdGraph),
        }}
      />

      <nav
        aria-label="Fil d'Ariane"
        className="pt-24 pb-3 bg-neutral-950 text-neutral-400 border-b border-white/10 sector-soft-grid"
      >
        <div className="max-w-7xl mx-auto px-6 text-xs sm:text-sm flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-accent transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60" aria-hidden />
          <Link href={ZONES_DESSERVIES_PATH} className="hover:text-accent transition-colors">
            Zones desservies
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60" aria-hidden />
          <span className="text-white font-medium" aria-current="page">
            Taxi {s.displayName}
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[68vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 sector-hero-ken">
          <Image
            src={s.heroImage}
            alt={s.heroImageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-br from-black/82 via-black/55 to-transparent" />
        <div className="relative z-10 text-center text-white max-w-4xl px-6 py-14">
          <p className="text-accent font-semibold uppercase tracking-[0.2em] text-xs mb-4 sector-anim-in">
            Chauffeur professionnel ASM
          </p>
          <h1 className="text-[1.85rem] sm:text-4xl md:text-5xl font-extrabold mb-6 text-balance leading-tight sector-anim-in sector-anim-delay-1">
            {h1Title}
          </h1>
          <p className="text-lg md:text-xl mb-10 text-neutral-100 max-w-2xl mx-auto sector-anim-in sector-anim-delay-2">
            Service disponible jour &amp; nuit · Mercedes ·{" "}
            <a href={`tel:${PHONE_TEL}`} className="underline font-semibold text-white">
              {PHONE_DISPLAY}
            </a>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap sector-anim-in sector-anim-delay-3">
            <Button
              href="/reservation"
              size="lg"
              className="bg-accent text-accent-foreground hover:brightness-105 shadow-xl shadow-black/30"
            >
              Réserver
            </Button>
            <Button
              href={`tel:${PHONE_TEL}`}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/12 bg-transparent"
            >
              <Phone className="w-5 h-5 mr-2 inline shrink-0" aria-hidden />
              Appeler maintenant
            </Button>
            <Button
              href={`https://wa.me/${waDigits}`}
              size="lg"
              className="border border-emerald-500 bg-emerald-600 text-white shadow-lg shadow-black/25 hover:bg-emerald-500 hover:border-emerald-400"
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Zigzag clair */}
      <section className="py-18 md:py-24 bg-white sector-view-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight">
                Besoin d&apos;un chauffeur à {s.displayName}&nbsp;?
              </h2>
              <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
                {s.intro.slice(0, 2).map((para, idx) => (
                  <p key={idx}>
                    <RichText text={para} />
                  </p>
                ))}
              </div>
              {s.intro[2] ? (
                <p className="text-neutral-600 text-base leading-relaxed border-l-4 border-accent pl-4 py-1">
                  <RichText text={s.intro[2]} />
                </p>
              ) : null}
              <ul className="grid sm:grid-cols-2 gap-3 pt-4">
                {s.localHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 items-start rounded-xl bg-neutral-50 px-4 py-3 border border-neutral-100"
                  >
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden />
                    <span className="text-[15px] text-neutral-800 font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 pt-4">
                <Button
                  href="/reservation"
                  className="bg-accent text-accent-foreground hover:brightness-105"
                  size="lg"
                >
                  Demander une course
                </Button>
                <Button href={`tel:${PHONE_TEL}`} size="lg" variant="outline">
                  Numéro direct
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-neutral-950/25 aspect-[16/17] max-h-[620px] group border border-neutral-200/80">
                <Image
                  src={s.heroImage}
                  alt={`Taxi Mercedes à ${s.displayName}`}
                  fill
                  className="object-cover sector-media-hover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
              <div className="absolute -bottom-5 left-6 md:left-10 bg-accent text-accent-foreground px-6 py-4 rounded-2xl shadow-xl font-bold text-sm md:text-base max-w-[min(100%,18rem)] leading-tight sector-anim-in sector-anim-delay-4">
                Depuis 2015 · Présence Côte d&apos;Azur
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau sombre — aéroport */}
      <section className="py-20 md:py-28 bg-neutral-950 text-white relative overflow-hidden sector-view-reveal sector-soft-grid">
        <div className="absolute inset-0 bg-linear-to-l from-accent/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-14 items-center lg:flex-row-reverse">
          <div className="relative rounded-3xl overflow-hidden aspect-[16/11] lg:aspect-auto lg:h-[340px] border border-white/10 shadow-2xl order-2 lg:order-none group">
            <Image
              src={IMG_AIRPORT}
              alt="Transfert aéroport Nice Côte d'Azur"
              fill
              className="object-cover sector-media-hover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-none">
            <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider">
              <Plane className="w-5 h-5" aria-hidden />
              Aéroport Nice · suivi vol
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {s.airportBlock.title}
            </h2>
            <div className="space-y-4 text-neutral-300 text-[17px] leading-relaxed">
              {s.airportBlock.paragraphs.map((p, i) => (
                <p key={i}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                href="/services/transfert-aeroport"
                size="lg"
                className="bg-accent text-accent-foreground hover:brightness-105"
              >
                Découvrir le transfert aéroport
              </Button>
              <Button
                href="/reservation"
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/12 bg-transparent"
              >
                Réserver
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cartes services */}
      <section className="py-20 md:py-26 bg-neutral-100 sector-view-reveal border-y border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 mb-4">
              Vos déplacements depuis {s.displayName}
            </h2>
            <p className="text-neutral-600 text-lg">
              Une offre lisible : trajets sanitaires, vols depuis Nice et trajets urbains réguliers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 sector-stagger">
            <article className="sector-card bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-lg shadow-neutral-950/5 flex flex-col">
              <div className="relative h-52 shrink-0">
                <Image
                  src={IMG_AIRPORT}
                  alt={`Transferts aéroport depuis ${s.displayName}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-7 flex flex-col grow">
                <h3 className="text-xl font-bold text-neutral-950 mb-3">Transferts aéroport</h3>
                <p className="text-neutral-600 leading-relaxed text-[15px] grow mb-6">
                  <RichText
                    text={`Lien express vers Nice Côte d'Azur avec **prise en charge** à votre domicile à ${s.displayName} lorsque nous confirmons votre créneau.`}
                  />
                </p>
                <Link
                  href="/services/transfert-aeroport"
                  className="font-semibold text-accent inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Voir le détail airport <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
            <article className="sector-card bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-lg shadow-neutral-950/5 flex flex-col">
              <div className="relative h-52 shrink-0">
                <Image
                  src={IMG_MEDICAL}
                  alt="Transport médical conventionné CPAM"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-7 flex flex-col grow">
                <h3 className="text-xl font-bold text-neutral-950 mb-3">Transport médical CPAM</h3>
                <p className="text-neutral-600 leading-relaxed text-[15px] grow mb-6">
                  <RichText
                    text={`Parcours **conventionné** selon dossier Sécurité sociale : vos instructions médecin et votre caisse gardent toujours le dernier mot.`}
                  />
                </p>
                <Link
                  href="/services/taxi-conventionne-cagnes-sur-mer"
                  className="font-semibold text-accent inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Page médical conventionné <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
            <article className="sector-card bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-lg shadow-neutral-950/5 flex flex-col">
              <div className="relative h-52 shrink-0">
                <Image
                  src={IMG_FLEET}
                  alt="Mercedes classe GLB taxi"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-7 flex flex-col grow">
                <h3 className="text-xl font-bold text-neutral-950 mb-3">Courses locales</h3>
                <p className="text-neutral-600 leading-relaxed text-[15px] grow mb-6">
                  <RichText text="Centres commerciaux, gares, sorties famille ou trajets réguliers autour des **Alpes-Maritimes**." />
                </p>
                <Link
                  href="/tarifs"
                  className="font-semibold text-accent inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Tarifs &amp; exemples <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Zigzag clair médical */}
      <section className="py-20 md:py-26 bg-white sector-view-reveal">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28 order-2 lg:order-none">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 aspect-[16/17] relative max-h-[520px] group">
              <Image
                src={IMG_MEDICAL}
                alt="Accompagnement transport médical"
                fill
                className="object-cover sector-media-hover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-none">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-950">{s.cpamBlock.title}</h2>
            <div className="space-y-4 text-neutral-700 text-[17px] leading-relaxed">
              {s.cpamBlock.paragraphs.map((p, i) => (
                <p key={i}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
            <div className="rounded-2xl bg-accent/15 border border-accent/30 px-6 py-5">
              <p className="text-neutral-900 text-[15px] leading-relaxed">
                <RichText text="👉 Pour la **liste des pièces** et vos droits, consultez notre présentation complète : " />{" "}
                <Link
                  href="/services/taxi-conventionne-cagnes-sur-mer"
                  className="font-semibold underline text-accent decoration-accent/60"
                >
                  taxi conventionné CPAM
                </Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-neutral-950 mb-4 flex items-center gap-2">
                <Train className="w-6 h-6 text-accent" aria-hidden />
                {s.garesBlock.title}
              </h3>
              {s.garesBlock.paragraphs?.map((p, i) => (
                <p key={i} className="text-neutral-600 mb-4 leading-relaxed">
                  <RichText text={p} />
                </p>
              ))}
              <ul className="grid sm:grid-cols-2 gap-4">
                {s.garesBlock.list.map((g) => (
                  <li key={g.name} className="rounded-xl bg-neutral-50 px-5 py-4 border border-neutral-100 flex gap-3">
                    <Train className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-neutral-900">{g.name}</span>
                      {g.detail ? (
                        <span className="text-sm text-neutral-600 leading-snug">{g.detail}</span>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-dashed border-neutral-300 px-6 py-5 bg-neutral-50/80">
              <h3 className="font-bold text-neutral-950 mb-2">Prix &amp; estimation</h3>
              <p className="text-neutral-700 text-[15px] leading-relaxed">
                <RichText text={s.prixBlock} />
              </p>
            </div>

            {Array.isArray(s.lieux?.items) && s.lieux.items.filter(Boolean).length > 0 ? (
              <div>
                <h3 className="text-xl font-bold text-neutral-950 mb-3">
                  {s.lieux.title?.trim() ? s.lieux.title : `À connaître autour de ${s.displayName}`}
                </h3>
                <ul className="space-y-2 text-neutral-700">
                  {s.lieux.items.filter(Boolean).map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <span className="text-accent font-bold shrink-0">·</span>
                      <span>
                        <RichText text={item} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="py-20 md:py-24 bg-white border-t border-neutral-200 sector-view-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-950 mb-14">
            Pourquoi confier votre trajet à Taxi Cagnes-sur-Mer ASM&nbsp;?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sector-stagger">
            {whyBlocks.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="sector-card rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6 flex flex-col gap-3"
              >
                <Icon className="w-8 h-8 text-neutral-950 stroke-[1.5]" aria-hidden />
                <h3 className="font-bold text-lg text-neutral-950">{title}</h3>
                <p className="text-[14px] text-neutral-600 leading-relaxed grow">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bandeau CTA */}
      <section className="py-8 bg-accent/95 border-y border-accent sector-view-reveal">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 py-4">
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex w-24 h-16 rounded-xl overflow-hidden border-2 border-neutral-950/15 shadow-md shrink-0">
              <Image
                src={IMG_FLEET}
                alt=""
                width={96}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="font-extrabold text-neutral-950 text-xl tracking-tight">ASM à votre service</p>
              <p className="text-neutral-900/85 text-sm">Course depuis {s.displayName} sous confirmation.</p>
            </div>
          </div>
          <Button
            href="/reservation"
            size="lg"
            className="bg-neutral-950 text-white hover:bg-neutral-950/85 px-10 shrink-0"
          >
            Réserver vite
          </Button>
        </div>
      </section>

      {/* Villes reliées */}
      <section className="py-16 md:py-22 bg-neutral-100 sector-view-reveal">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative rounded-3xl overflow-hidden aspect-[15/17] lg:aspect-auto lg:min-h-[420px] border border-neutral-200 shadow-xl group hidden lg:block">
            <Image
              src={s.heroImage}
              alt=""
              fill
              className="object-cover sector-media-hover"
              sizes="42vw"
              loading="lazy"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-neutral-950">
              Taxi {s.displayName} et communes voisines
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              <RichText text="Nous enchaînons souvent plusieurs escales sur la même demi-journée. Naviguez vers une autre fiche locale pour des repères **trajet + temps** adaptés." />
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {zonesGrid.map((z) => (
                <Link
                  key={z.href + z.label}
                  href={z.href}
                  className="text-neutral-900 font-medium border-b border-transparent hover:border-accent hover:text-accent transition-colors py-1.5 inline-flex items-center gap-1"
                >
                  <MapPin className="w-4 h-4 text-accent shrink-0 opacity-80" aria-hidden />
                  {z.label}
                </Link>
              ))}
              <Link
                href="/"
                className="text-neutral-900 font-medium border-b border-transparent hover:border-accent hover:text-accent transition-colors py-1.5 inline-flex items-center gap-1"
              >
                <MapPin className="w-4 h-4 text-accent shrink-0 opacity-80" aria-hidden />
                Cagnes-sur-Mer (base)
              </Link>
            </div>
            {s.relatedBlog ? (
              <p className="text-neutral-700 pt-4 border-t border-neutral-200">
                <span className="font-semibold text-neutral-950">Lecture utile : </span>
                <Link href={s.relatedBlog.href} className="text-accent font-semibold underline underline-offset-4">
                  {s.relatedBlog.anchor}
                </Link>
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-22 bg-white sector-view-reveal" id="faq">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-neutral-950 mb-10 text-center">
            Questions à {s.displayName}
          </h2>
          <div className="space-y-4">
            {s.faq.map((item, i) => (
              <details
                key={i}
                className="sector-faq-details faq sector-card rounded-2xl border border-neutral-200 bg-neutral-50/50 px-5 py-2 shadow-sm hover:shadow-md"
              >
                <summary className="cursor-pointer py-3 font-semibold text-neutral-950 list-none flex justify-between gap-4 items-center">
                  <span>{item.q}</span>
                  <ChevronRight className="sector-faq-chevron w-5 h-5 shrink-0 text-accent" aria-hidden />
                </summary>
                <p className="pb-5 pt-0 text-neutral-700 leading-relaxed border-t border-neutral-100 mt-3 pt-4">
                  <RichText text={item.a} />
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="py-14 bg-neutral-950 text-white sector-view-reveal mb-16">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Prêt pour votre course depuis {s.displayName}&nbsp;?</h2>
          <p className="text-neutral-400 text-[17px]">Un téléphone ou un message suffit après validation de vos horaires.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Button
              href={`tel:${PHONE_TEL}`}
              size="lg"
              className="bg-accent text-accent-foreground hover:brightness-105"
            >
              {PHONE_DISPLAY}
            </Button>
            <Button
              href={`https://wa.me/${waDigits}`}
              size="lg"
              className="border border-emerald-500 bg-emerald-600 text-white shadow-sm hover:bg-emerald-500 hover:border-emerald-400"
            >
              WhatsApp
            </Button>
            <Button
              href="/reservation"
              size="lg"
              className="border border-white/50 bg-neutral-800 text-white shadow-sm hover:bg-neutral-700 hover:border-white/70"
            >
              Formulaire en ligne
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
