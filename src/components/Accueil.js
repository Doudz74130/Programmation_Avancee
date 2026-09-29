import { Container, Button } from "react-bootstrap";
/*ERREUR : import "./Acceuil.css";*/ 

import "./Accueil.css";

function Accueil({ titre, message, onChanger }) {
  return (
    <Container className="accueil">
      {/*className="hero" */} 
      <section className="heros">
        <h1 className="titre">{titre}</h1>

        <p className="description">
          {message}
        </p>

        <Button
          variant="dark"
          /*ERREUR : onclick={onChanger}*/ 
          onClick={onChanger}
        >
          Voir les projets
        </Button>
      </section>
    </Container>
  );
}

export default Accueil;