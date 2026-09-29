import { useState } from "react";
/*ERREUR : import Accueil from "./components/Acceuil";
 */ 

import Accueil from "./components/Accueil.js";

function App() {
  const [message, setMessage] = useState(
    "Nous accompagnons nos clients dans leurs projets immobiliers."
  );

  const changerMessage = () => {
    setMessage("Découvrez bientôt nos projets immobiliers.");
  };

  return (
    <Accueil
    /*ERREUR : titreSite="Agence Horizon"*/ 
      titre="Agence Horizon"
      message={message}
      /*ERREUR : onChanger={() => changerMessage}*/ 
      onChanger={changerMessage}
    />
  );
}

export default App;