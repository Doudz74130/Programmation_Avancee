import { Container, Row, Col } from "react-bootstrap";
import styles from "./InfoSection.module.css";

// Section Services : présente les services offerts par l'agence.
// Section d'information : aucun state, aucune interaction.
function Services() {
  const services = [
    {
      titre: "Acquisition de terrains",
      texte:
        "Nous repérons et acquérons des terrains ayant un réel potentiel de développement. Chaque site est analysé en fonction de son zonage, de son emplacement et des besoins du marché avant toute acquisition.",
    },
    {
      titre: "Financement de projets",
      texte:
        "Nous participons au financement des projets immobiliers, seuls ou en partenariat avec des investisseurs. Notre réseau nous permet de structurer un montage adapté à chaque projet.",
    },
    {
      titre: "Développement immobilier",
      texte:
        "Nous prenons en charge la conception et la réalisation des projets, de la planification jusqu'à la construction. Les projets résidentiels, commerciaux et mixtes sont développés dans le respect des échéanciers et des budgets.",
    },
    {
      titre: "Mise en marché et revente",
      texte:
        "Nous mettons en marché les propriétés résidentielles et commerciales une fois les projets terminés, et accompagnons nos clients jusqu'à la transaction.",
    },
  ];

  return (
    <Container className={`py-4 py-lg-5 ${styles.largeur}`}>
      <div className={styles.entete}>
        <span className={styles.etiquette}>Nos services</span>
        <h2 className={styles.titre}>Ce que nous offrons</h2>
        <p className={styles.soustitre}>
          De l'acquisition du terrain jusqu'à la revente de la propriété, nous
          accompagnons chaque projet à toutes ses étapes.
        </p>
      </div>

      <Row className="g-4">
        {services.map((service) => (
          <Col key={service.titre} xs={12} md={6}>
            <div className={styles.panneau}>
              <h3 className={styles.panneauTitre}>{service.titre}</h3>
              <p className={styles.texte}>{service.texte}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
