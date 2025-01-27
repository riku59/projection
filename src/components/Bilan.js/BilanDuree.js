import React from "react";

const BilanDuree = () => {
  return (
    <section className="duree">
      <h2>Durée</h2>
      {/* <div className="img_time">
        <img src="images/time.webp" alt="image horloge" />
      </div> */}
      <div className="txt_duree">
        <p>
          La durée d’un bilan de compétences est flexible et s’adapte aux
          besoins spécifiques de chaque individu. Toutefois, elle ne peut
          excéder un total de 24 heures. Cette durée est habituellement répartie
          sur plusieurs semaines afin de permettre une réflexion approfondie et
          progressive.
        </p>

        <p>
          Les entretiens, qui constituent le cœur du bilan de compétences, se
          déroulent en face à face avec un consultant spécialisé. Ils durent
          généralement 2 heures et s’étalent sur une série de 10 séances, en
          fonction des modalités convenues au préalable. Cette répartition peut
          également varier en fonction du temps que la personne consacre à son
          travail personnel, nécessaire à l’élaboration de son projet
          professionnel.
        </p>
      </div>
    </section>
  );
};

export default BilanDuree;
