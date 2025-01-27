import React from "react";

const BilanFiancement = () => {
  return (
    <section className="bilan_financement">
      <h2>Financement</h2>
      <div className="financement">
        <h3> Financement par France travail ou CAP emploi</h3>
        <p>
          Si vous êtes demandeur d'emploi ou bénéficiaire d'une reconnaissance
          de travailleur handicapé, vous pouvez solliciter votre conseiller
          France travail ou CAP Emploi pour une prise en charge totale ou
          partielle, à défaut de la mobilisation de votre CPF ou d'autres
          dispositifs d'accompagnement.
        </p>
      </div>
      <div className="financement_perso">
        <h3> Financement personnel</h3>
        <div className="txt_comment">
          <p>
            Si vous n'êtes pas éligible au CPF, ou à tout autre financement,
            vous pouvez envisager un financement personnel .
          </p>

          <p>
            Depuis le 2 mai 2024, vous devez participer au financement du bilan
            de compétences via le CPF à hauteur de 100 €.
            <a
              href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049486478"
              target="_blank"
              rel="noopener noreferrer"
            >
              lien Décret n° 2024-394
            </a>
          </p>

          <p>
            <b>A savoir :</b> Votre opérateur de compétences (OPCO) ou votre
            employeur peut prendre en charge ces 100 euros. Cette somme est
            indexée sur l'inflation et revue par arrêté ministériel tous les
            1ers janviers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BilanFiancement;
