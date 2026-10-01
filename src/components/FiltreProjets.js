import { Button } from "react-bootstrap";
import Curseur from "./Curseur";
import styles from "./FiltreProjets.module.css";

// Filtres des projets.
// Deux critères à choix multiple (boutons) et deux critères à intervalle
// (curseurs à deux poignées). Tout est remonté au parent par des fonctions.

// Bornes des curseurs, calculées d'après les valeurs des projets.
export const PRIX_MIN = 0;
export const PRIX_MAX = 8000000;
export const SUPERFICIE_MIN = 0;
export const SUPERFICIE_MAX = 35000;

// Ces deux fonctions placent les curseurs sur toute la plage au départ.
export const TOUS_PRIX = [PRIX_MIN, PRIX_MAX];
export const TOUTES_SUPERFICIES = [SUPERFICIE_MIN, SUPERFICIE_MAX];

function FiltreProjets({
  type,
  statut,
  prix,
  superficie,
  onChangerType,
  onChangerStatut,
  onChangerPrix,
  onChangerSuperficie,
}) {
  // Si un intervalle n'est pas fourni, on prend toute la plage.
  const intervallePrix = Array.isArray(prix) ? prix : [PRIX_MIN, PRIX_MAX];
  const intervalleSuperficie = Array.isArray(superficie)
    ? superficie
    : [SUPERFICIE_MIN, SUPERFICIE_MAX];

  const groupes = [
    {
      legende: "Type de projet",
      valeurs: ["tous", "Résidentiel", "Commercial", "Terrain", "Mixte"],
      actif: type,
      onChanger: onChangerType,
    },
    {
      legende: "Statut",
      valeurs: ["tous", "En cours", "Terminé", "À venir"],
      actif: statut,
      onChanger: onChangerStatut,
    },
  ];

  const variantFiltre = (valeur, actif) =>
    valeur === actif ? "dark" : "outline-dark";

  const enDollars = (valeur) => valeur.toLocaleString("fr-CA") + " $";
  const enMetres = (valeur) => valeur.toLocaleString("fr-CA") + " m²";

  return (
    <div className={styles.barre}>
      <div className={styles.ligne}>
        {groupes.map((groupe) => (
          <div key={groupe.legende} className={styles.groupe}>
            <p className={styles.legende}>{groupe.legende}</p>

            <div className={styles.boutons}>
              {groupe.valeurs.map((valeur) => (
                <Button
                  key={valeur}
                  variant={variantFiltre(valeur, groupe.actif)}
                  className={styles.bouton}
                  onClick={() => groupe.onChanger(valeur)}
                >
                  {valeur === "tous" ? "Tous" : valeur}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.curseurs}>
        <div className={styles.groupe}>
          <p className={styles.legende}>Prix</p>
          <Curseur
            min={PRIX_MIN}
            max={PRIX_MAX}
            pas={100000}
            valeurMin={intervallePrix[0]}
            valeurMax={intervallePrix[1]}
            onChanger={onChangerPrix}
            formater={enDollars}
          />
        </div>

        <div className={styles.groupe}>
          <p className={styles.legende}>Superficie</p>
          <Curseur
            min={SUPERFICIE_MIN}
            max={SUPERFICIE_MAX}
            pas={500}
            valeurMin={intervalleSuperficie[0]}
            valeurMax={intervalleSuperficie[1]}
            onChanger={onChangerSuperficie}
            formater={enMetres}
          />
        </div>
      </div>
    </div>
  );
}

export default FiltreProjets;
