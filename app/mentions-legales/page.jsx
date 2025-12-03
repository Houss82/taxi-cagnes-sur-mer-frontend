// ✅ SERVER COMPONENT - Pas de "use client"
// ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400;

import Card from "../components/ui/Card";

export const metadata = {
  title: "Mentions légales - Taxi Cagnes-sur-Mer",
  description:
    "Mentions légales du site Taxi Cagnes-sur-Mer. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation du site.",
  keywords: "mentions légales taxi cagnes-sur-mer, éditeur site, hébergeur",
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Mentions légales
            </h1>
            <p className="text-xl text-muted-foreground">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin
              2004 pour la confiance en l'économie numérique
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">1. Éditeur du site</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le site <strong>www.taxi-cagnes-sur-mer.fr</strong> est édité
                par :
              </p>
              <ul className="list-none text-muted-foreground space-y-2 ml-4">
                <li>
                  <strong>Raison sociale :</strong> Taxi Cagnes-sur-Mer
                </li>
                <li>
                  <strong>Forme juridique :</strong> Entreprise individuelle /
                  Société
                </li>
                <li>
                  <strong>Adresse :</strong> Cagnes-sur-Mer, Côte d'Azur, France
                </li>
                <li>
                  <strong>Téléphone :</strong> +33 6 15 29 37 21
                </li>
                <li>
                  <strong>Email :</strong> houssedev7@gmail.com
                </li>
                <li>
                  <strong>Directeur de publication :</strong> Houssedev7
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">2. Hébergement</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le site est hébergé par :
              </p>
              <ul className="list-none text-muted-foreground space-y-2 ml-4">
                <li>
                  <strong>Vercel Inc.</strong>
                </li>
                <li>340 S Lemon Ave #4133</li>
                <li>Walnut, CA 91789</li>
                <li>
                  <strong>Site web :</strong>{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    vercel.com
                  </a>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">3. Activité</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Taxi Cagnes-sur-Mer est une entreprise de transport de personnes
                en véhicules de tourisme avec chauffeur (VTC) sur la Côte
                d'Azur.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Numéro SIRET :</strong> [Numéro SIRET à compléter]
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Numéro TVA intracommunautaire :</strong> [Numéro TVA à
                compléter si applicable]
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                4. Propriété intellectuelle
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos,
                icônes, graphismes, etc.) est la propriété exclusive de Taxi
                Cagnes-sur-Mer, sauf mention contraire.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Toute reproduction, représentation, modification, publication,
                adaptation de tout ou partie des éléments du site, quel que soit
                le moyen ou le procédé utilisé, est interdite, sauf autorisation
                écrite préalable de Taxi Cagnes-sur-Mer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Toute exploitation non autorisée du site ou de l'un quelconque
                des éléments qu'il contient sera considérée comme constitutive
                d'une contrefaçon et poursuivie conformément aux dispositions
                des articles L.335-2 et suivants du Code de la Propriété
                Intellectuelle.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                5. Données personnelles
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conformément à la loi "Informatique et Libertés" du 6 janvier
                1978 modifiée et au Règlement Général sur la Protection des
                Données (RGPD), vous disposez d'un droit d'accès, de
                rectification, de suppression et d'opposition aux données
                personnelles vous concernant.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse
                :{" "}
                <a
                  href="mailto:info@taxicagnessurmer.fr"
                  className="text-accent hover:underline"
                >
                  info@taxicagnessurmer.fr
                </a>
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
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
              <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le site utilise des cookies pour améliorer l'expérience
                utilisateur et analyser le trafic. En continuant à naviguer sur
                ce site, vous acceptez l'utilisation de cookies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Vous pouvez configurer votre navigateur pour refuser les
                cookies, mais certaines fonctionnalités du site peuvent ne plus
                être accessibles.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">7. Liens hypertextes</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le site peut contenir des liens hypertextes vers d'autres sites
                présents sur le réseau Internet. Les liens vers ces autres
                ressources vous font quitter le site Taxi Cagnes-sur-Mer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Il est possible de créer un lien vers la page d'accueil de ce
                site sans autorisation expresse de l'éditeur. Aucun lien ne
                pourra être établi vers d'autres pages du site sans autorisation
                préalable.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                8. Limitation de responsabilité
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les informations contenues sur ce site sont aussi précises que
                possible et le site est périodiquement remis à jour, mais peut
                toutefois contenir des inexactitudes, des omissions ou des
                lacunes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Si vous constatez une lacune, erreur ou ce qui parait être un
                dysfonctionnement, merci de bien vouloir le signaler par email à{" "}
                <a
                  href="mailto:info@taxicagnessurmer.fr"
                  className="text-accent hover:underline"
                >
                  info@taxicagnessurmer.fr
                </a>
                .
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Taxi Cagnes-sur-Mer ne pourra être tenu responsable des dommages
                directs et indirects causés au matériel de l'utilisateur, lors
                de l'accès au site, et résultant soit de l'utilisation d'un
                matériel ne répondant pas aux spécifications indiquées, soit de
                l'apparition d'un bug ou d'une incompatibilité.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">9. Droit applicable</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les présentes mentions légales sont régies par le droit
                français.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En cas de litige et à défaut d'accord amiable, le litige sera
                porté devant les tribunaux français conformément aux règles de
                compétence en vigueur.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">10. Médiation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conformément aux articles L.611-1 et R.612-1 et suivants du Code
                de la consommation, si vous êtes un consommateur, vous avez le
                droit de recourir gratuitement à un médiateur de la consommation
                en vue de la résolution amiable du litige qui nous oppose.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Le médiateur compétent pour notre secteur d'activité est :
              </p>
              <ul className="list-none text-muted-foreground space-y-2 ml-4">
                <li>
                  <strong>Médiateur de la consommation</strong>
                </li>
                <li>Houssedev7 (houssedev7@gmail.com)</li>
              </ul>
            </Card>

            <Card className="p-8 bg-primary text-primary-foreground">
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <p className="text-primary-foreground/90 leading-relaxed mb-4">
                Pour toute question concernant ces mentions légales, vous pouvez
                nous contacter :
              </p>
              <ul className="space-y-2 text-primary-foreground/90">
                <li>
                  <strong>Téléphone :</strong> +33 6 15 29 37 21
                </li>
                <li>
                  <strong>Email :</strong> info@taxicagnessurmer.fr
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
