// ✅ SERVER COMPONENT - Pas de "use client"
// ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400;

import Card from "../components/ui/Card";

export const metadata = {
  title: "Conditions d'utilisation - Taxi Cagnes-sur-Mer",
  description:
    "Conditions d'utilisation du service Taxi Cagnes-sur-Mer. Règles et conditions pour l'utilisation de nos services de transport premium sur la Côte d'Azur.",
  keywords:
    "conditions d'utilisation taxi cagnes-sur-mer, CGU taxi, règles utilisation taxi",
};

export default function ConditionsUtilisation() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Conditions d'utilisation
            </h1>
            <p className="text-xl text-muted-foreground">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">1. Acceptation des conditions</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En utilisant les services de Taxi Cagnes-sur-Mer, vous acceptez sans réserve
                les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions,
                veuillez ne pas utiliser nos services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ces conditions s'appliquent à tous les utilisateurs du service, y compris les
                visiteurs, les clients et les autres personnes qui accèdent ou utilisent le
                service.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">2. Description du service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Taxi Cagnes-sur-Mer propose des services de transport de personnes en véhicules
                de tourisme avec chauffeur (VTC) sur la Côte d'Azur et ses environs.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Transferts aéroport Nice Côte d'Azur</li>
                <li>Trajets vers Monaco, Antibes, Cannes et autres destinations</li>
                <li>Service de chauffeur privé 24/7</li>
                <li>Transport pour événements et groupes</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">3. Réservation et annulation</h2>
              <h3 className="text-xl font-semibold mb-3 mt-4">3.1 Réservation</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les réservations peuvent être effectuées par téléphone, via notre site web ou
                par email. Toute réservation est soumise à disponibilité des véhicules.
              </p>
              <h3 className="text-xl font-semibold mb-3 mt-4">3.2 Annulation</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les annulations doivent être effectuées au moins 2 heures avant l'heure prévue
                du trajet. En cas d'annulation tardive (moins de 2 heures), des frais
                d'annulation peuvent s'appliquer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pour les transferts aéroport, aucune pénalité n'est appliquée en cas de retard
                de vol, sous réserve d'un suivi de vol en temps réel.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">4. Tarifs et paiement</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les tarifs sont indiqués en euros TTC et peuvent varier selon la distance, la
                durée, le type de véhicule et les options choisies.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les modes de paiement acceptés sont : espèces, carte bancaire, virement
                bancaire et paiement en ligne.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Les tarifs sont garantis au moment de la réservation et ne peuvent être modifiés
                qu'en cas de changement d'itinéraire demandé par le client ou de circonstances
                exceptionnelles (embouteillages majeurs, événements imprévus).
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">5. Responsabilité</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Taxi Cagnes-sur-Mer s'engage à fournir un service de qualité avec des véhicules
                en bon état et des chauffeurs professionnels et expérimentés.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La responsabilité de Taxi Cagnes-sur-Mer ne saurait être engagée en cas de :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Retard dû à des circonstances indépendantes de notre volonté</li>
                <li>Perte ou vol d'objets personnels laissés dans le véhicule</li>
                <li>Dommages causés par le non-respect des consignes de sécurité</li>
                <li>Retard ou annulation due à des conditions météorologiques exceptionnelles</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">6. Comportement des passagers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les passagers s'engagent à :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Respecter le chauffeur et le véhicule</li>
                <li>Ne pas fumer dans le véhicule</li>
                <li>Ne pas consommer d'alcool en excès</li>
                <li>Respecter les règles de sécurité routière</li>
                <li>Informer le chauffeur de tout changement d'itinéraire</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                En cas de comportement inapproprié, le chauffeur se réserve le droit de mettre
                fin au trajet sans remboursement.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">7. Protection des données personnelles</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les données personnelles collectées lors de la réservation sont traitées
                conformément à notre politique de confidentialité et à la réglementation en
                vigueur (RGPD).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pour plus d'informations, consultez notre{" "}
                <a
                  href="/politique-confidentialite"
                  className="text-accent hover:underline"
                >
                  politique de confidentialité
                </a>
                .
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">8. Propriété intellectuelle</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tous les contenus présents sur le site web de Taxi Cagnes-sur-Mer (textes,
                images, logos, etc.) sont protégés par le droit d'auteur et appartiennent à Taxi
                Cagnes-sur-Mer ou à ses partenaires.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Toute reproduction, même partielle, est interdite sans autorisation préalable.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">9. Modification des conditions</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Taxi Cagnes-sur-Mer se réserve le droit de modifier les présentes conditions
                d'utilisation à tout moment. Les modifications entrent en vigueur dès leur
                publication sur le site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Il est recommandé de consulter régulièrement cette page pour prendre connaissance
                des éventuelles modifications.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">10. Droit applicable et juridiction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les présentes conditions d'utilisation sont régies par le droit français.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En cas de litige, et à défaut d'accord amiable, les tribunaux français seront
                seuls compétents.
              </p>
            </Card>

            <Card className="p-8 bg-primary text-primary-foreground">
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <p className="text-primary-foreground/90 leading-relaxed mb-4">
                Pour toute question concernant ces conditions d'utilisation, vous pouvez nous
                contacter :
              </p>
              <ul className="space-y-2 text-primary-foreground/90">
                <li>
                  <strong>Téléphone :</strong> +33 6 63 57 65 34
                </li>
                <li>
                  <strong>Email :</strong> taxicagnessurmer2025@gmail.com
                </li>
                <li>
                  <strong>Adresse :</strong> Cagnes-sur-Mer, Côte d'Azur, France
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

