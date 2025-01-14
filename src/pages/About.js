import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navigation />
      <div className="about">
        <div className="about_amandine">
          <div className="about_txt">
            <h2>Formation</h2>
            <p>
              Diplômée d'une maitrise en sciences de l'éducation à l'université
              de Lille 1 , j'ai exercé en tant que conseillère en insertion
              pendant plus de 17 ans où j'ai accompagné tout type de public dans
              leur projet professionnel ainsi que leur retour à l'emploi. Une
              expérience riche tant humainement que professionnellement, et qui
              m'a conduite à me perfectionner dans le domaine de
              l'accompagnement.
            </p>
            <p>
              Je me suis formée en 2024 avec AXIOME afin de devenir Consultante
              en bilan de compétences et m'installer en activité libérale en
              juillet 2024 en complément de mon activité principale de
              conseillère d'orientation.{" "}
            </p>
            <div className="why">
              <h2>Pourquoi?</h2>
              <p>
                Ce projet de créer cette activité, c'est avant tout une envie
                d'aider, d'écouter et d'accompagner toute personne qui se pose
                des questions sur sa situation professionnelle, et qui a besoin
                de donner du sens à son avenir.{" "}
              </p>
              <p>
                J'ai choisi de donner le nom de "Projection" à mon activité, car
                pour moi le bilan de compétences est un moment où l'on se pose,
                on fait le point sur le chemin parcouru, on regarde l'horizon et
                on se fixe de nouveaux objectifs. Il vaut mieux faire une pause
                quand les choses ne vont pas bien que de continuer à avancer
                dans la mauvaise direction.
              </p>
            </div>
          </div>
          <img src="images/Photo_amandine.webp" alt="photo d'amandine" />
        </div>
        <div className="end_about">
          <h3>
            Je vous accompagnerai avec bienveillance, en toute confidentialité
            et avec beaucoup de professionnalisme.
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
