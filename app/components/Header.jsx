// ✅ SERVER COMPONENT - Pas de "use client"
// L'interactivité (scroll, menu mobile) est gérée par HeaderClient

import Image from "next/image";
import Link from "next/link";
import HeaderClient from "./client/HeaderClient";

const navItems = [
  { label: "Accueil", href: "/" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Transfert Aéroport", href: "/services/transfert-aeroport" },
      { label: "Transport Médical Conventionné", href: "/services/taxi-conventionne-cagnes-sur-mer" },
      { label: "Chauffeur Privé", href: "/services/chauffeur-prive" },
      { label: "Longue Distance", href: "/services/longue-distance" },
      { label: "Événements", href: "/services/evenements" },
    ],
  },
  { label: "Zones desservies", href: "/zones-desservies" },
  {
    label: "Villes",
    href: "/zones-desservies",
    submenu: [
      { label: "Vue d’ensemble – toutes les zones", href: "/zones-desservies" },
      { label: "Biot", href: "/taxi-biot" },
      { label: "La Colle-sur-Loup", href: "/taxi-la-colle-sur-loup" },
      { label: "La Gaude", href: "/taxi-la-gaude" },
      { label: "Saint-Laurent-du-Var", href: "/taxi-saint-laurent-du-var" },
      { label: "Saint-Paul-de-Vence", href: "/taxi-saint-paul-de-vence" },
      { label: "Vence", href: "/taxi-vence" },
      { label: "Villeneuve-Loubet", href: "/taxi-villeneuve-loubet" },
    ],
  },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50">
      <HeaderClient navItems={navItems}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-definitif.png"
            alt="Taxi Cagnes-sur-Mer — logo"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 object-contain"
            priority
          />
          <span
            className={`font-bold text-lg md:text-xl transition-colors ${
              // Le style sera géré par HeaderClient via isScrolled
              "text-white"
            }`}
          >
            Taxi Cagnes-sur-Mer
          </span>
        </Link>
      </HeaderClient>
    </header>
  );
}
