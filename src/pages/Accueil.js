import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Accueil = () => {
  return (
    <div>
      <Navigation />
      <section className="header">
        <div className="header_txt">
          <h1>Découvrez vos talents et atteignez vos ambitions</h1>
          <p>
            Un accompagnement sur mesure pour analyser vos compétences, définir
            vos objectifs, et préparer votre avenir.
          </p>
          <button>1ere consultation gratuite</button>
        </div>
        <div className="header_img">
          <img src="images/succes.webp" alt="image succès" />
        </div>
      </section>
      <section className="approche_accueil">
        <h2>Un accompagnement pour donner du sens à votre carrière</h2>
        <p>
          Que vous soyez en quête de nouvelles opportunités ou simplement
          curieux d’explorer vos talents, le bilan de compétences est une étape
          clé. Grâce à une analyse approfondie de vos compétences et un
          accompagnement sur mesure, vous aurez toutes les clés pour bâtir un
          projet professionnel qui vous ressemble.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Accueil;
