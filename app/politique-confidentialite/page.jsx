// ✅ SERVER COMPONENT - Pas de "use client"
// ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400;

import Card from "../components/ui/Card";

export const metadata = {
  title: "Politique de confidentialité - Taxi Cagnes-sur-Mer",
  description:
    "Politique de confidentialité de Taxi Cagnes-sur-Mer. Protection et traitement de vos données personnelles conformément au RGPD.",
  keywords:
    "politique confidentialité taxi cagnes-sur-mer, protection données personnelles, RGPD taxi",
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Politique de confidentialité
            </h1>
            <p className="text-xl text-muted-foreground">
              Dernière mise à jour :{" "}
              {new Date().toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Taxi Cagnes-sur-Mer s'engage à protéger la confidentialité et la
                sécurité de vos données personnelles. Cette politique de
                confidentialité explique comment nous collectons, utilisons,
                stockons et protégeons vos informations personnelles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En utilisant nos services, vous acceptez les pratiques décrites
                dans cette politique de confidentialité, conformément au
                Règlement Général sur la Protection des Données (RGPD) et à la
                loi Informatique et Libertés.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                2. Responsable du traitement
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le responsable du traitement des données personnelles est :
              </p>
              <ul className="list-none text-muted-foreground space-y-2 ml-4">
                <li>
                  <strong>Taxi Cagnes-sur-Mer</strong>
                </li>
                <li>Cagnes-sur-Mer, Côte d'Azur, France</li>
                <li>
                  <strong>Email :</strong> houssedev7@gmail.com
                </li>
                <li>
                  <strong>Téléphone :</strong> +33 6 63 57 65 34
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">3. Données collectées</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nous collectons les données personnelles suivantes :
              </p>
              <h3 className="text-xl font-semibold mb-3 mt-4">
                3.1 Données d'identification
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Nom et prénom</li>
                <li>Numéro de téléphone</li>
                <li>Adresse email</li>
                <li>Adresse postale (si nécessaire pour la facturation)</li>
              </ul>
              <h3 className="text-xl font-semibold mb-3 mt-4">
                3.2 Données de réservation
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Date et heure du trajet</li>
                <li>Adresse de départ et d'arrivée</li>
                <li>Nombre de passagers</li>
                <li>Type de véhicule demandé</li>
                <li>Commentaires et demandes spéciales</li>
              </ul>
              <h3 className="text-xl font-semibold mb-3 mt-4">
                3.3 Données de navigation
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Adresse IP</li>
                <li>Type de navigateur</li>
                <li>Pages visitées sur notre site</li>
                <li>Cookies et technologies similaires</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                4. Finalités du traitement
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vos données personnelles sont traitées pour les finalités
                suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Gestion et traitement de vos réservations</li>
                <li>Communication avec vous concernant votre réservation</li>
                <li>
                  Amélioration de nos services et de votre expérience client
                </li>
                <li>Respect de nos obligations légales et réglementaires</li>
                <li>Gestion de la relation client et du service après-vente</li>
                <li>
                  Envoi d'informations commerciales (avec votre consentement)
                </li>
                <li>Statistiques et analyses de fréquentation du site</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                5. Base légale du traitement
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le traitement de vos données personnelles est fondé sur :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  <strong>L'exécution d'un contrat :</strong> pour la gestion de
                  vos réservations et la fourniture de nos services
                </li>
                <li>
                  <strong>Votre consentement :</strong> pour l'envoi de
                  communications commerciales et l'utilisation de cookies non
                  essentiels
                </li>
                <li>
                  <strong>L'intérêt légitime :</strong> pour l'amélioration de
                  nos services et la prévention de la fraude
                </li>
                <li>
                  <strong>L'obligation légale :</strong> pour le respect de nos
                  obligations comptables et fiscales
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                6. Conservation des données
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vos données personnelles sont conservées pour les durées
                suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  <strong>Données de réservation :</strong> 3 ans à compter de
                  la dernière réservation (obligation légale comptable)
                </li>
                <li>
                  <strong>Données de contact :</strong> jusqu'à votre demande de
                  suppression ou retrait de votre consentement
                </li>
                <li>
                  <strong>Données de navigation :</strong> 13 mois maximum pour
                  les cookies
                </li>
                <li>
                  <strong>Données de facturation :</strong> 10 ans (obligation
                  légale fiscale)
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Au-delà de ces durées, vos données sont supprimées ou
                anonymisées.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                7. Partage des données
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vos données personnelles peuvent être partagées avec :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  <strong>Nos chauffeurs :</strong> uniquement les informations
                  nécessaires pour effectuer votre trajet (nom, téléphone,
                  adresses)
                </li>
                <li>
                  <strong>Nos prestataires techniques :</strong> hébergeur,
                  prestataire de paiement, outils de communication (sous contrat
                  de sous-traitance)
                </li>
                <li>
                  <strong>Les autorités compétentes :</strong> en cas
                  d'obligation légale ou de réquisition judiciaire
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Nous ne vendons jamais vos données personnelles à des tiers à
                des fins commerciales.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">8. Vos droits</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  <strong>Droit d'accès :</strong> obtenir une copie de vos
                  données personnelles
                </li>
                <li>
                  <strong>Droit de rectification :</strong> corriger vos données
                  inexactes ou incomplètes
                </li>
                <li>
                  <strong>Droit à l'effacement :</strong> demander la
                  suppression de vos données (sous certaines conditions)
                </li>
                <li>
                  <strong>Droit à la limitation :</strong> limiter le traitement
                  de vos données
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> récupérer vos
                  données dans un format structuré
                </li>
                <li>
                  <strong>Droit d'opposition :</strong> vous opposer au
                  traitement de vos données pour motifs légitimes
                </li>
                <li>
                  <strong>Droit de retirer votre consentement :</strong> à tout
                  moment pour les traitements fondés sur le consentement
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous à l'adresse :{" "}
                <a
                  href="mailto:taxicagnessurmer2025@gmail.com"
                  className="text-accent hover:underline"
                >
                  taxicagnessurmer2025@gmail.com
                </a>
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                9. Sécurité des données
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nous mettons en œuvre des mesures techniques et
                organisationnelles appropriées pour protéger vos données
                personnelles contre :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>L'accès non autorisé</li>
                <li>La perte ou la destruction accidentelle</li>
                <li>La divulgation non autorisée</li>
                <li>La modification non autorisée</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Cependant, aucune méthode de transmission sur Internet ou de
                stockage électronique n'est totalement sécurisée. Nous ne
                pouvons garantir une sécurité absolue.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">10. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Notre site utilise des cookies pour améliorer votre expérience
                de navigation et analyser le trafic. Vous pouvez configurer
                votre navigateur pour refuser les cookies, mais cela peut
                affecter certaines fonctionnalités du site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Les cookies utilisés sont :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  <strong>Cookies essentiels :</strong> nécessaires au
                  fonctionnement du site
                </li>
                <li>
                  <strong>Cookies analytiques :</strong> pour comprendre
                  l'utilisation du site
                </li>
                <li>
                  <strong>Cookies de préférences :</strong> pour mémoriser vos
                  choix
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">11. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nous nous réservons le droit de modifier cette politique de
                confidentialité à tout moment. Les modifications entrent en
                vigueur dès leur publication sur cette page.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nous vous encourageons à consulter régulièrement cette page pour
                rester informé de la manière dont nous protégeons vos données.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">12. Réclamation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Si vous estimez que le traitement de vos données personnelles
                constitue une violation du RGPD, vous avez le droit d'introduire
                une réclamation auprès de la Commission Nationale de
                l'Informatique et des Libertés (CNIL) :
              </p>
              <ul className="list-none text-muted-foreground space-y-2 ml-4">
                <li>
                  <strong>CNIL</strong>
                </li>
                <li>3 Place de Fontenoy - TSA 80715</li>
                <li>75334 Paris Cedex 07</li>
                <li>
                  <strong>Site web :</strong>{" "}
                  <a
                    href="https://www.cnil.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    www.cnil.fr
                  </a>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-primary text-primary-foreground">
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <p className="text-primary-foreground/90 leading-relaxed mb-4">
                Pour toute question concernant cette politique de
                confidentialité ou pour exercer vos droits, contactez-nous :
              </p>
              <ul className="space-y-2 text-primary-foreground/90">
                <li>
                  <strong>Email :</strong> houssedev7@gmail.com
                </li>
                <li>
                  <strong>Téléphone :</strong> +33 6 63 57 65 34
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
