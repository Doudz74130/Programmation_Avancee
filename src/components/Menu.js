import { Container } from "react-bootstrap";
import styles from "./Menu.module.css";
import logo from "../assets/Logo.png";

// Menu de navigation du site.
// Il reçoit la section affichée et une fonction du parent.
// La classe du lien change selon la section active : c'est du style conditionnel.
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
      <Container className="d-flex align-items-center justify-content-between flex-wrap gap-3">
        <div className={styles.marque}>
          <img
            src={logo}
            alt="Logo de l'agence Horizon"
            className={styles.logo}
          />
          <p className={styles.slogan}>Immobilier et investissement</p>
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
