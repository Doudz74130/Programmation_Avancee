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
npm test        # lance les tests
```

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
- **Objectif :** Voir seulement les projets qui correspondent à un critère, puis pouvoir revoir tous les projets
- **Préconditions :** La section Projets est affichée et il y a au moins un projet

**Scénario nominal (le chemin idéal)**

1. L'utilisateur regarde les critères de filtre au-dessus de la liste.
2. L'utilisateur choisit un critère, par exemple le type « Résidentiel ».
3. Le système met la liste à jour et affiche seulement les projets qui correspondent.
4. Le système montre quel critère est actif.
5. L'utilisateur choisit ensuite « Tous » et revoit tous les projets.

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

J'ai un état `sectionActive` dans App. Selon sa valeur, une seule section s'affiche à la fois. On n'utilise pas de librairie de routage.

```text
App                              état : sectionActive, projets
│
├── Header                       props : sectionActive, onChangerSection
│   └── NavBar (React-Bootstrap)
│       └── Nav.Link × 5         Accueil · Projets · Services · À propos · Nous joindre
│
└── Section affichée (selon sectionActive)
    │
    ├── Accueil                  props : onChangerSection
    │
    ├── Projets                  props : projets, onRetirerProjet
    │   │                        état : filtreActif
    │   ├── FiltreProjets        props : filtreActif, onChangerFiltre
    │   │                        (boutons de filtre + bouton « Tous »)
    │   ├── ProjectCard × 12     props : projet, onRetirerProjet
    │   └── Message vide         affiché si aucun projet ne correspond au filtre
    │
    ├── Services
    ├── APropos
    └── NousJoindre
```

## Ce que fait chaque composant

| Composant         | Rôle                                                                                                                 | Props reçues                           | État géré                   |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ------------------------------ |
| `App`           | Composant principal. Garde la section affichée et la liste des projets. Contient la fonction pour retirer un projet. | —                                      | `sectionActive`, `projets` |
| `Header`        | Affiche le menu et montre la section active.                                                                          | `sectionActive`, `onChangerSection` | —                             |
| `Accueil`       | Présente l'agence et ses activités, avec un bouton vers les projets.                                                | `onChangerSection`                    | —                             |
| `Projets`       | Affiche les projets, calcule la liste filtrée avec`filter()` et garde le filtre actif.                             | `projets`, `onRetirerProjet`        | `filtreActif`                |
| `FiltreProjets` | Affiche les boutons de filtre et montre lequel est actif.                                                             | `filtreActif`, `onChangerFiltre`    | —                             |
| `ProjectCard`   | Affiche les informations d'un projet et permet de le retirer.                                                         | `projet`, `onRetirerProjet`         | —                             |
| `Services`      | Présente les services de l'agence.                                                                                   | —                                      | —                             |
| `APropos`       | Présente l'agence, sa mission et ses valeurs.                                                                        | —                                      | —                             |
| `NousJoindre`   | Affiche les coordonnées de l'agence.                                                                                 | —                                      | —                             |

## Réutilisation

- `ProjectCard` est écrite une seule fois et utilisée pour les 12 projets. Je ne recopie pas le JSX de la carte.
- `FiltreProjets` est écrite une seule fois, peu importe le nombre de critères.
- La fonction pour retirer un projet est écrite une seule fois dans `App` et passée à toutes les cartes.

## Comment les données circulent

1. `App` a la liste des projets et la donne à `Projets` avec la prop `projets`.
2. `Projets` utilise `filter()` sur cette liste selon son état `filtreActif`.
3. Les projets sont transformés en cartes avec `map()`, avec `key={projet.id}`.
4. Chaque `ProjectCard` reçoit un seul projet dans la prop `projet`, plus la fonction `onRetirerProjet`.
5. Quand on clique, la fonction remonte jusqu'à `App`, qui refait une nouvelle liste avec `filter()` et met à jour son état.
6. Pareil pour `Header`, qui remonte le changement de section à `App` avec la prop `onChangerSection`.

Pourquoi j'ai mis les états à ces endroits :

- **`projets` dans `App`** : c'est la donnée utilisée par plusieurs composants et elle change quand on retire un projet. Si je la mets dans `App`, `Projets` peut la recevoir par props et faire remonter le retrait.
- **`sectionActive` dans `App`** : `Header` a besoin de savoir quelle section est active, et la section affichée dépend de ça. Les deux sont frères, donc l'état va chez leur parent.
- **`filtreActif` dans `Projets`** : c'est le seul composant qui en a besoin pour calculer la liste filtrée. Le mettre plus haut ne servirait à rien.

## Organisation des fichiers

```text
src/
├── App.js
├── index.js
├── index.css
├── components/
│   ├── Header.js                + Header.module.css
│   ├── Accueil.js               + Accueil.module.css
│   ├── Projets.js               + Projets.module.css
│   ├── FiltreProjets.js         + FiltreProjets.module.css
│   ├── ProjectCard.js           + ProjectCard.module.css
│   ├── Services.js              + Services.module.css
│   ├── APropos.js               + APropos.module.css
│   └── NousJoindre.js           + NousJoindre.module.css
└── data/
    └── projets.js               les projets
```

L'interface utilise React-Bootstrap, et un CSS Module par composant pour garder les styles locaux et éviter les conflits de noms de classes.

## Ce qui peut changer

Cet arbre est une première version, il peut évoluer pendant que je code :

- si un composant ne sert à rien, je le fusionne avec un autre ;
- si je vois que je répète du code, je peux créer un composant réutilisable ;
- les sections Services, À propos et Nous joindre peuvent avoir besoin d'être découpées autrement selon leur contenu.

---

# Résultat attendu

À la fin, je dois avoir un site immobilier qui fonctionne, qui est accessible et agréable à utiliser, et qui permet de découvrir l'agence et de consulter ses projets.

# Sources des images

- `src/assets/Agence.png` et `src/assets/Logo.png` : ressources fournies avec le projet de départ.
- Images des projets : à compléter.

# Capture d'écran

À insérer avant la remise finale : `docs/capture-finale.png`
