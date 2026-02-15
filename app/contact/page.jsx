// ✅ SERVER COMPONENT - Pas de "use client"
// ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400;

import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import ContactForm from "../components/client/ContactForm";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export const metadata = {
  title: "Contact - Taxi Cagnes-sur-Mer",
  description:
    "Contactez Taxi Cagnes-sur-Mer 24/7. Téléphone, WhatsApp, Email. Service client réactif. Disponible pour tous vos besoins de transport sur la Côte d'Azur.",
  keywords:
    "contact taxi cagnes-sur-mer, téléphone taxi cagnes-sur-mer, whatsapp taxi, email taxi cagnes-sur-mer",
};

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Téléphone",
      info: "+33 6 63 57 65 34",
      action: "Appeler",
      href: "tel:+33663576534",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "+33 6 63 57 65 34",
      action: "Envoyer",
      href: "https://wa.me/33663576534",
    },
    {
      icon: Mail,
      title: "Email",
      info: "taxicagnessurmer2025@gmail.com",
      action: "Écrire",
      href: "mailto:taxicagnessurmer2025@gmail.com",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Nous Contacter
            </h1>
            <p className="text-xl text-muted-foreground">
              Disponible 24h/24 - 7j/7
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Cards */}
            {contactMethods.map((contact, i) => {
              const Icon = contact.icon;
              return (
                <Card
                  key={i}
                  className="p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="font-bold text-lg mb-2">{contact.title}</h3>
                  <p className="text-muted-foreground mb-6">{contact.info}</p>
                  <Link href={contact.href}>
                    <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">
                      {contact.action}
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <ContactForm />

            {/* Info Card */}
            <div className="space-y-6">
              <Card className="p-8 bg-primary text-primary-foreground">
                <h3 className="font-bold text-lg mb-6">
                  Horaires & Localisation
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <p className="font-bold">Disponibilité</p>
                      <p className="text-sm text-primary-foreground/80">
                        24 heures par jour, 7 jours par semaine
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <p className="font-bold">Localisation</p>
                      <p className="text-sm text-primary-foreground/80">
                        Cagnes-sur-Mer, Côte d'Azur, France
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <p className="font-bold">Service Client</p>
                      <p className="text-sm text-primary-foreground/80">
                        Réponse sous 30 minutes
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="font-bold text-lg mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  {["WhatsApp"].map((platform) => (
                    <Button key={platform} variant="outline" size="sm">
                      {platform}
                    </Button>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
