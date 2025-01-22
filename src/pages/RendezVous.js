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
              <img src="images/cabinet1.webp" alt="cabinet" />
            </div>
            <div className="container_txt">
              <p>Un parking gratuit se situe à proximité du cabinet</p>
              <p>
                Le cabinet n'est pas accessible aux personnes à mobilité
                réduite, mais des solutions alternatives de rendez-vous peuvent
                être proposées.
              </p>
            </div>
          </div>
          <div className="container_rdv">
            <h2>Lieu du rendez-vous</h2>
            <div className="img_rdv">
              <img src="images/cabinet.webp" alt=" cabinet" />
            </div>
            <div className="container_txt">
              <p>Je vous reçoit sur rendez-vous au </p>
              <p>16 Rue des maraîcher 62500 Saint omer</p>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            className="lieu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.0632116926263!2d2.2674260132698962!3d50.755861571533856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcf8c73283f923%3A0x7b20b8c20732a82a!2s16%20Rue%20des%20Mara%C3%AEchers%2C%2062500%20Saint-Omer!5e0!3m2!1sfr!2sfr!4v1737545372872!5m2!1sfr!2sfr"
            // width="600"
            // height="450"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RendezVous;
