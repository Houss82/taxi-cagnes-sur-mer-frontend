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
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
  },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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

