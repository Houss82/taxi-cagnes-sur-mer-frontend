"use client";

import { Phone } from "lucide-react";

export default function HeroCallButton() {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_call', {
        event_category: 'Contact',
        event_label: 'Hero Call Button Mobile',
      });
    }
  };

  return (
    <div className="md:hidden mt-4">
      <a
        href="tel:+33663576534"
        className="inline-flex items-center gap-2 bg-green-600 text-white rounded-full px-6 py-3 shadow-xl hover:shadow-green-600/50 transition-all duration-300 hover:scale-105 active:scale-95 font-semibold text-sm"
        aria-label="Appeler maintenant"
        onClick={handleClick}
      >
        <Phone className="w-5 h-5" />
        <span>Appeler : +33 6 63 57 65 34</span>
      </a>
    </div>
  );
}
