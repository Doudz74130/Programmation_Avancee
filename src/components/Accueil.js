import { Container, Button } from "react-bootstrap";
import styles from "./Accueil.module.css";

function Accueil({ onVoirProjets }) {
  return (
    <Container className={`py-4 ${styles.largeur}`}>
      <section id="accueil" className={styles.hero}>
        <div className={styles.interieur}>
          <span className={styles.etiquette}>
            Agence financière immobilière
          </span>

          <h1 className={styles.titre}>Agence Horizon</h1>

          <p className={styles.texte}>
            Nous acquérons des terrains, participons au financement et au
            développement de projets immobiliers, puis mettons en marché et
            revendons des propriétés résidentielles ou commerciales.
          </p>

          <Button className={styles.bouton} onClick={onVoirProjets}>
            Voir les projets
          </Button>

          <div className={styles.chiffres}>
            <div className={styles.chiffre}>
              <strong>12</strong>
              <span>projets</span>
            </div>
            <div className={styles.chiffre}>
              <strong>3</strong>
              <span>types de projets</span>
            </div>
            <div className={styles.chiffre}>
              <strong>15 ans</strong>
              <span>d'expérience</span>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Accueil;
