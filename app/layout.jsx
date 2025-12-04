import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata = {
  title: "Taxi Cagnes-sur-Mer - Transferts Premium sur la Côte d'Azur",
  description:
    "Service de taxi luxe à Cagnes-sur-Mer. Transferts aéroport Nice, Monaco, Antibes. Véhicules Mercedes premium 24/7.",
  keywords: "taxi Cagnes-sur-Mer, transfert Nice, chauffeur privé, Côte d'Azur",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo-taxi-cagnes.png",
        sizes: "any",
        type: "image/png",
      },
      {
        url: "/logo-taxi-cagnes.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/logo-taxi-cagnes.png",
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
    shortcut: "/logo-taxi-cagnes.png",
  },
  openGraph: {
    title: "Taxi Cagnes-sur-Mer - Transferts Premium sur la Côte d'Azur",
    description:
      "Service de taxi luxe à Cagnes-sur-Mer. Transferts aéroport Nice, Monaco, Antibes. Véhicules Mercedes premium 24/7.",
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
    title: "Taxi Cagnes-sur-Mer - Transferts Premium sur la Côte d'Azur",
    description:
      "Service de taxi luxe à Cagnes-sur-Mer. Transferts aéroport Nice, Monaco, Antibes.",
    images: ["https://taxi-cagnes-sur-mer.fr/logo-taxi-cagnes.png"],
  },
}

// ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

