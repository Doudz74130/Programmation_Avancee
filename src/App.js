import { useState } from "react";
import Menu from "./components/Menu";
import Accueil from "./components/Accueil";
import Projets from "./components/Projets";
import ProjetDetail from "./components/ProjetDetail";
import projetsInitiaux from "./data/Projects";

function App() {
  const [sectionActive, setSectionActive] = useState("accueil");
  const [projets] = useState(projetsInitiaux);
  const [projetChoisi, setProjetChoisi] = useState(null);

  const voirProjets = () => {
    setProjetChoisi(null);
    setSectionActive("projets");
  };

  return (
    <>
      <Menu sectionActive={sectionActive} onChangerSection={setSectionActive} />

      {projetChoisi ? (
        <ProjetDetail
          projet={projetChoisi}
          onRetour={() => setProjetChoisi(null)}
        />
      ) : sectionActive === "accueil" ? (
        <Accueil onVoirProjets={voirProjets} />
      ) : sectionActive === "projets" ? (
        <Projets projets={projets} onOuvrirProjet={setProjetChoisi} />
      ) : (
        <section className="py-5 text-center text-muted">
          Section en construction.
        </section>
      )}
    </>
  );
}

export default App;
