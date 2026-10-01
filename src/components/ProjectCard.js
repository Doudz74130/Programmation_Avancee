import { Button, Badge } from "react-bootstrap";
import styles from "./ProjectCard.module.css";

// Carte réutilisable : elle reçoit un projet par props et l'affiche.
// Elle reçoit aussi deux fonctions du parent : onOuvrir et onRetirer.
function ProjectCard({ projet, onOuvrir, onRetirer }) {
  // La couleur du badge dépend du statut : c'est du style conditionnel.
  const couleurStatut = (statut) => {
    if (statut === "Terminé") return "success";
    if (statut === "À venir") return "dark";
    return "warning";
  };

  return (
    <article className={styles.carte}>
      <div className={styles.zoneImage}>
        <img
          src={projet.image}
          alt={projet.titre}
          className={styles.image}
          loading="lazy"
        />

        <Badge
          bg={couleurStatut(projet.statut)}
          className={`${styles.statut} text-uppercase`}
        >
          {projet.statut}
        </Badge>
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
          <div className={styles.chiffres}>
            <span className={styles.prix}>
              {projet.prix.toLocaleString("fr-CA")} $
            </span>
            <span className={styles.superficie}>
              {projet.superficie.toLocaleString("fr-CA")} m²
            </span>
          </div>

          <div className={styles.boutons}>
            <Button
              variant="outline-dark"
              size="sm"
              className={styles.bouton}
              onClick={() => onOuvrir(projet)}
            >
              Voir le détail
            </Button>

            <Button
              variant="outline-danger"
              size="sm"
              className={styles.bouton}
              onClick={() => onRetirer(projet.id)}
            >
              Retirer
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
