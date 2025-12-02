"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Calendar,
  Car,
  Euro,
  Home,
  Menu,
  Phone,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function HeaderClient({ navItems, children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Sur la page d'accueil, on commence transparent, sinon on commence avec le fond
  const [isScrolled, setIsScrolled] = useState(!isHomePage);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Si on n'est pas sur la page d'accueil, toujours avoir le fond
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Fermer le menu quand on change de page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Icônes pour chaque élément de navigation
  const getIcon = (label) => {
    const iconMap = {
      Accueil: Home,
      Services: Briefcase,
      Tarifs: Euro,
      Blog: BookOpen,
      Contact: Phone,
      Réservation: Calendar,
    };
    return iconMap[label] || Briefcase;
  };

  // Menu mobile rendu via portail pour éviter les problèmes de positionnement
  const mobileMenu = (
    <AnimatePresence mode="wait">
      {isMobileMenuOpen && (
        <>
          {/* Overlay avec effet de flou */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-60"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu principal */}
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden fixed top-0 right-0 bottom-0 w-full max-w-md z-70 bg-linear-to-br from-white to-gray-50 border-l border-gray-200 shadow-2xl flex flex-col pt-16"
          >
            <motion.nav
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex-1 overflow-y-auto px-6 py-6 space-y-1"
            >
              {/* Logo et titre en haut avec bouton fermer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-accent-foreground font-bold text-lg">
                      T
                    </span>
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl font-bold text-gray-900">
                      TAXI CAGNES-SUR-MER
                    </h2>
                    <p className="text-sm text-gray-600">Côte d'Azur</p>
                  </div>
                </div>

                {/* Bouton fermer dans le menu */}
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Fermer le menu"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-gray-600" />
                </motion.button>
              </motion.div>

              {/* Menu items avec icônes */}
              <div className="space-y-2">
                {navItems.map((item, index) => {
                  const Icon = getIcon(item.label);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center space-x-4 px-4 py-3 rounded-xl bg-linear-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-gray-800 hover:text-accent font-medium transition-all duration-300 group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                        <span>{item.label.toUpperCase()}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.nav>

            {/* Bouton Réserver fixe en bas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 1.0 }}
              className="px-6 py-4 border-t border-gray-200 bg-white"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/reservation"
                  className="flex items-center justify-center gap-2 w-full bg-linear-to-r from-accent to-accent/80 text-accent-foreground text-center py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Car className="w-5 h-5" />
                  RÉSERVER
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          {/* Logo */}
          <div
            className={
              isScrolled ? "[&_span]:text-foreground" : "[&_span]:text-white"
            }
          >
            {children}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled
                    ? "text-foreground hover:text-accent"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex gap-4 items-center">
            <Link
              href="/reservation"
              className="px-6 py-2 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Réserver
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-7 h-7 sm:w-8 sm:h-8 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                aria-hidden="true"
              />
            ) : (
              <Menu
                className={`w-7 h-7 sm:w-8 sm:h-8 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </div>
      {typeof window !== "undefined" && createPortal(mobileMenu, document.body)}
    </>
  );
}
