import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Taxi Cagnes-sur-Mer ASM - Aéroport Nice, Gares & Conventionné CPAM",
  description:
    "Taxi Cagnes-sur-Mer ASM : Aéroport Nice, Gares & Conventionné CPAM. Service de taxi officiel 24/7 avec transferts aéroport Nice, gares SNCF et transport médical remboursé.",
  keywords:
    "taxi Cagnes-sur-Mer, taxi ASM, transfert aéroport Nice, gare SNCF, taxi conventionné CPAM, Cagnes-sur-Mer",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/logo-taxi-cagnes.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/favicon-32x32.png",
  },
  openGraph: {
    title: "Taxi Cagnes-sur-Mer ASM - Aéroport Nice, Gares & Conventionné CPAM",
    description:
      "Taxi Cagnes-sur-Mer ASM : Aéroport Nice, Gares & Conventionné CPAM. Service de taxi officiel 24/7 avec transferts aéroport Nice, gares SNCF et transport médical remboursé.",
    url: "https://taxi-cagnes-sur-mer.fr",
    siteName: "Taxi Cagnes-sur-Mer",
    images: [
      {
        url: "https://taxi-cagnes-sur-mer.fr/logo-taxi-cagnes.png",
        width: 1200,
        height: 630,
        alt: "Taxi Cagnes-sur-Mer",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Cagnes-sur-Mer ASM - Aéroport Nice, Gares & Conventionné CPAM",
    description:
      "Taxi Cagnes-sur-Mer ASM : Aéroport Nice, Gares & Conventionné CPAM. Service de taxi officiel 24/7 avec transferts aéroport Nice, gares SNCF et transport médical remboursé.",
    images: ["https://taxi-cagnes-sur-mer.fr/logo-taxi-cagnes.png"],
  },
};

// ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400;

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Y76NRQ8CK2"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y76NRQ8CK2');
        `}
      </Script>
      {/* Google Ads Conversion Tracking */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17953621076"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17953621076');
        `}
      </Script>
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
