# Cahier des charges

## 1. Description du projet

L'objectif de ce projet est de développer le site web d'une agence immobilière qui participe à de nombreux projets. Ses activités consistent notamment à acheter des terrains, à financer le développement de projets et à revendre des propriétés résidentielles ou commerciales.

L'agence fait appel à nos services afin de disposer d'une interface web simple présentant ses activités et ses projets. Elle souhaite également que nous analysions la demande, identifiions les besoins et trouvions une structure adaptée aux besoins du client et des utilisateurs.

## 2. Objectifs du site

Le site devra permettre de :

- présenter clairement l'entreprise et ses activités ;
- mettre en valeur les projets de l'agence immobilière ;
- faciliter la recherche et la consultation des projets ;
- proposer une navigation simple et intuitive ;
- s'adapter aux différents formats d'écran.

## 3. Étape A — Analyse exhaustive des besoins

### 3.1 Besoins fonctionnels

Le site doit permettre à l'utilisateur de :

1. **Découvrir l'agence**

   - consulter une page d'accueil présentant l'agence et ses activités ;
   - comprendre que l'agence acquiert des terrains, participe au financement et au développement de projets immobiliers ;
   - découvrir que l'agence met en marché et revend des propriétés résidentielles ou commerciales.
2. **Naviguer dans le site**

   - accéder aux sections Accueil, Projets, Services, À propos et Nous joindre ;
   - passer facilement d'une section à une autre ;
   - identifier clairement la section actuellement consultée.
3. **Consulter les projets immobiliers**

   - afficher une liste d'au moins 12 projets immobiliers ;
   - consulter les informations essentielles de chaque projet ;
   - sélectionner un projet pour obtenir une présentation détaillée de celui-ci.
4. **Rechercher et filtrer les projets**

   - rechercher un projet à partir des informations affichées ;
   - filtrer les projets selon un critère pertinent, comme le type ou le statut ;
   - identifier visuellement le filtre actuellement sélectionné ;
   - réinitialiser le filtre afin d'afficher à nouveau tous les projets.
5. **Gérer l'affichage des projets**

   - retirer un projet de la liste directement depuis l'interface ;
   - comprendre clairement le résultat de cette action ;
   - recevoir un message explicite lorsqu'aucun projet ne correspond au filtre choisi.

### 3.2 Informations à afficher

Pour chaque projet immobilier, le site doit afficher au minimum :

- un identifiant unique ;
- un titre ;
- une ville ou un secteur ;
- un type de projet ;
- un statut ;
- une courte description ;
- une information financière ou une superficie ;
- une image représentative du projet.

Les informations doivent être présentées de façon suffisamment claire pour permettre une comparaison rapide entre les projets.

### 3.3 Comportements attendus lors des interactions

Lorsque l'utilisateur interagit avec le site :

- la navigation doit afficher la section demandée sans perdre la cohérence de l'interface ;
- la section active doit être reconnaissable grâce à un retour visuel ;
- la sélection d'un filtre doit actualiser la liste des projets affichés ;
- le filtre actif doit rester identifiable après l'actualisation de la liste ;
- la désactivation ou la réinitialisation du filtre doit permettre de retrouver l'ensemble des projets ;
- la suppression d'un projet doit retirer uniquement le projet sélectionné de la liste ;
- un message doit apparaître si la liste filtrée est vide ;
- les contenus doivent rester accessibles et lisibles après chaque interaction.

### 3.4 Contraintes de qualité

Le site doit respecter les contraintes suivantes :

- **Clarté :** les textes, les titres, les boutons et les informations des projets doivent être compréhensibles ;
- **Cohérence visuelle :** les pages et les composants doivent suivre une présentation uniforme ;
- **Facilité d'utilisation :** les actions principales doivent être faciles à repérer et à effectuer ;
- **Retour visuel :** l'utilisateur doit savoir quelle section ou quel filtre est actif ;
- **Lisibilité :** les informations doivent rester organisées, aérées et faciles à parcourir ;
- **Responsive :** l'interface doit s'adapter aux ordinateurs, aux tablettes et aux téléphones ;
- **Accessibilité :** les contrastes, la taille des textes et la disposition des éléments doivent permettre une consultation confortable ;
- **Cohérence des données :** chaque projet doit posséder les informations minimales demandées et un identifiant unique.

## 4. Cas d'utilisation

Les cas d'utilisation décrivent les actions possibles du point de vue des utilisateurs. Chaque fiche présente l'acteur, l'objectif, les préconditions, le scénario nominal, les scénarios alternatifs, les postconditions et les contraintes.

#### FICHE DE CAS D'UTILISATION : CU00— [Gabarit]

- **Acteur principal :** [Utilisateur ou Administrateur]
- **Objectif :** [Résultat recherché par l'acteur]
- **Préconditions :** [Situation nécessaire avant l'action]

**Scénario nominal (le chemin idéal)**

1. [L'acteur réalise une première action.]
2. [Le système réagit à cette action.]
3. [L'acteur poursuit l'interaction.]
4. [Le système atteint le résultat attendu.]

**Conditions et scénarios alternatifs (si... alors...)**

- **Si** [une condition particulière se présente] :
  - **Alors** [le système affiche un message ou applique un comportement prévu].
- **Si** [une autre condition se présente] :
  - **Alors** [le système indique le résultat attendu].

**Postconditions**

- **Succès :** [État du site lorsque l'action est terminée correctement.]
- **Échec :** [État du site lorsque l'action ne peut pas être terminée.]

**Contraintes**

- [Règle de fonctionnement, de lisibilité, d'accessibilité ou de responsive design.]



#### FICHE DE CAS D'UTILISATION : CU01— [Acceder au site internet]

- **Acteur principal :** [Utilisateur]
- **Objectif :** [Découvrir l'agence]
- **Préconditions :** [Site web accessible]

**Scénario nominal (le chemin idéal)**

1. [L'utilisateur est dirigée sur la page d'accueil.]
2. [L'utilisateur consulte la page d'accueil présentant l'agence et ses activités .]
3. [L'utilisateur comprend que l'agence acquiert des terrains, participe au financement et au développement de projets immobiliers]
4. [L'utilisateur découvre que l'agence met en marché et revend des propriétés résidentielles ou commerciales.]

**Conditions et scénarios alternatifs (si... alors...)**

- **Si** [le site web est inaccessible ] :
  - **Alors** [le navigatueur affiche une erreur].
- **Si** [le site est en maintenance] :
  - **Alors** [l'utilisateur est dirigée vers une page prévenant l'inaccessibilité temporaire du site web].

**Postconditions**

- **Succès :** [le site est en ligne.]
- **Échec :** [le site est en maintenance ou inaccessible.]

**Contraintes**

- [Accessibilité du site web.]

## 5. Résultat attendu

Le résultat final devra être un site immobilier fonctionnel, accessible et agréable à utiliser, permettant de découvrir l'agence et de consulter efficacement ses projets.
