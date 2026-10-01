import { Container, Row, Col, Badge } from "react-bootstrap";
import styles from "./ProjetDetail.module.css";

// Vue détaillée d'un projet sélectionné.
// Elle reçoit le projet par props et une fonction pour revenir à la liste.
function ProjetDetail({ projet, onRetour }) {
  const couleurStatut = (statut) => {
    if (statut === "Terminé") return "success";
    if (statut === "À venir") return "dark";
    return "warning";
  };

  return (
    <Container className={`py-4 ${styles.largeur}`}>
      <button type="button" className={styles.retour} onClick={onRetour}>
        ← Retour aux projets
      </button>

      <Row className="g-4 align-items-stretch">
        <Col xs={12} lg={7}>
          <img src={projet.image} alt={projet.titre} className={styles.image} />
        </Col>

        <Col xs={12} lg={5}>
          <div className={styles.panneau}>
            <span className={styles.etiquette}>{projet.type}</span>

            <h2 className={styles.titre}>{projet.titre}</h2>

            <p className={styles.meta}>
              <span>{projet.ville}</span>
              <Badge bg={couleurStatut(projet.statut)}>{projet.statut}</Badge>
            </p>

            <p className={styles.description}>{projet.description}</p>

            <div className={styles.chiffres}>
              <div className={styles.chiffre}>
                <span>Prix</span>
                <strong>{projet.prix.toLocaleString("fr-CA")} $</strong>
              </div>
              <div className={styles.chiffre}>
                <span>Superficie</span>
                <strong>{projet.superficie.toLocaleString("fr-CA")} m²</strong>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjetDetail;
