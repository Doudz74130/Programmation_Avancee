import { useState } from "react";
import Menu from "./components/Menu";
import Contenu from "./components/Contenu";
import projetsInitiaux from "./data/Projects";

// App garde les états principaux et les fonctions qui les modifient.
// Les données descendent vers les enfants par props.
function App() {
  const [sectionActive, setSectionActive] = useState("accueil");
  const [projets, setProjets] = useState(projetsInitiaux);
  const [projetChoisi, setProjetChoisi] = useState(null);

  // Changer de section referme aussi le détail d'un projet.
  const changerSection = (section) => {
    setProjetChoisi(null);
    setSectionActive(section);
  };

  const voirProjets = () => {
    changerSection("projets");
  };

  // filter() crée une nouvelle liste sans le projet visé,
  // puis setProjets remplace l'ancienne liste par la nouvelle.
  const retirerProjet = (id) => {
    setProjets(projets.filter((projet) => projet.id !== id));
  };

  return (
    <>
      <Menu sectionActive={sectionActive} onChangerSection={changerSection} />

      <Contenu
        sectionActive={sectionActive}
        projets={projets}
        projetChoisi={projetChoisi}
        onVoirProjets={voirProjets}
        onOuvrirProjet={setProjetChoisi}
        onRetourProjet={() => setProjetChoisi(null)}
        onRetirerProjet={retirerProjet}
      />
    </>
  );
}

export default App;
