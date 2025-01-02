import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Prix = () => {
  return (
    <div>
      <Navigation />
      <div className="prix">
        <h1>Prix</h1>
        <div className="txt_prix">
          <p>
            Suite à l'entretien préalable, nous déterminerons ensemble le temps
            d'accompagnement nécessaire à la réalisation du bilan. La durée
            proposée ci-dessous comprend uniquement le temps en face à face, il
            faudra compter un temps d'investissement personnel qui n'est pas
            tarifé.
          </p>
          <div className="tableau_tarif">
            <p>Accompagnement de 14h</p>
            <p>1260€</p>
            <p>Accompagnement de 16h</p>
            <p>1440€</p>
            <p>Accompagnement de 20h</p>
            <p>1800 €</p>
            <p>Accompagnement de 24h</p>
            <p>2150 €</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Prix;
