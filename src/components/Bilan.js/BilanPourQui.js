import React from "react";

const BilanPourQui = () => {
  return (
    <section className="pour_qui" aria-labelledby="pour-qui-title">
      <h2>Pour qui?</h2>
      <div className="pour_qui_txt">
        <p>Toute personne active, notamment :</p>
        <p>
          ⦁ Les salariés du secteur privé, ainsi que les travailleurs
          indépendants ;
        </p>
        <p>
          ⦁ Les demandeurs d’emploi : la demande doit être faite auprès de
          France Travail, de l’APEC ou de Cap emploi ;
        </p>
        <p>
          ⦁ Les agents du secteur public (fonctionnaires, agents non titulaires,
          etc.) : textes spécifiques mais dans des conditions similaires aux
          salariés ;
        </p>
        <p>Lien utiles : </p>
        <a
          href="https://www.fonction-publique.gouv.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site du gouvernement
        </a>
        <br />
        <a
          href="https://www.anfh.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          site de anfh
        </a>
        <p>⦁ Tout autre titulaire de compte personnel de formation (CPF)</p>
      </div>
    </section>
  );
};

export default BilanPourQui;
