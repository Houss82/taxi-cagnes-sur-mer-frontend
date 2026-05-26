// ✅ SERVER COMPONENT - Pas de "use client"

import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone, Star } from "lucide-react";
import { listSectors, ZONES_DESSERVIES_PATH } from "../lib/sectorsData";

export default function Footer() {
  const zones = listSectors();

  return (
    <footer className="bg-primary text-primary-foreground py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10 pb-12 border-b border-primary-foreground/15">
          <div className="md:max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo-definitif.png"
                alt="Taxi Cagnes-sur-Mer — logo"
                width={36}
                height={36}
                className="h-9 w-9 shrink-0 object-contain"
              />
              <span className="font-bold text-lg">Taxi Cagnes-sur-Mer ASM</span>
            </div>
            <p className="text-primary-foreground/85 text-sm leading-relaxed mb-6">
              Base à <strong>Cagnes-sur-Mer</strong>. Chauffeurs pour l&apos;aéroport Nice, les grandes communes environnantes et le transport médical sur prescription.
            </p>
            <Link
              href={ZONES_DESSERVIES_PATH}
              className="text-accent text-sm font-semibold underline-offset-4 hover:underline"
            >
              Carte des zones desservies →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 text-sm">
          <div>
            <h3 className="font-bold mb-4 text-base">Villes desservies</h3>
            <ul className="space-y-2 text-primary-foreground/85 leading-snug columns-1 sm:columns-2 md:columns-1 gap-x-6 gap-y-2">
              <li>
                <Link href={ZONES_DESSERVIES_PATH} className="hover:text-accent transition-colors font-medium">
                  Toutes nos zones →
                </Link>
              </li>
              {zones.map((z) => (
                <li key={z.path}>
                  <Link href={z.path} className="hover:text-accent transition-colors">
                    {z.displayName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/transfert-aeroport" className="hover:text-accent transition-colors">
                  Transferts aéroport Nice région
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-base">Services taxi</h3>
            <ul className="space-y-2 text-primary-foreground/85">
              <li>
                <Link href="/services/transfert-aeroport" className="hover:text-accent transition-colors">
                  Transfert aéroport
                </Link>
              </li>
              <li>
                <Link href="/services/taxi-conventionne-cagnes-sur-mer" className="hover:text-accent transition-colors">
                  Taxi conventionné CPAM
                </Link>
              </li>
              <li>
                <Link href="/services/chauffeur-prive" className="hover:text-accent transition-colors">
                  Chauffeur privé
                </Link>
              </li>
              <li>
                <Link href="/services/longue-distance" className="hover:text-accent transition-colors">
                  Longues distances
                </Link>
              </li>
              <li>
                <Link href="/services/evenements" className="hover:text-accent transition-colors">
                  Événements
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Tous les services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-base">Liens utiles</h3>
            <ul className="space-y-2 text-primary-foreground/85">
              <li>
                <Link href="/tarifs" className="hover:text-accent transition-colors">
                  Tarifs &amp; exemples de courses
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="hover:text-accent transition-colors">
                  Réservation en ligne
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors">
                  Blog conseils trajets
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact / devis écrit
                </Link>
              </li>
            </ul>
            <div className="mt-8 space-y-3 text-primary-foreground/90">
              <p className="flex items-start gap-2">
                <Phone className="w-4 h-4 shrink-0 mt-0.5" aria-hidden />
                <a href="tel:+33663576534" className="hover:text-accent transition-colors">
                  +33 6 63 57 65 34
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="w-4 h-4 shrink-0 mt-0.5" aria-hidden />
                <span>taxicagnessurmer2025@gmail.com</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" aria-hidden />
                <span>Cagnes-sur-Mer · Alpes-Maritimes</span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 shrink-0 mt-0.5" aria-hidden />
                <span>Service 24 h / 24</span>
              </p>
              <p className="flex items-start gap-2">
                <Star className="w-4 h-4 shrink-0 mt-0.5" aria-hidden />
                <a
                  href="https://maps.app.goo.gl/D6j4275xTCxMfvXP6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Avis Google
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/65">
          <p>&copy; {new Date().getFullYear()} Taxi Cagnes-sur-Mer ASM. Tous droits réservés.</p>
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
            <li>
              <Link href="/conditions-utilisation" className="hover:text-accent transition-colors">
                Conditions d&apos;utilisation
              </Link>
            </li>
            <li>
              <Link href="/politique-confidentialite" className="hover:text-accent transition-colors">
                Confidentialité
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="hover:text-accent transition-colors">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
