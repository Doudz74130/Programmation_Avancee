import Accueil from "./Accueil";
import Projets from "./Projets";
import ProjetDetail from "./ProjetDetail";
import Services from "./Services";
import APropos from "./APropos";
import NousJoindre from "./NousJoindre";

// Contenu affiche la section demandée selon la valeur de sectionActive.
// C'est ici que se fait l'affichage conditionnel : une seule section est
// rendue à la fois. Le détail d'un projet remplace la section s'il est ouvert.
function Contenu({
  sectionActive,
  projets,
  projetChoisi,
  onVoirProjets,
  onOuvrirProjet,
  onRetourProjet,
  onRetirerProjet,
}) {
  if (projetChoisi) {
    return <ProjetDetail projet={projetChoisi} onRetour={onRetourProjet} />;
  }

  if (sectionActive === "accueil") {
    return <Accueil onVoirProjets={onVoirProjets} />;
  }

  if (sectionActive === "projets") {
    return (
      <Projets
        projets={projets}
        onOuvrirProjet={onOuvrirProjet}
        onRetirerProjet={onRetirerProjet}
      />
    );
  }

  if (sectionActive === "services") {
    return <Services />;
  }

  if (sectionActive === "apropos") {
    return <APropos />;
  }

  return <NousJoindre />;
}

export default Contenu;
