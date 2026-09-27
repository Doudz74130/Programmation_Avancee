import { useState } from "react";
import Accueil from "./components/Acceuil";

function App() {
  const [message, setMessage] = useState(
    "Nous accompagnons nos clients dans leurs projets immobiliers."
  );

  const changerMessage = () => {
    setMessage("Découvrez bientôt nos projets immobiliers.");
  };

  return (
    <Accueil
      titreSite="Agence Horizon"
      message={message}
      onChanger={() => changerMessage}
    />
  );
}

export default App;