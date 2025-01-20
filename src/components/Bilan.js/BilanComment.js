import React from "react";

const BilanComment = () => {
  return (
    <section className="comment">
      <h2>Comment?</h2>
      <div className="compte_formation">
        <h3>
          1/ Les bilans de compétences sont éligibles au compte personnel de
          formation
          <a
            href="https://travail-emploi.gouv.fr/le-compte-personnel-de-formation-cpf"
            target="_blank"
            rel="noopener noreferrer"
          >
            lien vers le CPF
          </a>
        </h3>
        <p>
          Lorsque le salarié mobilise son compte personnel de formation pour un
          bilan réalisé hors temps de travail,l’employeur n’a pas à en être
          informé.
        </p>
        <p>
          Lorsque le salarié mobilise son compte personnel de formation pour un
          bilan en tout ou partie, pendant le temps de travail, il doit demander
          l’accord préalable de l’employeur selon les au personnel de formation.
        </p>
      </div>

      <div className="plan_developpement">
        <h3>
          2/ Dans le cadre du plan de développement des compétences de
          l'entreprise (salariés) ou d'un congé de reclassement :
          <a
            href="https://travail-emploi.gouv.fr/le-plan-de-developpement-des-competences"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lien vers le plan de développement
          </a>
        </h3>
        <p>
          Le bilan de compétences ne peut être réalisé qu’avec le consentement
          du salarié.
        </p>
        <p>
          Il fait l’objet d’une convention tripartite signée par le salarié,
          l’employeur et l’organisme prestataire de bilan. La convention précise
          les objectifs, le contenu, les moyens, la réalisation, et les
          modalités de réalisation, les modalités de remise des résultats
          détaillés et du document de synthèse ainsi que le prix et les
          modalités de règlement du bilan.
        </p>
        <p>
          Le salarié dispose d’un délai de 10 jours pour faire connaître son
          acceptation en restituant la convention qu'il aura signée.
        </p>
        <p>
          L’absence de réponse du salarié au terme de ce délai vaut refus. Ce
          refus ne constitue ni une faute ni un motif de licenciement.
        </p>
        <p>
          Lorsque le bilan est réalisé sur le temps de travail, il est assimilé
          à l’exécution normale du contrat de travail. Le coût du bilan est à la
          charge de l’employeur, sauf dans les cas où le CPF est mobilisé.
        </p>
        <p>
          Un bilan de compétences peut être préconisé à l’occasion d’un en
          évolution professionnelle (CEP). Les attentes sont définies
          conjointement par le bénéficiaire et son conseiller CEP, en lien avec
          le prestataire externe.
        </p>
      </div>
      <div className="financement">
        <h3>3/ Financement par France travail ou CAP emploi</h3>
        <p>
          Si vous êtes demandeur d'emploi ou bénéficiaire d'une reconnaissance
          de travailleur handicapé, vous pouvez solliciter votre conseiller
          France travail ou CAP Emploi pour une prise en charge totale ou
          partielle, à défaut de la mobilisation de votre CPF ou d'autres
          dispositifs d'accompagnement.
        </p>
      </div>
      <div className="financement_perso">
        <h3>4/ Financement personnel</h3>
        <p>
          Si vous n'êtes pas éligible au CPF, ou à tout autre financement, vous
          pouvez envisager un financement personnel
        </p>
      </div>
      <span>
        Depuis le 2 mai 2024, vous devez participer au financement du bilan de
        compétences via le CPF à hauteur de 100 €.
      </span>
      <a
        href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049486478"
        target="_blank"
        rel="noopener noreferrer"
      >
        lien Décret n° 2024-394
      </a>
      <h4>A savoir :</h4>
      <p>
        Votre opérateur de compétences (OPCO) ou votre employeur peut prendre en
        charge ces 100 euros. Cette somme est indexée sur l'inflation et revue
        par arrêté ministériel tous les 1ers janviers.
      </p>
    </section>
  );
};

export default BilanComment;
