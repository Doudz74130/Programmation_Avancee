import { Container, Row, Col } from "react-bootstrap";
import styles from "./InfoSection.module.css";

// Section Nous joindre : affiche les coordonnées de l'agence.
// Section d'information : aucun formulaire, aucune interaction.
function NousJoindre() {
  // Les coordonnées sont fictives : l'agence est un cas d'école.
  const coordonnees = [
    {
      titre: "Adresse",
      valeur:
        "1250, boulevard Curé-Labelle, bureau 210\nLaval (Québec) H7V 2V5",
    },
    {
      titre: "Téléphone",
      valeur: "450 555-0182",
      lien: "tel:+14505550182",
    },
    {
      titre: "Courriel",
      valeur: "info@agencehorizon.ca",
      lien: "mailto:info@agencehorizon.ca",
    },
    {
      titre: "Heures d'ouverture",
      valeur: "Lundi au vendredi, de 8 h 30 à 17 h",
    },
  ];

  return (
    <Container className={`py-4 py-lg-5 ${styles.largeur}`}>
      <div className={styles.entete}>
        <span className={styles.etiquette}>Nous joindre</span>
        <h2 className={styles.titre}>Nos coordonnées</h2>
        <p className={styles.soustitre}>
          Une question sur un projet ou une propriété ? Notre équipe vous répond
          du lundi au vendredi.
        </p>
      </div>

      <Row className="g-4">
        {coordonnees.map((coord) => (
          <Col key={coord.titre} xs={12} sm={6} lg={3}>
            <div className={styles.panneau}>
              <span className={styles.contactLabel}>{coord.titre}</span>

              {coord.lien ? (
                <p className={styles.contactValeur}>
                  <a href={coord.lien} className={styles.lien}>
                    {coord.valeur}
                  </a>
                </p>
              ) : (
                <p className={styles.contactValeur}>
                  {coord.valeur.split("\n").map((ligne) => (
                    <span key={ligne}>
                      {ligne}
                      <br />
                    </span>
                  ))}
                </p>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NousJoindre;
