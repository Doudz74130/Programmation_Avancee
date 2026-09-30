import styles from "./ProjectCard.module.css";

function classeStatut(statut) {
  if (statut === "Terminé") return `${styles.statut} ${styles.termine}`;
  if (statut === "ì venir") return `${styles.statut} ${styles.aVenir}`;
  return `${styles.statut} ${styles.enCours}`;
}

function ProjectCard({ projet, onOuvrir }) {
  return (
    <article className={styles.carte}>
      <div className={styles.zoneImage}>
        <img
          src={projet.image}
          alt={projet.titre}
          className={styles.image}
          loading="lazy"
        />
        <span className={classeStatut(projet.statut)}>{projet.statut}</span>
      </div>

      <div className={styles.corps}>
        <h3 className={styles.titre}>{projet.titre}</h3>

        <p className={styles.meta}>
          <span>{projet.ville}</span>
          <span className={styles.puce} />
          <span className={styles.type}>{projet.type}</span>
        </p>

        <p className={styles.description}>{projet.description}</p>

        <div className={styles.pied}>
          <div className={styles.prix}>
            {projet.prix.toLocaleString("fr-CA")} $
          </div>
          <div className={styles.superficie}>
            {projet.superficie.toLocaleString("fr-CA")} m²
          </div>

          <button
            type="button"
            className={styles.bouton}
            onClick={() => onOuvrir(projet)}
          >
            Voir le détail
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
