import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Contact from "./Contact";

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
            <div className="container_txt1">
              <p>Un parking gratuit se situe à proximité du cabinet.</p>
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
              <p>Je vous reçois sur rendez-vous au : </p>
              <p>xx rue des passants 62500 Saint omer</p>
            </div>
          </div>
        </div>
        <Contact />
        <div className="map">
          <iframe
            title="carte du lieu"
            className="lieu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40375.1585537084!2d2.264805699999989!3d50.76727925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcf893912760af%3A0x40af13e8163d5e0!2sSaint-Omer!5e0!3m2!1sfr!2sfr!4v1738781643615!5m2!1sfr!2sfr"
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
