// ✅ SERVER COMPONENT - Pas de "use client"
// L'interactivité (scroll, menu mobile) est gérée par HeaderClient

import Link from "next/link";
import HeaderClient from "./client/HeaderClient";

const navItems = [
  { label: "Accueil", href: "/" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Transfert Aéroport", href: "/services/transfert-aeroport" },
      { label: "Chauffeur Privé", href: "/services/chauffeur-prive" },
      { label: "Longue Distance", href: "/services/longue-distance" },
      { label: "Événements", href: "/services/evenements" },
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
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-lg">T</span>
          </div>
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
