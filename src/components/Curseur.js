import { useRef } from "react";
import styles from "./Curseur.module.css";

// Curseur à deux poignées pour choisir un intervalle de valeurs.
// Il reçoit les bornes, les valeurs actuelles et une fonction du parent.
// Chaque poignée peut être glissée à la souris ou au doigt.
//
// IMPORTANT : onChanger reçoit UN SEUL argument, le tableau [bas, haut].
// C'est ce qui permet de le brancher directement sur un setter de useState,
// qui n'accepte qu'un seul argument.

// Rend une valeur sûre : un nombre fini, ramené entre les bornes.
function valeurSure(valeur, min, max) {
  const nombre = typeof valeur === "number" && isFinite(valeur) ? valeur : min;
  return Math.min(max, Math.max(min, nombre));
}

function Curseur({ min, max, pas, valeurMin, valeurMax, onChanger, formater }) {
  const piste = useRef(null);

  // On ramène les valeurs reçues dans les bornes. Ainsi une valeur manquante
  // ou invalide ne peut pas faire planter l'affichage.
  const bas = valeurSure(valeurMin, min, max);
  const haut = valeurSure(valeurMax, min, max);

  // Position en pourcentage d'une valeur sur la piste.
  const enPourcent = (valeur) => ((valeur - min) / (max - min)) * 100;

  // Convertit une position de la souris en valeur, arrondie au pas.
  // Renvoie null si la position n'est pas utilisable.
  const valeurDepuisX = (clientX) => {
    if (typeof clientX !== "number" || !isFinite(clientX)) {
      return null;
    }
    const rect = piste.current && piste.current.getBoundingClientRect();
    if (!rect || !rect.width) {
      return null;
    }
    const ratio = (clientX - rect.left) / rect.width;
    const brute = min + ratio * (max - min);
    const arrondie = Math.round(brute / pas) * pas;
    return Math.min(max, Math.max(min, arrondie));
  };

  // Glisse la poignée visée tant que le bouton reste enfoncé.
  const glisser = (cible) => (evenement) => {
    if (evenement.preventDefault) {
      evenement.preventDefault();
    }

    const bouger = (e) => {
      const valeur = valeurDepuisX(e.clientX);
      if (valeur === null) {
        return;
      }
      if (cible === "min") {
        // La poignée du bas ne peut pas dépasser celle du haut.
        onChanger([Math.min(valeur, haut), haut]);
      } else {
        onChanger([bas, Math.max(valeur, bas)]);
      }
    };

    const relacher = () => {
      window.removeEventListener("pointermove", bouger);
      window.removeEventListener("pointerup", relacher);
    };

    window.addEventListener("pointermove", bouger);
    window.addEventListener("pointerup", relacher);
  };

  return (
    <div className={styles.curseur}>
      <div className={styles.valeurs}>
        <span>{formater(bas)}</span>
        <span className={styles.separateur}>à</span>
        <span>{formater(haut)}</span>
      </div>

      <div className={styles.piste} ref={piste}>
        <div className={styles.rail} />

        <div
          className={styles.remplissage}
          style={{
            left: enPourcent(bas) + "%",
            width: enPourcent(haut) - enPourcent(bas) + "%",
          }}
        />

        <div
          className={styles.poignee}
          style={{ left: enPourcent(bas) + "%" }}
          onPointerDown={glisser("min")}
        />

        <div
          className={styles.poignee}
          style={{ left: enPourcent(haut) + "%" }}
          onPointerDown={glisser("max")}
        />
      </div>

      <div className={styles.bornes}>
        <span>{formater(min)}</span>
        <span>{formater(max)}</span>
      </div>
    </div>
  );
}

export default Curseur;
