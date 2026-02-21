"use client";

import { MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingCallButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Afficher les boutons après un court délai pour une meilleure UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    // Détecter le scroll pour changer l'apparence
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pointer-events-none">
      {/* Gradient overlay pour effet de profondeur */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-white/80 via-white/40 to-transparent backdrop-blur-sm pointer-events-none"></div>
      
      <div className="max-w-md mx-auto px-4 pb-4 pointer-events-auto">
        <div className="flex gap-3 items-center">
          {/* Bouton WhatsApp */}
          <a
            href="https://wa.me/33663576534"
            className="flex-1 bg-[#25D366] text-white rounded-2xl px-4 py-4 shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 font-semibold text-sm relative overflow-hidden group"
            aria-label="Contacter sur WhatsApp"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click', {
                  event_category: 'Contact',
                  event_label: 'WhatsApp',
                });
              }
            }}
          >
            <MessageCircle className="w-5 h-5 relative z-10" />
            <span className="relative z-10">WhatsApp</span>
          </a>

          {/* Bouton Appel principal - Plus grand et mis en avant */}
          <a
            href="tel:+33663576534"
            className={`flex-[1.3] bg-green-600 text-white rounded-2xl px-5 py-5 shadow-2xl hover:shadow-green-600/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 font-bold text-base relative overflow-hidden ${
              !isScrolled ? "ring-4 ring-green-500/40 animate-pulse-ring" : ""
            }`}
            aria-label="Appeler maintenant"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'phone_call', {
                  event_category: 'Contact',
                  event_label: 'Mobile Call Button',
                });
              }
            }}
          >
            {/* Effet de brillance animé */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></div>
            <Phone className="w-6 h-6 relative z-10" />
            <span className="relative z-10">Appeler</span>
          </a>
        </div>
      </div>
    </div>
  );
}
