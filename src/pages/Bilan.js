import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BilanPourQui from "../components/Bilan.js/BilanPourQui";
import BilanObjectif from "../components/Bilan.js/BilanObjectif";
import BilanComment from "../components/Bilan.js/BilanComment";
import BilanDuree from "../components/Bilan.js/BilanDuree";
import BilanDeroulement from "../components/Bilan.js/BilanDeroulement";

const Bilan = () => {
  return (
    <div>
      <Navigation />

      <div className="bilan">
        <div className="margin"></div>
        <section className="bilan_explain">
          <div className="img_bilan">
            <img
              src="images/bilan_compétence.webp"
              alt="image bilan de compétence"
            />
          </div>
          <BilanPourQui />
          <BilanObjectif />
          <BilanComment />
          <BilanDuree />
          <BilanDeroulement />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Bilan;
