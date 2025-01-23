import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { NavLink } from "react-router-dom";

const Accueil = () => {
  return (
    <div className="accueil">
      <Navigation />
      <section className="header">
        <div className="header_txt">
          <img
            src="images/logo_complet_remove.webp"
            alt="logo complet"
            className="logo_complet"
          />
          <h1>Découvrez vos talents, atteignez vos ambitions</h1>
          <p className="txt_header">
            Un accompagnement sur mesure pour analyser vos compétences, définir
            vos objectifs, et préparer votre avenir.
          </p>
          <NavLink to="/Rendez-vous">
            <button>Prendre rendez-vous</button>
          </NavLink>
          <p className="txt_button">1er consultation gratuite</p>
        </div>
      </section>
      .
      <section className="approche_accueil">
        <div className="approche_accueil_text">
          <h2>Un accompagnement pour donner du sens à votre carrière</h2>
          <p>
            Que vous soyez en quête de nouvelles opportunités ou simplement
            curieux d’explorer vos talents, le bilan de compétences est une
            étape clé. Grâce à une analyse approfondie de vos compétences et un
            accompagnement sur mesure, vous aurez toutes les clés pour bâtir un
            projet professionnel qui vous ressemble.
          </p>
          <NavLink to="/Bilan-de-competence">
            <button>En savoir plus</button>
          </NavLink>
        </div>
      </section>
      <section className="service">
        <h2>Un accompagnement structuré pour atteindre vos objectifs</h2>
        <div className="service-cards">
          <Card
            title="Première consultation"
            description={
              "Échange initial pour comprendre vos besoins et objectifs."
            }
            circleNumber={"1"}
          />
          <Card
            title={"Évaluation approfondie"}
            description={"Analyse détaillée de vos compétences et objectifs."}
            circleNumber={"2"}
          />
          <Card
            title={"Plan personnalisé"}
            description={
              "Un accompagnement structuré pour atteindre vos objectifs."
            }
            circleNumber={"3"}
          />
        </div>
      </section>
      <section className="question">
        <h2>Besoin de plus d’informations ? Parlons-en !</h2>
        <p>
          Vous souhaitez en savoir plus ou discuter de votre projet ? Je suis à
          votre disposition pour répondre à toutes vos questions et vous
          accompagner dans votre réflexion.
        </p>
        <NavLink to="/Rendez-vous">
          <button>Contacter moi</button>
        </NavLink>
      </section>
      <Footer />
    </div>
  );
};

export default Accueil;
