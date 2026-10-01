import { Container, Row, Col } from "react-bootstrap";
import styles from "./InfoSection.module.css";

// Section A propos : présente l'agence, ses activités et ses valeurs.
// Section d'information : aucun state, aucune interaction.
function APropos() {
  const activites = [
    {
      titre: "Projets de construction",
      paragraphes: [
        "Agence Horizon accompagne la réalisation de projets résidentiels, commerciaux et industriels. Nous intervenons dès les premières étapes et suivons chaque dossier jusqu'à la livraison, en respectant les échéanciers et les budgets établis.",
        "Notre expertise du marché, notre rigueur et notre souci du détail permettent à chaque projet d'aboutir dans les règles de l'art, du premier coup de pelle jusqu'à la remise des clés.",
      ],
    },
    {
      titre: "Développement immobilier",
      paragraphes: [
        "Nous concevons et développons des projets durables, modernes et adaptés aux besoins actuels du marché. De l'analyse du terrain jusqu'à la mise en marché, notre équipe prend en charge chaque étape avec méthode et vision.",
        "Qu'il s'agisse de résidences, de copropriétés ou de complexes multilogements, nous mettons l'accent sur la qualité de construction, l'intégration harmonieuse dans l'environnement et la valeur à long terme pour les investisseurs et les occupants.",
      ],
    },
  ];

  const valeurs = [
    {
      titre: "Notre mission",
      texte:
        "Acquérir des terrains, financer et développer des projets immobiliers, puis mettre en marché et revendre des propriétés résidentielles ou commerciales.",
    },
    {
      titre: "Notre approche",
      texte:
        "Une communication claire et honnête à chaque étape. Nos clients sont informés, impliqués et accompagnés du premier contact jusqu'à la transaction.",
    },
    {
      titre: "Nos valeurs",
      texte:
        "Qualité, transparence et relation client. Nous privilégions des choix durables et un accompagnement personnalisé pour chaque projet.",
    },
  ];

  return (
    <Container className={`py-4 py-lg-5 ${styles.largeur}`}>
      <div className={styles.entete}>
        <span className={styles.etiquette}>À propos</span>
        <h2 className={styles.titre}>Qui nous sommes</h2>
        <p className={styles.soustitre}>
          Une équipe spécialisée en acquisition de terrains, financement et
          développement de projets immobiliers au Québec.
        </p>
      </div>

      <Row className="g-4 mb-4">
        {activites.map((activite) => (
          <Col key={activite.titre} xs={12} lg={6}>
            <div className={styles.panneau}>
              <h3 className={styles.panneauTitre}>{activite.titre}</h3>
              {activite.paragraphes.map((paragraphe) => (
                <p key={paragraphe} className={styles.texte}>
                  {paragraphe}
                </p>
              ))}
            </div>
          </Col>
        ))}
      </Row>

      <Row className="g-4">
        {valeurs.map((valeur) => (
          <Col key={valeur.titre} xs={12} md={4}>
            <div className={styles.panneau}>
              <h3 className={styles.panneauTitre}>{valeur.titre}</h3>
              <p className={styles.texte}>{valeur.texte}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default APropos;
