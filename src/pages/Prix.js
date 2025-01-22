import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Prix = () => {
  const options = [
    { hours: "Premier rendez-vous", price: "Gratuit" },
    { hours: "14h", price: "1260€" },
    { hours: "16h", price: "1440€" },
    { hours: "20h", price: "1800€" },
    { hours: "24h", price: "2150€" },
  ];

  return (
    <div>
      <Navigation />
      <div className="prix">
        <div className="margin"></div>
        <div className="txt_prix">
          <p className="intro">
            Suite à l'entretien préalable, nous déterminerons ensemble le temps
            d'accompagnement nécessaire à la réalisation du bilan. La durée
            proposée ci-dessous comprend uniquement le temps en face à face, il
            faudra compter un temps d'investissement personnel qui n'est pas
            tarifé.
          </p>
          <div className="table-container">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Durée</th>
                  <th>Tarif</th>
                </tr>
              </thead>
              <tbody>
                {options.map((option, index) => (
                  <tr key={index} className={index === 0 ? "free-row" : ""}>
                    <td>{option.hours}</td>
                    <td>{option.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Prix;
