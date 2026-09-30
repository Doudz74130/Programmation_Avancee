import { Container } from "react-bootstrap";
import styles from "./Menu.module.css";
import logo from "../assets/Logo.png";

function Menu({ sectionActive, onChangerSection }) {
  const sections = [
    { id: "accueil", label: "Accueil" },
    { id: "projets", label: "Projets" },
    { id: "services", label: "Services" },
    { id: "apropos", label: "À propos" },
    { id: "contact", label: "Nous joindre" },
  ];

  const styleLien = (id) =>
    sectionActive === id ? `${styles.lien} ${styles.lienActif}` : styles.lien;

  return (
    <header className={styles.barre}>
      <Container className="d-flex align-items-center justify-content-between flex-wrap gap-2">
        <div className={styles.marque}>
          <img src={logo} alt="Logo de l'agence" className={styles.logo} />
          <div>
            <div>Agence Horizon</div>
            <p className={styles.slogan}>Immobilier et investissement</p>
          </div>
        </div>

        <nav className={styles.liens}>
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={styleLien(section.id)}
              onClick={() => onChangerSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </Container>
    </header>
  );
}

export default Menu;
