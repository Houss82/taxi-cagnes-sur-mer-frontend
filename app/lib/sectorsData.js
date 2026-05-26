/** Données SEO par ville — textes distincts pour limiter le duplicate content */

export const ZONES_DESSERVIES_PATH = "/zones-desservies";

export const SECTOR_ORDER = [
  "villeneuve-loubet",
  "saint-laurent-du-var",
  "la-colle-sur-loup",
  "la-gaude",
  "saint-paul-de-vence",
  "vence",
  "biot",
];

const PHONE_DISPLAY = "+33 6 63 57 65 34";
const PHONE_TEL = "+33663576534";
const SITE = "https://taxi-cagnes-sur-mer.fr";

const baseKeywords = (city) =>
  [
    `taxi ${city}`,
    `transfert aéroport Nice ${city}`,
    `transport médical CPAM ${city}`,
    `chauffeur ${city}`,
  ].join(", ");

const SECTORS = {
  "villeneuve-loubet": {
    path: "/taxi-villeneuve-loubet",
    slug: "villeneuve-loubet",
    displayName: "Villeneuve-Loubet",
    postalCode: "06270",
    lat: "43.6581",
    lng: "7.1200",
    heroImage: "/taxi-villeneuve-loubet.jpeg",
    heroImageAlt:
      "Taxi à Villeneuve-Loubet – transferts aéroport Nice et transport médical",
    ogImage: `${SITE}/taxi-villeneuve-loubet.jpeg`,
    metaTitle: "Taxi Villeneuve-Loubet | Aéroport Nice & Conventionné CPAM",
    metaDescription:
      "Réservez votre taxi à Villeneuve-Loubet : aéroport Nice Côte d’Azur, gares SNCF et transport médical conventionné CPAM. Mercedes, chauffeur disponible 24/7.",
    keywords: baseKeywords("Villeneuve-Loubet"),
    hubTeaser:
      "Sur le littoral entre Nice et Cannes : plage ou quartiers résidentiels — prise en charge rapide vers l’aéroport.",
    intro: [
      "Vous habitez **Villeneuve-Loubet** et cherchez un **chauffeur fiable** pour l’**aéroport Nice**, la **gare** ou un **rendez-vous médical** ? Nous desservons tout le territoire communal, du **bourg** aux **zones hôtelières** en passant par le **front de mer**.",
      "**Marina Baie des Anges**, accès à l’**A8** ou à la **route du bord de mer** : votre position est un atout pour rejoindre l’aéroport en général en **quelques minutes**, sauf heures de pointe. Indiquez votre **adresse précise** à la réservation pour un **horaire fiable**.",
      `Appelez le **${PHONE_DISPLAY}** pour un **devis** ou une **mise en route immédiate**.`,
    ],
    localHighlights: [
      "Centre historique et château",
      "Plage de Villeneuve-Loubet",
      "Marina Baie des Anges",
      "Quartiers résidentiels (Pinède, plans d’eau)",
    ],
    airportBlock: {
      title: "Transfert aéroport Nice depuis Villeneuve-Loubet",
      paragraphs: [
        "Le **terminal** de **Nice Côte d’Azur** est l’un des départs les plus demandés depuis **Villeneuve-Loubet**. Nous planifions la prise en charge selon votre **vol** et le **trafic** sur l’A8 ou la **voie littorale**.",
        "En conditions normales, comptez souvent **environ 15 à 25 minutes** selon votre point de départ et l’heure (pics matin / juillet-août).",
      ],
    },
    garesBlock: {
      title: "Gares SNCF et correspondances",
      paragraphs: [
        "La **gare SNCF de Cagnes-sur-Mer** est souvent la **plus proche** pour les **TER** vers Nice ou Cannes. Selon votre itinéraire, **Nice-Ville** est aussi un **pivot** fréquent pour les grandes lignes.",
      ],
      list: [
        { name: "Cagnes-sur-Mer", detail: "TER régional, liaison pratique depuis Villeneuve-Loubet" },
        { name: "Nice-Ville", detail: "Grand hub TGV / TER" },
        { name: "Cannes", detail: "TER littoral est selon dessertes" },
      ],
    },
    cpamBlock: {
      title: "Transport médical conventionné (CPAM)",
      paragraphs: [
        "Pour un **transport assis professionnel** ou un **taxi conventionné** dans le cadre prévu par l’**Assurance Maladie**, renseignez-vous auprès de votre **médecin** et de votre **CPAM**. Nous pouvons vous orienter sur les **informations** utiles à la réservation.",
        "Les **CHU de Nice**, **cliniques** de la métropole ou **centres** du littoral sont des destinations régulières depuis Villeneuve-Loubet.",
      ],
    },
    lieux: {
      title: "Hôtels, cliniques et points utiles",
      items: [
        "Hébergements en bord de mer et près de l’A8",
        "Structures de soins sur Nice ou sur le littoral est accessibles en 15–35 min",
        "Parc d’activités et sorties familiales (selon horaires)",
      ],
    },
    prixBlock:
      "Les **tarifs** dépendent du **compteur réglementaire** ou d’un **forfait** annoncé à l’avance. Demandez un **devis** par téléphone ou via notre **formulaire** — transparence avant la course.",
    neighborIds: ["saint-laurent-du-var", "biot"],
    relatedBlog: {
      href: "/blog/taxi-cagnes-sur-mer-villeneuve-loubet-prix-trajet-2026",
      anchor: "Prix et trajets Villeneuve-Loubet – guide pratique",
    },
    faq: [
      {
        q: "Combien de temps pour rejoindre l’aéroport depuis Villeneuve-Loubet ?",
        a: "Souvent **15 à 25 minutes** selon le quartier de départ et le trafic. Prévoyez une marge pour les **vols internationaux**.",
      },
      {
        q: "Puis-je réserver un retour depuis l’aéroport ?",
        a: "Oui. Indiquez votre **numéro de vol** pour un suivi des **retards** et une prise en charge au **hall arrivées**.",
      },
      {
        q: "Proposez-vous le transport médical CPAM ?",
        a: "Nous assurons des **courses conventionnées** lorsque votre **dossier** et votre **prescription** le permettent. Vérifiez vos droits auprès de la **CPAM**.",
      },
      {
        q: "Quelle gare choisir depuis Villeneuve-Loubet ?",
        a: "**Cagnes-sur-Mer** est en général la plus proche pour le **TER**. Pour un **TGV**, direction **Nice-Ville**.",
      },
    ],
  },

  "saint-laurent-du-var": {
    path: "/taxi-saint-laurent-du-var",
    slug: "saint-laurent-du-var",
    displayName: "Saint-Laurent-du-Var",
    postalCode: "06700",
    lat: "43.6740",
    lng: "7.1917",
    heroImage: "/taxi-saint-laurent-du-var.png",
    heroImageAlt:
      "Taxi à Saint-Laurent-du-Var – proximité aéroport Nice et Polygone Riviera",
    ogImage: `${SITE}/taxi-saint-laurent-du-var.png`,
    metaTitle: "Taxi Saint-Laurent-du-Var | Aéroport Nice & Conventionné CPAM",
    metaDescription:
      "Chauffeur à Saint-Laurent-du-Var : transfert aéroport Nice, courses vers Nice et Cannes, transport médical CPAM. Réponse rapide au 06 63 57 65 34.",
    keywords: baseKeywords("Saint-Laurent-du-Var"),
    hubTeaser:
      "Commune littorale très proche de l’aéroport Nice : idéal pour départs précoces et retours de vol.",
    intro: [
      "**Saint-Laurent-du-Var** concentre commerces (**Polygone Riviera**), bureaux et **zones portuaires**. C’est aussi une commune où l’**aéroport** est **très proche**, ce qui rassure pour les départs matinaux.",
      "Que vous partiez du **front de mer**, du **chef-lieu** ou des **zones d’activités**, nous préparons une **prise en charge ponctuelle** vers **Nice airport**, les **cliniques** ou la **SNCF**.",
      `**Une question ou un devis ?** **${PHONE_DISPLAY}** (également disponible pour planifier plusieurs arrêts).`,
    ],
    localHighlights: [
      "Polygone Riviera et commerces majeurs",
      "Port et promenade",
      "Centre-ville et axes vers Nice",
    ],
    airportBlock: {
      title: "Aéroport Nice : atout géographique depuis Saint-Laurent-du-Var",
      paragraphs: [
        "Nombreux clients rejoignent **Nice Côte d’Azur** en **circulation fluide**. Selon votre adresse dans la commune et l’horaire, comptez typiquement **10 à 20 minutes** jusqu’aux terminaux.",
        "Pour les créneaux **serrés**, réservez la veille ou plus tôt encore en **été**.",
      ],
    },
    garesBlock: {
      title: "Gares et liaison ferroviaire",
      paragraphs: [
        "Les **SNCF locales** peuvent passer par **St-Laurent-du-Var** selon lignes ; **Nice-Saint-Augustin** ou **Cagnes-sur-Mer** sont aussi utilisées suivant trajets.",
      ],
      list: [
        { name: "Saint-Laurent-du-Var (selon dessertes)", detail: "Vérifiez vos horaires sur le site SNCF" },
        { name: "Nice-Ville", detail: "TGV et correspondances grandes lignes" },
        { name: "Cagnes-sur-Mer", detail: "TER fréquent côté littoral" },
      ],
    },
    cpamBlock: {
      title: "Courses médicales depuis Saint-Laurent-du-Var",
      paragraphs: [
        "Les trajets pour **examens**, **consultations spécialisées** ou **soins réguliers** vers **Nice** ou Cannes sont courants.",
        "**Convention CPAM** : prescription et validation **administratives** indispensables avant de garantir une prise en charge.",
      ],
    },
    lieux: {
      title: "Lieux desservis",
      items: [
        "Flux autour du **Polygone Riviera** ou des **ZI** aux heures ouvrées",
        "Zones résidentielles et hôtelières littorales",
        "Liens rapides avec **Nice** ou le **littoral**",
      ],
    },
    prixBlock:
      "Demandez votre **fourchette** ou **montant estimé** avant la course : ainsi vous savez où vous allez avant de monter à bord.",
    neighborIds: ["villeneuve-loubet", "biot", "la-gaude"],
    relatedBlog: {
      href: "/blog/taxi-cagnes-sur-mer-cap-3000-polygone-riviera-saint-laurent-du-var-2026",
      anchor: "Taxi depuis le Polygone et Saint-Laurent-du-Var",
    },
    faq: [
      {
        q: "Saint-Laurent-du-Var est-il la commune la plus proche de l’aéroport ?",
        a: "C’est **l’un des points les plus proches** du **terminaux** ; le temps de trajet reste **variable** selon le trafic et votre adresse exacte.",
      },
      {
        q: "Pouvez-vous me déposer au Polygone puis continuer vers l’aéroport ?",
        a: "Sur **devis** et selon **disponibilité**, les **multi-arrêts** sont possibles — précisez-le à la réservation.",
      },
      {
        q: "Transport CPAM possible ?",
        a: "Oui si votre **situation** le permet. **Médecin** + **caisse** valident le **mode de transport**.",
      },
      {
        q: "Comment rejoindre la gare TGV vite ?",
        a: "**Nice-Ville** est le pivot principal depuis le littoral : nous adaptons **l’heure de départ** à votre contrainte de train.",
      },
    ],
  },

  vence: {
    path: "/taxi-vence",
    slug: "vence",
    displayName: "Vence",
    postalCode: "06140",
    lat: "43.7229",
    lng: "7.1129",
    heroImage: "/taxi-vence.png",
    heroImageAlt:
      "Taxi à Vence – déplacements dans les Alpes-Maritimes et vers l’aéroport",
    ogImage: `${SITE}/taxi-vence.png`,
    metaTitle: "Taxi Vence | Aéroport Nice & chauffeur CPAM",
    metaDescription:
      "Besoin d’un chauffeur à Vence pour l’aéroport Nice, Nice ou Monaco ? Transport médical CPAM sous conditions. Dispo 7j/7 — réservation au 06 63 57 65 34.",
    keywords: baseKeywords("Vence"),
    hubTeaser:
      "Au cœur de l’arrière-pays niçois : montée depuis la plaine jusqu’aux plateaux méditerranéens.",
    intro: [
      "**Vence** attire habitants et visiteurs par sa **citadelle médiévale**, ses **animations culturelles** et sa **fraîcheur** relative l’été. Les **courses** urbaines et les trajets vers la **côte** demandent un **chauffeur** à l’aise sur **routes en lacets**.",
      "Nous assurons **transferts** vers **Nice**, **aéroport**, **Monaco** ou Cannes avec des **véhicules confortables** adaptés au relief.",
      `**Réservation** : **${PHONE_DISPLAY}**.`,
    ],
    localHighlights: [
      "Cité médiévale et chapelle du Rosaire (Matisse)",
      "Quartiers résidentiels en hauteur",
      "Accès vers Col de Vence / arrière-pays",
    ],
    airportBlock: {
      title: "Depuis Vence vers l’aéroport Nice : distance et durée",
      paragraphs: [
        "Le relief **allonge** le trajet par rapport au littoral. En pratique, comptez souvent **25 à 40 minutes** vers **Nice Côte d’Azur** selon heure et itinéraire (**M3365** / liaisons vers l’A8).",
        "Les **départs** pour **vols matinaux** méritent une **marge** confortable.",
      ],
    },
    garesBlock: {
      title: "Gares les plus pratiques depuis Vence",
      paragraphs: [
        "Beaucoup de voyageurs descendent sur **Cagnes-sur-Mer** ou **Nice-Ville** selon la **ligne** choisie.",
      ],
      list: [
        { name: "Cagnes-sur-Mer", detail: "Accès cohérent si vous descendez vers le littoral" },
        { name: "Nice-Ville", detail: "Principal nœud TGV / TER" },
      ],
    },
    cpamBlock: {
      title: "CPAM et rendez-vous de santé",
      paragraphs: [
        "Les trajets médicaux vers **Lagrange** (**CHU Pasteur**) ou autres **sites** nicolais sont récurrents. **Conventionnement** sous conditions **CPAM**.",
      ],
    },
    lieux: {
      title: "À proximité de Vence",
      items: [
        "Saint-Paul-de-Vence pour les événements et galeries",
        "La Colle-sur-Loup pour le patrimoine et résidences",
        "Nice centre pour administrations et spécialistes",
      ],
    },
    prixBlock:
      "Les courses **per-côte-pays / montagne** reflètent le **temps kilométrique** réel. Un **devis** au téléphone évite les surprises.",
    neighborIds: ["la-colle-sur-loup", "saint-paul-de-vence", "biot"],
    relatedBlog: {
      href: "/blog/taxi-cagnes-sur-mer-chu-nice-guide-trajet",
      anchor: "Se rendre au CHU depuis la région niçoise",
    },
    faq: [
      {
        q: "Le trajet aéroport est-il plus long depuis Vence que depuis la côte ?",
        a: "Oui en général, à cause du **relief**. **Précisez** votre adresse à Vence pour **estimation** réaliste.",
      },
      {
        q: "Acceptez-vous les courses nocturnes ?",
        a: "Le service tourne **24h/24** ; certaines nuisances peuvent avoir des **majoration** conformes au tarif officiel.",
      },
      {
        q: "Puis-je combiner deux arrêts (ex. Vence puis aéroport) ?",
        a: "Oui avec **confirmation** chauffeur et **temps estimé** annoncés.",
      },
      {
        q: "Conventionné CPAM pour dialyse à Nice ?",
        a: "Possible si **prescription** et **droits** le permettent — **CPAM** tranche définitivement.",
      },
    ],
  },

  "la-colle-sur-loup": {
    path: "/taxi-la-colle-sur-loup",
    slug: "la-colle-sur-loup",
    displayName: "La Colle-sur-Loup",
    postalCode: "06480",
    lat: "43.6847",
    lng: "7.1039",
    heroImage: "/monaco-cagnes.jpg",
    heroImageAlt:
      "Taxi La Colle-sur-Loup – services vers Nice et l’aéroport de la Côte d’Azur",
    ogImage: `${SITE}/monaco-cagnes.jpg`,
    metaTitle: "Taxi La Colle-sur-Loup | Aéroport Nice & transport CPAM",
    metaDescription:
      "Chauffeur à La Colle-sur-Loup : transferts aéroport Nice, soins à Nice ou sur le littoral, conventionné CPAM si éligible. Appelez le 06 63 57 65 34.",
    keywords: baseKeywords("La Colle-sur-Loup"),
    hubTeaser:
      "Charme de l’arrière-pays, à quelques kilomètres de la plaine pour attraper vite l’A8 ou la M3365.",
    intro: [
      "**La Colle-sur-Loup** conjugue maisons en pierre et **nouveaux quartiers**. Les trajets médicaux et professionnels vers **Nice** ou l’**aéroport** sont fréquents.",
      "Nous connaissons les **zones** de montée depuis la **Loupe** ou la **vésubienne** courte pour gagner les **grandes rocades** sans stress.",
      `**Réponse rapide au** **${PHONE_DISPLAY}**.`,
    ],
    localHighlights: ["Village ancien et restauration locale", "Résidences en hauteur", "Pont du Loup / accès verts"],
    airportBlock: {
      title: "Aéroport Nice depuis La Colle-sur-loup",
      paragraphs: [
        "Comptez en pratique **20 à 30 minutes** vers **Nice Côte d’Azur** selon heure ; le **tunnel** peut fluidifier comme parfois ralentir selon saison.",
      ],
    },
    garesBlock: {
      title: "Gares conseillées",
      paragraphs: ["**Cagnes-sur-Mer** pour **TER littoral**, **Nice-Ville** pour **grandes lignes**."],
      list: [
        { name: "Cagnes-sur-Mer", detail: "~10 km côté carte aérienne puis voies" },
        { name: "Nice-Ville", detail: "TGV / grandes correspondances" },
      ],
    },
    cpamBlock: {
      title: "Médical & CPAM",
      paragraphs: ["Même logique que le reste du **06** : **transport assis professionnel** sur **prescription**. Nous assurons aussi **courses privées premium** hors parcours CPAM.",],
    },
    lieux: {
      title: "Lieux usuels à desservir",
      items: ["Résidences en lisière forestière", "Sorties événements vers Saint-Paul-de-Vence", "Aller-retours hôpitaux nicolais"],
    },
    prixBlock: "**Devis** recommandé pour les **courses aller-retour** avec attente médicale.",
    neighborIds: ["saint-paul-de-vence", "vence", "villeneuve-loubet"],
    relatedBlog: {
      href: "/blog/taxi-cagnes-sur-mer-vers-nice",
      anchor: "Trajets vers Nice depuis la métropole",
    },
    faq: [
      { q: "Peut-on réserver très tôt pour un premier vol ?", a: "Oui ; les **courses nuit ou aube** se planifient souvent avec **confirmation SMS**.", },
      { q: "Puis-je être déposé dans une clinique du littoral ?", a: "Oui ; nous planifions souvent **Colle-sur-Loup ↔ cliniques** sur Nice ou les communes littorales voisines.", },
      { q: "Convention CPAM ?", a: "Voir **médecin** et **caisse**, comme partout.", },
      { q: "Attente à la sortie du rendez-vous ?", a: "Sur **demande** lors de la **commande**, avec réglage au **minute** ou au **forfait** communiqué.", },
    ],
  },

  "la-gaude": {
    path: "/taxi-la-gaude",
    slug: "la-gaude",
    displayName: "La Gaude",
    postalCode: "06610",
    lat: "43.7229",
    lng: "7.1539",
    heroImage: "/place-massena-nice.jpg",
    heroImageAlt: "Taxi La Gaude – liaisons santé et aéroport Côte d’Azur",
    ogImage: `${SITE}/place-massena-nice.jpg`,
    metaTitle: "Taxi La Gaude | Chauffeur aéroport Nice & médical CPAM",
    metaDescription:
      "Taxi La Gaude : dépose aéroport Nice, trajets santé vers Nice ou le littoral, CPAM sous conditions. Service pro 24/7. 06 63 57 65 34.",
    keywords: baseKeywords("La Gaude"),
    hubTeaser: "Plateau au-dessus de Saint-Jeannet avec liaisons rapides vers la métropole niçoise.",
    intro: [
      "**La Gaude**, entre **Saint-Jeannet** et **Saint-Laurent-du-Var**, offre vue et calme tout en restant reliée aux **structures** urbanisées.",
      "Nous gérons **domiciles en hauteur** et trajets médicaux **quotidiens ou ponctuels**.",
      `**Hotline réservation :** ${PHONE_DISPLAY}.`,
    ],
    localHighlights: ["Centre village", "Lots résidentiels en pente douce", "Accès plateau / golf à proximité"],
    airportBlock: {
      title: "Aéroport Nice depuis La Gaude",
      paragraphs: ["En général **22 à 35 minutes** jusqu’aux terminaux suivant axe et créneau horaire."],
    },
    garesBlock: {
      title: "Train",
      paragraphs: ["**Cagnes** ou **Nice** selon vos **connections** après dépose taxi."],
      list: [{ name: "Nice-Ville", detail: "" }, { name: "Cagnes-sur-Mer", detail: "" }],
    },
    cpamBlock: {
      title: "CPAM & santé",
      paragraphs: ["Même cadre légal régional.",],
    },
    lieux: { title: "", items: ["Hôpitaux nicolais", "Cliniques du littoral", "Structures de plateau"] },
    prixBlock: "Demandez **estimation** avec **waiting** médical si besoin.",
    neighborIds: ["vence", "saint-laurent-du-var"],
    relatedBlog: { href: "/blog/transport-medical-cagnes-sur-mer-hopitaux-cliniques", anchor: "Transport médical & hôpitaux autour de Cagnes" },
    faq: [
      { q: "Y a-t-il des surcharges nuit ?", a: "Le **tarif réglementaire** de la **circulation Nice** peut appliquer des **majoration** légales après 19h/week-end.", },
      { q: "Peut-on transporter enfants ?", a: "Réhausseurs sur **demande** précisée avant la mise en route.", },
      { q: "CPAM week-end ?", a: "Soumis aux **droits** du dossier médical uniquement.", },
      { q: "Peut-on aller jusqu’à Monaco ?", a: "Oui comme **course longue distance** planifiée.", },
    ],
  },

  "saint-paul-de-vence": {
    path: "/taxi-saint-paul-de-vence",
    slug: "saint-paul-de-vence",
    displayName: "Saint-Paul-de-Vence",
    postalCode: "06570",
    lat: "43.6947",
    lng: "7.1229",
    heroImage: "/hotels-luxe-monaco.png",
    heroImageAlt: "Saint-Paul-de-Vence – taxi premium vers Nice et événements",
    ogImage: `${SITE}/hotels-luxe-monaco.png`,
    metaTitle: "Taxi Saint-Paul-de-Vence | Nice, aéroport & CPAM",
    metaDescription:
      "Réservez un taxi à Saint-Paul-de-Vence pour l’aéroport Nice, hôtels, galeries ou soins médicaux. Chauffeur local, CPAM sur prescription. 06 63 57 65 34.",
    keywords: baseKeywords("Saint-Paul-de-Vence"),
    hubTeaser: "Village d’artistes très fréquenté — besoin accru de mise en avant des véhicules stationnement difficile pour les visiteurs.",
    intro: [
      "Le **nid d’aigles** méditerranéen est **piéton** en cœur : un **chauffeur** qui connaît **où déposer** vous fait gagner du temps face aux **files** et **parkings** saturés.",
      "Nous assurons **événements**, **MICE**, **hôtels** de prestige et **aller simple** vers **Nice** ou l’**aéroport**.",
      `**Contact :** ${PHONE_DISPLAY}.`,
    ],
    localHighlights: ["Remparts et Fondation Maeght", "Hôtels 5* alentour", "Route des gallery"],
    airportBlock: {
      title: "Aéroport Nice depuis Saint-Paul-de-Vence",
      paragraphs: ["Comptez **25 à 40 minutes** selon dépose autorisée et **affluence touristique**."],
    },
    garesBlock: {
      title: "Gares",
      paragraphs: ["**Cagnes** pour **TER** direction Cannes ou Monaco."],
      list: [{ name: "Cagnes-sur-Mer", detail: "TER" }, { name: "Nice-Ville", detail: "National" }],
    },
    cpamBlock: { title: "CPAM", paragraphs: ["Trajets **santé** vers **Nice** ou le **littoral** ; **convention** si éligible."], },
    lieux: { title: "Lieux", items: ["Maeght", "Remparts", "Colombe d’Or (accès contrôlé)"] },
    prixBlock: "Événements : **forfait** ou **mise à disposition** sur devis.",
    neighborIds: ["la-colle-sur-loup", "vence", "biot"],
    relatedBlog: { href: "/blog/5-lieux-incontournables-cagnes-sur-mer-2025", anchor: "Idées de sorties sur la Côte d’Azur" },
    faq: [
      { q: "Où le taxi peut-il se garer à Saint-Paul ?", a: "Nous **optimisons** la **dépose** légale la plus proche du **point de rendez-vous**.", },
      { q: "Aller à Monaco pour un dîner ?", a: "Oui, **aller-retour** ou **mise à disposition**.", },
      { q: "CPAM pour IRM à Nice ?", a: "Sur **prescription** **transport assis**.", },
      { q: "Peut-on organiser un transfert pour invités étrangers ?", a: "Oui — **pancarte** et **suivi vol** possibles.", },
    ],
  },

  biot: {
    path: "/taxi-biot",
    slug: "biot",
    displayName: "Biot",
    postalCode: "06410",
    lat: "43.6281",
    lng: "7.0961",
    heroImage: "/face-avant-mercedes-glb-2.jpeg",
    heroImageAlt: "Taxi Biot – Mercedes et transferts aéroport Nice",
    ogImage: `${SITE}/face-avant-mercedes-glb-2.jpeg`,
    metaTitle: "Taxi Biot | Aéroport Nice & transport CPAM",
    metaDescription:
      "Taxi à Biot : Sophia Antipolis et littoral tout proche, aéroport Nice en ~20 min selon trafic. CPAM sur prescription. 06 63 57 65 34.",
    keywords: baseKeywords("Biot"),
    hubTeaser: "Village de potiers et vallée du Loup : entre technopole et littoral.",
    intro: [
      "**Biot** relie **Sophia Antipolis**, le **littoral** et **Villeneuve-Loubet**. Les **domiciles** et **bureaux** demandent parfois **deux courses** dans la même matinée.",
      "Nous assurons **domicile → aéroport**, **clinique** ou **gare TGV**.",
      `**${PHONE_DISPLAY}**.`,
    ],
    localHighlights: ["Village vitré", "Zone commerciale / Loup", "Accès rapide A8"],
    airportBlock: {
      title: "Aéroport Nice depuis Biot",
      paragraphs: ["Souvent **15 à 25 minutes** via **A8** ou **M7** selon heure."],
    },
    garesBlock: {
      title: "Gares",
      paragraphs: ["**Biot**, **gares du littoral** (selon dessertes) ou **Cagnes**."],
      list: [
        { name: "Cagnes-sur-Mer", detail: "TER fréquent" },
        { name: "Nice-Ville", detail: "TGV / grandes lignes" },
      ],
    },
    cpamBlock: { title: "CPAM", paragraphs: ["Destinations **CHU** / **cliniques** fréquentes.",], },
    lieux: { title: "", items: ["Sophia", "Littoral Juan-les-Pins", "Marineland (selon horaires)"] },
    prixBlock: "Demandez **prix** pour **course double** (ex. Biot → Sophia → aéroport).",
    neighborIds: ["villeneuve-loubet", "saint-paul-de-vence", "la-colle-sur-loup"],
    relatedBlog: { href: ZONES_DESSERVIES_PATH, anchor: "Toutes les zones desservies depuis Biot" },
    faq: [
      { q: "Biot–Sophia en combien de temps ?", a: "**5 à 15 minutes** selon point exact.", },
      { q: "Peut-on transporter matériel fragile ?", a: "Oui si **emballage** adapté — déclarez le **volume**.", },
      { q: "CPAM pour chimiothérapie à Nice ?", a: "Selon **dossier**.", },
      { q: "Retour port du littoral la nuit ?", a: "Service **24/7**.", },
    ],
  },
};

// Remove null placeholder if any leaked
export function getSector(sectorSlug) {
  const s = SECTORS[sectorSlug];
  if (!s) {
    throw new Error(`Sector inconnu: ${sectorSlug}`);
  }
  return s;
}

export function listSectors() {
  return SECTOR_ORDER.map((id) => ({ id, ...getSector(id) }));
}

/** Liens ville → ville (filtrés : pas de page fictive) */
export function resolveNeighborLinks(neighborIds) {
  return neighborIds
    .filter((id) => Object.prototype.hasOwnProperty.call(SECTORS, id))
    .map((id) => {
      const x = SECTORS[id];
      return { href: x.path, label: x.displayName };
    });
}

export { PHONE_DISPLAY, PHONE_TEL, SITE };
