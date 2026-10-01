import { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import FiltreProjets from "./FiltreProjets";
import ProjectCard from "./ProjectCard";
import styles from "./Projets.module.css";

function Projets({ projets, onOuvrirProjet, onRetirerProjet }) {
  const [type, setType] = useState("tous");
  const [statut, setStatut] = useState("tous");

  // Les curseurs gardent un intervalle : [minimum, maximum].
  // Au départ les bornes couvrent tous les projets.
  const [prix, setPrix] = useState([0, 8000000]);
  const [superficie, setSuperficie] = useState([0, 35000]);

  // filter() crée une nouvelle liste à partir de la liste existante.
  // Les quatre critères s'appliquent l'un après l'autre : si un seul ne
  // correspond pas, le projet est écarté de la liste affichée.
  const projetsAffiches = projets.filter((projet) => {
    if (type !== "tous" && projet.type !== type) {
      return false;
    }
    if (statut !== "tous" && projet.statut !== statut) {
      return false;
    }
    if (projet.prix < prix[0] || projet.prix > prix[1]) {
      return false;
    }
    if (
      projet.superficie < superficie[0] ||
      projet.superficie > superficie[1]
    ) {
      return false;
    }
    return true;
  });

  return (
    <Container className={`py-4 py-lg-5 ${styles.zone}`}>
      <div className={styles.entete}>
        <span className={styles.etiquette}>Portefeuille</span>

        <h2 className={styles.titre}>
          Nos projets
          <span className={styles.compteur}>{projetsAffiches.length}</span>
        </h2>

        <p className={styles.soustitre}>
          Projets immobiliers en cours, terminés ou à venir.
        </p>
      </div>

      <FiltreProjets
        type={type}
        statut={statut}
        prix={prix}
        superficie={superficie}
        onChangerType={setType}
        onChangerStatut={setStatut}
        onChangerPrix={setPrix}
        onChangerSuperficie={setSuperficie}
      />

      {projetsAffiches.length === 0 && (
        <Alert variant="warning">Aucun projet à afficher pour ce filtre.</Alert>
      )}

      <Row className="g-4">
        {projetsAffiches.map((projet) => (
          <Col key={projet.id} xs={12} sm={6} xl={4}>
            <ProjectCard
              projet={projet}
              onOuvrir={onOuvrirProjet}
              onRetirer={onRetirerProjet}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projets;
