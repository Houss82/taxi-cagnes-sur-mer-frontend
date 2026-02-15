"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/taxi-cagnes-sur-mer-Polygone-riviera.jpeg",
    alt: "Taxi Cagnes-sur-Mer Mercedes pour transferts aéroport Nice",
  },
  {
    src: "/taxi-cagnes-sur-mer-ville.jpeg",
    alt: "Taxi Cagnes-sur-Mer - Service de transport premium",
  },
];

export default function HeroBackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Images pour mobile */}
      {images.map((image, index) => (
        <Image
          key={`mobile-${image.src}`}
          src={image.src}
          alt={image.alt}
          fill
          className="md:hidden"
          priority={index === 0}
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center bottom",
            width: "100%",
            height: "100%",
            opacity: currentIndex === index ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
            position: "absolute",
          }}
        />
      ))}
      {/* Images pour desktop */}
      {images.map((image, index) => (
        <Image
          key={`desktop-${image.src}`}
          src={image.src}
          alt={image.alt}
          fill
          className="hidden md:block object-cover"
          priority={index === 0}
          sizes="100vw"
          style={{
            objectPosition: "center 70%",
            opacity: currentIndex === index ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
            position: "absolute",
          }}
        />
      ))}
    </>
  );
}
