import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import styles from "./Projets.module.css";

function Projets({ projets, onOuvrirProjet }) {
  return (
    <Container className={`py-4 py-lg-5 ${styles.zone}`}>
      <div className={styles.entete}>
        <span className={styles.etiquette}>Portefeuille</span>

        <h2 className={styles.titre}>
          Nos projets
          <span className={styles.compteur}>{projets.length}</span>
        </h2>

        <p className={styles.soustitre}>
          Projets immobiliers en cours, terminés ou à venir.
        </p>
      </div>

      <Row className="g-4">
        {projets.map((projet) => (
          <Col key={projet.id} xs={12} sm={6} xl={4}>
            <ProjectCard projet={projet} onOuvrir={onOuvrirProjet} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projets;
