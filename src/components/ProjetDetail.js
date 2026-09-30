import { Container, Row, Col } from "react-bootstrap";
import styles from "./ProjetDetail.module.css";

function classeStatut(statut) {
  if (statut === "Terminé") return `${styles.statut} ${styles.termine}`;
  if (statut === "À venir") return `${styles.statut} ${styles.aVenir}`;
  return `${styles.statut} ${styles.enCours}`;
}

function ProjetDetail({ projet, onRetour }) {
  return (
    <Container className={`py-4 ${styles.largeur}`}>
      <button type="button" className={styles.retour} onClick={onRetour}>
        ← Retour aux projets
      </button>

      <Row className="g-4 align-items-stretch">
        <Col xs={12} lg={7}>
          <img
            src={projet.image}
            alt={projet.titre}
            className={styles.image}
          />
        </Col>

        <Col xs={12} lg={5}>
          <div className={styles.panneau}>
            <span className={styles.etiquette}>{projet.type}</span>

            <h2 className={styles.titre}>{projet.titre}</h2>

            <p className={styles.meta}>
              <span>{projet.ville}</span>
              <span className={classeStatut(projet.statut)}>{projet.statut}</span>
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
