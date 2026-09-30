import condoVerre from "../assets/condo/pexels-pixabay-221506.jpg";
import condoVieuxQuebec from "../assets/condo/pexels-_theframetheory_-1761441424-39467011.jpg";

import bureauxLaval from "../assets/bureaux/pexels-mgshotz-17366012.jpg";
import bureauxQuebec from "../assets/bureaux/pexels-scottwebb-305833.jpg";
import bureauxBoucherville from "../assets/bureaux/pexels-egorkomarov-13219418.jpg";

import mixteDame from "../assets/projet/pexels-tigran-arutyunyan-2155985272-34037833.jpg";

import maisonBriques from "../assets/condo/pexels-tobilobababs-36611304.jpg";
import maisonCarport from "../assets/projet/pexels-ranamatloob567-36871546.jpg";
import maisonChalet from "../assets/projet/pexels-danielwells67-30681542.jpg";
import maisonModerne from "../assets/projet/pexels-netoo-30484316.jpg";

import terrainRoute from "../assets/terrainvide/pexels-fotodruk-38463990.jpg";
import terrainAutoroute from "../assets/terrainvide/pexels-introspectivedsgn-4061983.jpg";

const projets = [
  {
    id: 1,
    titre: "Place du Marché",
    ville: "Longueuil",
    type: "Mixte",
    statut: "En cours",
    description:
      "Projet mixte avec commerces au rez-de-chaussée et logements aux étages supérieurs, en plein cœur du centre-ville.",
    prix: 6400000,
    superficie: 7300,
    image: mixteDame,
  },
  {
    id: 2,
    titre: "Villas du Lac",
    ville: "Magog",
    type: "Résidentiel",
    statut: "Terminé",
    description:
      "Quinze villas unifamiliales de style contemporain avec accès privé au lac et sentiers aménagés.",
    prix: 2750000,
    superficie: 14200,
    image: maisonCarport,
  },
  {
    id: 3,
    titre: "Résidence des Érables",
    ville: "Saint-Jérôme",
    type: "Résidentiel",
    statut: "En cours",
    description:
      "Habitations contemporaines en béton et bois, construites sur des lots paysagers à proximité des écoles et des services.",
    prix: 3100000,
    superficie: 15400,
    image: maisonModerne,
  },
  {
    id: 4,
    titre: "Condo Le Trifecta",
    ville: "Montréal",
    type: "Résidentiel",
    statut: "Terminé",
    description:
      "Immeuble de 36 condos avec toit-terrasse commun, situé à distance de marche du métro.",
    prix: 4200000,
    superficie: 4200,
    image: condoVerre,
  },
  {
    id: 5,
    titre: "Bureaux Le Cobalt",
    ville: "Québec",
    type: "Commercial",
    statut: "En cours",
    description:
      "Immeuble de bureaux de quatre étages visant une certification environnementale, avec cases de stationnement.",
    prix: 7300000,
    superficie: 9800,
    image: bureauxQuebec,
  },
  {
    id: 6,
    titre: "Centre Commercial Rive-Nord",
    ville: "Laval",
    type: "Commercial",
    statut: "Terminé",
    description:
      "Centre commercial de proximité regroupant douze locaux, dont une épicerie et une pharmacie.",
    prix: 5800000,
    superficie: 8600,
    image: bureauxLaval,
  },
  {
    id: 7,
    titre: "Espace Industriel Sud",
    ville: "Boucherville",
    type: "Commercial",
    statut: "En cours",
    description:
      "Bâtiment industriel léger avec quais de chargement, entreposage et bureaux administratifs adjacents.",
    prix: 4950000,
    superficie: 5000,
    image: bureauxBoucherville,
  },
  {
    id: 8,
    titre: "Le Domaine du Boisé",
    ville: "Repentigny",
    type: "Résidentiel",
    statut: "En cours",
    description:
      "Ensemble résidentiel de moyenne densité aménagé en bordure du boisé, avec commerces de proximité au rez-de-chaussée.",
    prix: 2750000,
    superficie: 18700,
    image: maisonBriques,
  },
  {
    id: 9,
    titre: "Maison du Vieux-Port",
    ville: "Québec",
    type: "Résidentiel",
    statut: "En cours",
    description:
      "Immeuble résidentiel de style patrimonial restauré, à quelques pas du Vieux-Port et des restaurants.",
    prix: 3900000,
    superficie: 2100,
    image: condoVieuxQuebec,
  },
  {
    id: 10,
    titre: "Le Chalet des Bois",
    ville: "Oka",
    type: "Résidentiel",
    statut: "Terminé",
    description:
      "Chalet contemporain à toit cathédrale avec grandes fenêtres vitrées, construit sur un terrain boisé.",
    prix: 1250000,
    superficie: 5400,
    image: maisonChalet,
  },
  {
    id: 11,
    titre: "Terrain de la Rivière",
    ville: "Blainville",
    type: "Terrain",
    statut: "À venir",
    description:
      "Grand terrain avec accès par un rang, prêt à accueillir un projet résidentiel de faible densité.",
    prix: 890000,
    superficie: 21000,
    image: terrainRoute,
  },
  {
    id: 12,
    titre: "Terrain Industriel Nord",
    ville: "Mirabel",
    type: "Terrain",
    statut: "À venir",
    description:
      "Terrain de grande superficie situé près d'un échangeur autoroutier, zoné pour un usage industriel léger.",
    prix: 1620000,
    superficie: 34000,
    image: terrainAutoroute,
  },
];

export default projets;
