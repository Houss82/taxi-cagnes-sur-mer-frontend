/**
 * Patterns visuels services (animations CSS globals : sector-*), sans "use client".
 */
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import { PHONE_DISPLAY, PHONE_TEL } from "../lib/sectorsData";

const waDigits = PHONE_TEL.replace(/^\+/, "");

const sectionPad = "py-16 md:py-22 lg:py-26";

/** Hero plein viewport type pages secteurs */
export function ServiceHero({
  src,
  alt,
  eyebrow,
  title,
  subtitle,
  minHeightClass = "min-h-[82vh]",
  priority = true,
  children,
}) {
  return (
    <section
      className={`relative isolate ${minHeightClass} flex flex-col justify-center overflow-hidden bg-neutral-950 pt-20 pb-14`}
      aria-labelledby="service-hero-title"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center sector-hero-image-pop"
          priority={priority}
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-neutral-950/88 via-neutral-950/72 to-neutral-950/55" aria-hidden />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.12),_transparent_55%)]" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center text-white py-10">
        {eyebrow ? (
          <p className="text-accent font-semibold uppercase tracking-[0.22em] text-xs mb-4 sector-anim-in">
            {eyebrow}
          </p>
        ) : null}
        <h1
          id="service-hero-title"
          className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.35rem] font-extrabold mb-6 text-balance leading-tight max-w-4xl mx-auto sector-anim-in sector-anim-delay-1 drop-shadow-[0_2px_24px_rgb(0_0_0/0.5)]"
        >
          {title}
        </h1>
        {subtitle ? (
          <p className="text-lg md:text-xl text-neutral-100 max-w-2xl mx-auto mb-10 leading-relaxed sector-anim-in sector-anim-delay-2">
            {subtitle}
          </p>
        ) : null}
        {children ? (
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap sector-anim-in sector-anim-delay-3">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function ServiceSection({
  muted = false,
  dark = false,
  bordered = false,
  className = "",
  children,
  id,
  ...rest
}) {
  const bg = dark ? "bg-neutral-950 text-white" : muted ? "bg-neutral-100" : "bg-white";
  const b = bordered ? "border-y border-neutral-200/70" : "";
  return (
    <section id={id} className={`${sectionPad} ${bg} ${b} sector-view-reveal overflow-x-hidden ${className}`} {...rest}>
      {children}
    </section>
  );
}

/** Conteneur max-width commun */
export function ServiceContainer({ narrow = false, className = "", children }) {
  const mw = narrow ? "max-w-4xl" : "max-w-7xl";
  return <div className={`${mw} mx-auto px-6 ${className}`}>{children}</div>;
}

/** Grille avantages avec délais */
export function ServiceFeatureGrid({ columns = "md:grid-cols-2 lg:grid-cols-3", className = "", children }) {
  return <div className={`grid grid-cols-1 ${columns} gap-6 md:gap-8 sector-stagger ${className}`}>{children}</div>;
}

/** Carte bloc (utilise globals .sector-card) */
export function serviceCardClass(extra = "") {
  return `sector-card rounded-2xl border border-neutral-200/90 bg-card shadow-lg shadow-neutral-950/5 ${extra}`;
}

/** Bandeau CTA accent (optionnel ; les pages services n’emploient désormais qu’un seul CTA footer sombre pour éviter le doublon) */
export function ServiceCtaAccent({ title, description, primaryHref = "/reservation", primaryLabel = "Réserver en ligne", secondaryHref = "/contact", secondaryLabel = "Nous contacter" }) {
  return (
    <section className="py-10 md:py-12 bg-accent/95 border-y border-accent sector-view-reveal">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-950 tracking-tight">{title}</h2>
        {description ? <p className="text-lg text-neutral-900/90 max-w-2xl mx-auto leading-relaxed">{description}</p> : null}
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <Button href={primaryHref} size="lg" className="bg-neutral-950 text-white hover:bg-neutral-950/90 shadow-lg">
            {primaryLabel}
          </Button>
          <Button
            href={secondaryHref}
            size="lg"
            className="border border-neutral-950/30 bg-neutral-100 text-neutral-950 hover:bg-white shadow-md"
          >
            {secondaryLabel}
          </Button>
          <Button
            href={`https://wa.me/${waDigits}`}
            size="lg"
            className="border border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-500 hover:border-emerald-500 shadow-md"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}

/** CTA pied de page sombre (réutilise le pattern pages villes) */
export function ServiceCtaFooter({ title, subtitle }) {
  return (
    <section className="py-14 bg-neutral-950 text-white sector-view-reveal mb-16">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-balance">{title}</h2>
        {subtitle ? <p className="text-neutral-300 text-[17px] leading-relaxed">{subtitle}</p> : null}
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <Button href={`tel:${PHONE_TEL}`} size="lg" className="bg-accent text-accent-foreground hover:brightness-105">
            {PHONE_DISPLAY}
          </Button>
          <Button
            href={`https://wa.me/${waDigits}`}
            size="lg"
            className="border border-emerald-500 bg-emerald-600 text-white hover:bg-emerald-500"
          >
            WhatsApp
          </Button>
          <Button href="/reservation" size="lg" className="border border-white/50 bg-neutral-800 text-white hover:bg-neutral-700">
            Formulaire en ligne
          </Button>
          <Button
            href="/contact"
            size="lg"
            className="border border-white/55 bg-neutral-900 text-white hover:bg-neutral-800"
          >
            Contact
          </Button>
        </div>
        <p className="text-sm text-neutral-500 pt-2">
          <Link href="/services" className="underline underline-offset-4 hover:text-white">
            Tous les services
          </Link>
          {" · "}
          <Link href="/zones-desservies" className="underline underline-offset-4 hover:text-white">
            Zones desservies
          </Link>
        </p>
      </div>
    </section>
  );
}
