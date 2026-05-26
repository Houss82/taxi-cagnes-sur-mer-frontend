import { getSector, SITE } from "./sectorsData";

export function generateSectorMetadata(sectorId) {
  const s = getSector(sectorId);
  const url = `${SITE}${s.path}`;

  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url,
      type: "website",
      siteName: "Taxi Cagnes-sur-Mer ASM",
      images: [{ url: s.ogImage, width: 1200, height: 630, alt: s.heroImageAlt }],
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: s.metaTitle,
      description: s.metaDescription,
      images: [s.ogImage],
    },
  };
}
