import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const RendezVous = () => {
  return (
    <div>
      <Navigation />
      <div className="rdv">
        <div className="margin"></div>
        <div className="Container">
          <div className="container_rdv">
            <h2>Prise de rendez-vous</h2>
            <div className="img_rdv">
              <img src="images/cabinet1.webp" alt="image cabinet" />
            </div>
            <div className="container_txt">
              <p>Par téléphone au : 07.83.78.29.70</p>
              <p>Par Mail : projection62@yahoo.com</p>
              <p>Un parking gratuit se situe à proximité du cabinet</p>
              <p>
                Le cabinet n'est pas accessible aux personnes à mobilité réduite
                mais je peux proposer d'autres lieux de rendez vous{" "}
              </p>
            </div>
          </div>
          <div className="container_rdv">
            <h2>Lieu du rendez-vous</h2>
            <div className="img_rdv">
              <img src="images/cabinet.webp" alt="image cabinet" />
            </div>
            <div className="container_txt">
              <p>Je vous reçoit sur rendez-vous au </p>
              <p>16 Rue des maraîcher 62500 Saint omer</p>
              <p>mettre plan du lieu</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RendezVous;
