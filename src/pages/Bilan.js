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
        <h1>Bilan de compétence</h1>
        <section className="bilan_explain">
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
