
# TP1 — Agence financière immobilière

**Programmation avancée — 420-VA9-LP**
**Dorian Hemar**

Site web d'une agence immobilière. L'agence achète des terrains, finance et développe des projets immobiliers, puis revend des propriétés résidentielles ou commerciales. Le site présente l'agence et permet de consulter ses projets.

## Lancer l'application

```bash
npm install
npm start
```

L'application s'ouvre sur [http://localhost:3000](http://localhost:3000).

Autres commandes :

```bash
npm run build   # version de production dans build/
```

---

# Corrections du code de départ

Le projet fourni par l'enseignante contenait des erreurs volontaires. Je les ai repérées et corrigées pour que l'application démarre et s'affiche correctement.

## Erreurs qui empêchaient le projet de compiler

Sans ces corrections, le serveur affichait « Failed to compile » et rien ne s'affichait dans le navigateur.

| Fichier                       | Erreur                                                                                | Correction                 |
| ----------------------------- | ------------------------------------------------------------------------------------- | -------------------------- |
| `src/App.js`                | `import Accueil from "./components/Acceuil"` — le fichier s'appelle `Accueil.js` | `"./components/Accueil"` |
| `src/App.js`                | prop`titreSite="Agence Horizon"` alors que le composant attend `titre`            | `titre="Agence Horizon"` |
| `src/components/Accueil.js` | `onclick={onChanger}` en minuscules, React exige `onClick`                        | `onClick={onChanger}`    |
| `src/components/Accueil.js` | `import "./Acceuil.css"` — le fichier s'appelle `Accueil.css`                    | `"./Accueil.css"`        |

## Erreurs dans le CSS

Ces erreurs ne bloquaient pas la compilation, mais les styles ne s'appliquaient pas : le navigateur ignore silencieusement une propriété CSS mal orthographiée.

| Fichier                        | Erreur                                              | Correction             |
| ------------------------------ | --------------------------------------------------- | ---------------------- |
| `src/components/Accueil.css` | `padding: 30` sans unité, la valeur est ignorée | `padding: 30px`      |
| `src/components/Accueil.css` | `background-colour` n'existe pas en CSS           | `background-color`   |
| `src/components/Accueil.css` | `font-weigth` (faute de frappe)                   | `font-weight`        |
| `src/components/Accueil.css` | `text-align: centers`                             | `text-align: center` |

## Autre erreur trouvée

| Fichier        | Erreur                                                                                                                                                     | Correction                     |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `src/App.js` | `onChanger={() => changerMessage}` passait la référence à la fonction au lieu de l'appeler : le bouton « Voir les projets » ne faisait rien au clic | `onChanger={changerMessage}` |

## Problème d'accord entre le JSX et le CSS

Le composant utilisait `className="hero"` sur la balise `<section>`, alors que la feuille de style définissait la classe `.heros`. Les deux noms ne correspondaient pas, donc le style ne s'appliquait pas. J'ai accordé les deux sur `heros`.

En JavaScript, une classe CSS mal orthographiée ne produit aucune erreur : le style est simplement ignoré. C'est ce qui rend ces erreurs difficiles à repérer sans regarder la page.

## Ménage effectué

Suppression des fichiers fournis par Create React App qui n'étaient plus utilisés : `src/App.css`, `src/App.test.js` et `src/logo.svg`. Ils n'étaient importés nulle part dans le projet.

---

# Analyse des besoins

Ce que le site doit permettre :

- présenter l'entreprise et ce qu'elle fait ;
- montrer les projets de l'agence ;
- permettre de chercher et consulter les projets facilement ;
- offrir une navigation simple ;
- s'afficher correctement sur toutes les tailles d'écran.

## Besoins fonctionnels

Ce que l'utilisateur doit pouvoir faire :

**Découvrir l'agence**

- voir une page d'accueil qui présente l'agence et ses activités ;
- comprendre que l'agence achète des terrains, finance et développe des projets ;
- comprendre qu'elle met en marché et revend des propriétés.

**Naviguer**

- aller dans les sections Accueil, Projets, Services, À propos et Nous joindre ;
- passer d'une section à l'autre facilement ;
- voir dans quelle section on est.

**Consulter les projets**

- voir une liste d'au moins 12 projets ;
- voir les informations importantes de chaque projet ;
- pouvoir ouvrir un projet pour voir plus de détails.

**Chercher et filtrer**

- filtrer les projets selon un critère, par exemple le type ou le statut ;
- voir quel filtre est actif ;
- enlever le filtre pour revoir tous les projets.

**Gérer l'affichage des projets**

- retirer un projet de la liste directement dans l'interface ;
- comprendre ce qui s'est passé après le retrait ;
- voir un message quand aucun projet ne correspond au filtre.

## Informations à afficher pour chaque projet

- un identifiant unique ;
- un titre ;
- une ville ou un secteur ;
- un type de projet ;
- un statut ;
- une courte description ;
- une information financière ou une superficie ;
- une image.

Il faut que ces informations soient assez claires pour qu'on puisse comparer les projets rapidement.

## Ce qui doit se passer quand l'utilisateur interagit

- la section demandée s'affiche, et l'interface reste cohérente ;
- on voit quelle section est active ;
- quand on choisit un filtre, la liste se met à jour ;
- on voit toujours quel filtre est actif après la mise à jour ;
- quand on enlève le filtre, on revoit tous les projets ;
- quand on retire un projet, seul ce projet disparaît ;
- un message s'affiche si la liste filtrée est vide ;
- le contenu reste lisible après chaque action.

## Contraintes de qualité

- **Clarté :** les textes et les boutons doivent être compréhensibles.
- **Cohérence visuelle :** les pages doivent se ressembler, pas chacune son style.
- **Facilité d'utilisation :** les actions principales doivent se repérer facilement.
- **Retour visuel :** l'utilisateur doit voir quelle section ou quel filtre est actif.
- **Lisibilité :** l'information doit être aérée et facile à parcourir.
- **Responsive :** ça doit marcher sur ordinateur, tablette et téléphone.
- **Accessibilité :** les contrastes et la taille des textes doivent rester confortables.
- **Cohérence des données :** chaque projet doit avoir toutes les informations demandées et un identifiant unique.

---

# Cas d'utilisation

Les cas d'utilisation décrivent ce que l'utilisateur peut faire sur le site.

## CU01 — Accéder au site internet

- **Acteur principal :** Utilisateur
- **Objectif :** Découvrir l'agence
- **Préconditions :** Le site est accessible

**Scénario nominal (le chemin idéal)**

1. L'utilisateur arrive sur la page d'accueil.
2. Le système affiche la page d'accueil avec l'agence et ses activités.
3. L'utilisateur comprend que l'agence achète des terrains, finance et développe des projets.
4. L'utilisateur comprend que l'agence met en marché et revend des propriétés.

**Conditions et scénarios alternatifs (si... alors...)**

- **Si** l'utilisateur arrive directement dans une autre section que l'accueil :
  - **Alors** le contenu reste compréhensible même sans avoir lu l'accueil.

**Postconditions**

- **Succès :** la page d'accueil s'affiche et l'utilisateur a une vue d'ensemble de l'agence.
- **Échec :** la page ne s'affiche pas, ou les activités de l'agence ne sont pas visibles.

**Contraintes**

- Les textes doivent être clairs et bien écrits en français.
- L'interface doit rester lisible sur toutes les tailles d'écran.

## CU02 — Naviguer entre les sections

- **Acteur principal :** Utilisateur
- **Objectif :** Aller dans la section voulue : Accueil, Projets, Services, À propos ou Nous joindre
- **Préconditions :** Le site est affiché et on voit le menu

**Scénario nominal (le chemin idéal)**

1. L'utilisateur repère le menu en haut de la page.
2. L'utilisateur clique sur une section.
3. Le système cache la section précédente et affiche la nouvelle, sans recharger la page.
4. Le système met en évidence l'onglet de la section affichée.

**Conditions et scénarios alternatifs (si... alors...)**

- **Si** l'utilisateur clique sur la section où il est déjà :
  - **Alors** rien ne change et l'onglet reste actif.
- **Si** l'utilisateur est sur un petit écran :
  - **Alors** le menu se replie dans un menu déroulant et reste utilisable.

**Postconditions**

- **Succès :** la section demandée s'affiche et on voit quel onglet est actif.
- **Échec :** aucune section ne s'affiche, ou plusieurs sections s'affichent en même temps.

**Contraintes**

- Une seule section visible à la fois.
- Il faut voir quelle section est active.
- On n'utilise pas de librairie de routage : la navigation se fait par affichage conditionnel.

## CU03 — Consulter la liste des projets

- **Acteur principal :** Utilisateur
- **Objectif :** Voir les projets immobiliers de l'agence
- **Préconditions :** L'utilisateur est dans la section Projets

**Scénario nominal (le chemin idéal)**

1. L'utilisateur ouvre la section Projets.
2. Le système affiche les projets sous forme de cartes.
3. Chaque carte montre le titre, la ville, le type, le statut, une courte description, une information financière ou une superficie, et une image.
4. L'utilisateur regarde la liste et compare les projets.

**Conditions et scénarios alternatifs (si... alors...)**

- **Si** il n'y a aucun projet :
  - **Alors** le système affiche un message qui dit qu'il n'y a aucun projet.
- **Si** l'image d'un projet ne charge pas :
  - **Alors** un texte de remplacement s'affiche et la carte reste lisible.

**Postconditions**

- **Succès :** tous les projets sont affichés et leurs informations sont lisibles.
- **Échec :** la liste ne s'affiche pas, ou il manque des informations sur un projet.

**Contraintes**

- Minimum 12 projets dans la liste.
- Les cartes doivent être générées à partir des données, pas écrites une par une.
- Chaque projet a un identifiant unique.
- Ça doit rester lisible sur ordinateur, tablette et téléphone.

## CU04 — Filtrer les projets et enlever le filtre

- **Acteur principal :** Utilisateur
- **Objectif :** Voir seulement les projets qui correspondent aux critères choisis, puis pouvoir revoir tous les projets
- **Préconditions :** La section Projets est affichée et il y a au moins un projet

**Scénario nominal (le chemin idéal)**

1. L'utilisateur regarde les critères de filtre au-dessus de la liste.
2. L'utilisateur choisit un critère, par exemple le type « Résidentiel ».
3. Le système met la liste à jour et affiche seulement les projets qui correspondent.
4. Le système montre quel critère est actif.
5. L'utilisateur choisit ensuite « Tous » et revoit tous les projets.

**Critères disponibles**

Les filtres sont regroupés en quatre critères, qui peuvent être combinés :

| Critère | Contrôle | Valeurs possibles |
| --- | --- | --- |
| Type de projet | Boutons | Tous · Résidentiel · Commercial · Terrain · Mixte |
| Statut | Boutons | Tous · En cours · Terminé · À venir |
| Prix | Curseur à deux poignées | De 0 $ à 8 000 000 $, par tranches de 100 000 $ |
| Superficie | Curseur à deux poignées | De 0 m² à 35 000 m², par tranches de 500 m² |

Les deux curseurs sont au maximum au départ, donc tous les projets sont affichés. On réduit l'intervalle pour ne garder que les projets dont le prix ou la superficie tombe à l'intérieur.

**Conditions et scénarios alternatifs (si... alors...)**

- **Si** aucun projet ne correspond au critère :
  - **Alors** le système affiche un message qui dit qu'aucun projet ne correspond au filtre.
- **Si** l'utilisateur change de critère alors qu'un filtre est déjà actif :
  - **Alors** le nouveau critère remplace l'ancien et la liste est recalculée.
- **Si** aucun filtre n'est actif et que l'utilisateur clique sur « Tous » :
  - **Alors** la liste est déjà complète, donc rien ne change.
- **Si** des projets ont été retirés avant :
  - **Alors** ils ne reviennent pas quand on enlève le filtre.

**Postconditions**

- **Succès :** la liste correspond au filtre choisi et on voit lequel est actif. Après avoir enlevé le filtre, tous les projets restants sont affichés.
- **Échec :** la liste ne correspond pas au filtre, on ne voit pas quel filtre est actif, ou des projets retirés reviennent.

**Contraintes**

- Le filtre actif est gardé dans un état et reste visible après la mise à jour.
- La liste filtrée est recalculée sans modifier les données de départ.
- Enlever le filtre ne doit pas faire revenir les projets retirés.
- Les critères proposés doivent correspondre aux valeurs qu'on a vraiment dans les données.

## CU05 — Retirer un projet de la liste

- **Acteur principal :** Utilisateur
- **Objectif :** Enlever de l'affichage un projet qui n'intéresse pas l'utilisateur
- **Préconditions :** La section Projets est affichée et il y a au moins un projet

**Scénario nominal (le chemin idéal)**

1. L'utilisateur repère le projet à retirer et le bouton sur la carte.
2. L'utilisateur clique sur le bouton de retrait.
3. Le système enlève seulement ce projet et met l'affichage à jour.
4. Les autres projets restent affichés pareil, ce qui montre que l'action a marché.

**Conditions et scénarios alternatifs (si... alors...)**

- **Si** le projet retiré était le dernier affiché :
  - **Alors** le système affiche le message qui dit qu'aucun projet ne correspond au filtre.
- **Si** un filtre est actif au moment du retrait :
  - **Alors** le filtre reste actif et la liste est recalculée sans le projet retiré.
- **Si** l'utilisateur retire plusieurs projets :
  - **Alors** chaque retrait enlève seulement le projet visé et la liste reste correcte.

**Postconditions**

- **Succès :** le projet visé n'est plus là, les autres projets sont intacts et l'affichage reste correct.
- **Échec :** plusieurs projets disparaissent, ou ce n'est pas le bon projet qui est retiré.

**Contraintes**

- Seul le projet visé doit être retiré.
- La liste est reconstruite à partir des données, sans toucher aux autres projets.
- L'utilisateur doit comprendre tout de suite ce qui s'est passé.

## CU06 — Consulter les informations de l'agence

Cette fiche regroupe les trois sections d'information : Services, À propos et Nous joindre. Dans ces sections il n'y a rien à saisir, on affiche seulement du contenu.

- **Acteur principal :** Utilisateur
- **Objectif :** Connaître les services de l'agence, son identité et ses coordonnées
- **Préconditions :** Le site est accessible

**Scénario nominal (le chemin idéal)**

1. L'utilisateur ouvre la section Services.
2. Le système présente les activités de l'agence : achat de terrains, financement et développement de projets, mise en marché et revente de propriétés.
3. L'utilisateur ouvre la section À propos et le système présente l'agence, son rôle et sa mission.
4. L'utilisateur ouvre la section Nous joindre et le système affiche les coordonnées : adresse, téléphone, courriel et heures d'ouverture, avec un moyen de contact direct.
5. L'utilisateur utilise le moyen de contact qu'il préfère.

**Conditions et scénarios alternatifs (si... alors...)**

- **Si** l'utilisateur arrive directement dans une de ces sections :
  - **Alors** le contenu reste compréhensible sans avoir lu le reste du site.
- **Si** une image ne charge pas :
  - **Alors** la section reste lisible et la mise en page ne casse pas.
- **Si** l'utilisateur est sur un téléphone :
  - **Alors** le lien du téléphone permet d'appeler directement.

**Postconditions**

- **Succès :** l'utilisateur a compris les services et l'identité de l'agence, et il a les coordonnées.
- **Échec :** les informations sont absentes, incomplètes ou pas lisibles.

**Contraintes**

- Les textes doivent être clairs et bien écrits en français.
- Les trois sections doivent se ressembler visuellement.
- Il n'y a pas de formulaire à faire : ces sections sont seulement informatives.

## CU07 — Consulter le détail d'un projet

- **Acteur principal :** Utilisateur
- **Objectif :** Voir plus d'informations sur un projet qui intéresse l'utilisateur
- **Préconditions :** La section Projets est affichée et il y a au moins un projet

**Scénario nominal (le chemin idéal)**

1. L'utilisateur repère sur une carte le projet qui l'intéresse.
2. L'utilisateur clique sur ce projet.
3. Le système affiche les détails : description complète, type, statut, ville, information financière et superficie.
4. L'utilisateur ferme le détail et retrouve la liste comme avant.

**Conditions et scénarios alternatifs (si... alors...)**

- **Si** l'utilisateur clique sur un autre projet alors qu'un détail est déjà ouvert :
  - **Alors** le système remplace le détail par celui du nouveau projet.
- **Si** un filtre est actif quand l'utilisateur ouvre un détail :
  - **Alors** le filtre reste actif après la fermeture.

**Postconditions**

- **Succès :** les détails du bon projet s'affichent, puis la liste revient comme avant.
- **Échec :** le détail ne s'affiche pas, ou ce n'est pas le bon projet.

**Contraintes**

- Le détail doit correspondre au projet cliqué.
- Ouvrir et fermer le détail ne doit pas modifier la liste.
- Ce besoin vient de l'analyse. Si je manque de temps, je le ferai à la fin.

---

# Arbre des composants

`App` garde un état `sectionActive`. Selon sa valeur, `Contenu` affiche une seule section à la fois : c'est l'affichage conditionnel. On n'utilise pas de librairie de routage.

```text
App                              état : sectionActive, projets, projetChoisi
│
├── Menu                         props : sectionActive, onChangerSection
│   └── 5 boutons                Accueil · Projets · Services · À propos · Nous joindre
│
└── Contenu                      affiche la section selon sectionActive
    │
    ├── Accueil                  props : onVoirProjets
    │
    ├── Projets                  props : projets, onOuvrirProjet, onRetirerProjet
    │   │                        état : type, statut, prix, superficie
    │   ├── FiltreProjets        props : les 4 filtres + leurs 4 fonctions
    │   │   │                    2 groupes de boutons : type de projet et statut
    │   │   └── Curseur × 2      props : bornes, valeurs, onChanger, formater
    │   │                        un curseur pour le prix, un pour la superficie
    │   ├── Alert                message affiché si aucun projet ne correspond
    │   └── ProjectCard × 12     props : projet, onOuvrir, onRetirer
    │
    ├── Services                 aucune prop, aucun état
    ├── APropos                  aucune prop, aucun état
    ├── NousJoindre              aucune prop, aucun état
    │
    └── ProjetDetail             remplace la section si un projet est choisi
                                 props : projet, onRetour
```

## Ce que fait chaque composant

| Composant | Rôle | Props reçues | État géré |
| --- | --- | --- | --- |
| `App` | Garde les états principaux et les fonctions qui les modifient. | — | `sectionActive`, `projets`, `projetChoisi` |
| `Menu` | Affiche les 5 sections et met en évidence celle qui est active. | `sectionActive`, `onChangerSection` | — |
| `Contenu` | Affiche la bonne section selon `sectionActive`. C'est ici que se fait l'affichage conditionnel. | `sectionActive`, `projets`, `projetChoisi` + les fonctions | — |
| `Accueil` | Présente l'agence et ses activités, avec un bouton vers les projets. | `onVoirProjets` | — |
| `Projets` | Calcule la liste filtrée avec `filter()` et affiche les cartes avec `map()`. | `projets`, `onOuvrirProjet`, `onRetirerProjet` | `type`, `statut`, `prix`, `superficie` |
| `FiltreProjets` | Affiche les deux groupes de boutons et les deux curseurs, et montre quel filtre est actif. | `type`, `statut`, `prix`, `superficie` + les 4 fonctions | — |
| `Curseur` | Curseur réutilisable à deux poignées pour choisir un intervalle. Utilisé pour le prix et pour la superficie. | `min`, `max`, `pas`, `valeurMin`, `valeurMax`, `onChanger`, `formater` | — |
| `ProjectCard` | Affiche les informations d'un projet, avec le badge de statut et les boutons. | `projet`, `onOuvrir`, `onRetirer` | — |
| `ProjetDetail` | Affiche la fiche complète d'un projet sélectionné. | `projet`, `onRetour` | — |
| `Services` | Présente les services de l'agence. | — | — |
| `APropos` | Présente l'agence, ses activités et ses valeurs. | — | — |
| `NousJoindre` | Affiche les coordonnées de l'agence. | — | — |

## Réutilisation

- `ProjectCard` est écrite une seule fois et utilisée pour les 12 projets. Je ne recopie pas le JSX de la carte.
- `FiltreProjets` est écrite une seule fois et couvre les quatre critères de filtre.
- La fonction de retrait est écrite une seule fois dans `App` et passée à toutes les cartes.
- `Services`, `APropos` et `NousJoindre` partagent le même CSS Module (`InfoSection.module.css`), puisque leur mise en page est identique.
- Les deux groupes de boutons de `FiltreProjets` utilisent la même fonction `variantFiltre` et la même structure de rendu.
- `Curseur` est écrite une seule fois et réutilisée pour le prix et pour la superficie.

## Comment les données circulent

1. `App` garde la liste des projets et la donne à `Contenu` par la prop `projets`.
2. `Contenu` la transmet à `Projets` quand la section Projets est active.
3. `Projets` applique `filter()` sur cette liste selon ses états `type`, `statut`, `prix` et `superficie`.
4. Les projets restants sont transformés en cartes avec `map()`, avec `key={projet.id}`.
5. Chaque `ProjectCard` reçoit un seul projet par la prop `projet`, plus les fonctions `onOuvrir` et `onRetirer`.
6. Quand on clique sur « Retirer », la fonction remonte jusqu'à `App`, qui refait une nouvelle liste avec `filter()` et met à jour son état.
7. Pareil pour `Menu`, qui remonte le changement de section à `App` par `onChangerSection`.

Pourquoi les états sont à ces endroits :

- **`projets` dans `App`** : c'est la donnée partagée par plusieurs sections, et elle doit être modifiée par le retrait d'un projet.
- **`projetChoisi` dans `App`** : le détail d'un projet remplace la section affichée, donc l'état doit être au-dessus de `Contenu`.
- **`sectionActive` dans `App`** : `Menu` doit savoir quelle section est active et `Contenu` doit savoir laquelle afficher.
- **`type`, `statut`, `prix` et `superficie` dans `Projets`** : c'est le seul composant qui en a besoin pour calculer la liste affichée.

## Organisation des fichiers

```text
src/
├── App.js                       états principaux + fonctions
├── index.js                     point d'entrée, importe Bootstrap
├── index.css                    palette de couleurs et styles globaux
├── components/
│   ├── Menu.js                  + Menu.module.css
│   ├── Contenu.js               affichage conditionnel des sections
│   ├── Accueil.js               + Accueil.module.css
│   ├── Projets.js               + Projets.module.css
│   ├── FiltreProjets.js         + FiltreProjets.module.css
│   ├── ProjectCard.js           + ProjectCard.module.css
│   ├── ProjetDetail.js          + ProjetDetail.module.css
│   ├── Services.js              ┐
│   ├── APropos.js               ├ + InfoSection.module.css (partagé)
│   └── NousJoindre.js           ┘
├── data/
│   └── Projects.js              les 12 projets
└── assets/                      images du site et des projets
```

L'interface utilise React-Bootstrap pour les composants d'affichage, et un CSS Module par composant pour garder les styles locaux et éviter les conflits de noms de classes.

## Ce qui peut changer

- si un composant ne sert à rien, je le fusionne avec un autre ;
- si je vois que je répète du code, je peux créer un composant réutilisable ;
- les sections Services, À propos et Nous joindre peuvent avoir besoin d'être découpées autrement selon leur contenu.

---

# Résultat attendu

À la fin, je dois avoir un site immobilier qui fonctionne, qui est accessible et agréable à utiliser, et qui permet de découvrir l'agence et de consulter ses projets.

# Sources

**Images**

- `src/assets/Agence.png` et `src/assets/Logo.png` : ressources fournies avec le projet de départ.
- Photos des projets : [Pexels](https://www.pexels.com) — photographes scottwebb, mgshotz, egorkomarov, pixabay, tobilobababs, danielwells67, netoo, ranamatloob567, tigran-arutyunyan, fotodruk, introspectivedsgn.

**Textes**

- Les textes des sections Services et À propos ont été rédigés d'après les sites de [Dominia](https://dominia.ca/a-propos/) et de [Groupe Montoni](https://groupemontoni.com/fr/compagnie), adaptés aux activités de l'agence du TP.
- Le reste du contenu (présentation de l'agence, description des 12 projets, coordonnées) est fictif et a été écrit pour ce travail.

# Capture d'écran

![Résultat final](docs/capture-finale.png)

La capture montre la liste des projets avec les filtres et les cartes.
