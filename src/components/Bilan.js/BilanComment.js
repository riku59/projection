import React from "react";

const BilanComment = () => {
  return (
    <section className="comment">
      <h2>Comment faire un bilan de compétence?</h2>
      <div className="compte_formation">
        <h3>
          Les bilans de compétences sont éligibles au compte personnel de
          formation
          <a
            href="https://travail-emploi.gouv.fr/le-compte-personnel-de-formation-cpf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir son compte personnel de formation
          </a>
        </h3>
        <div className="txt_comment">
          <p>
            Lorsque le salarié mobilise son compte personnel de formation pour
            un bilan réalisé hors temps de travail,l’employeur n’a pas à en être
            informé.
          </p>
          <p>
            Lorsque le salarié mobilise son compte personnel de formation pour
            un bilan en tout ou partie, pendant le temps de travail, il doit
            demander l’accord préalable de l’employeur selon les au personnel de
            formation.
          </p>
        </div>
      </div>

      <div className="plan_developpement">
        <h3>
          Dans le cadre du plan de développement des compétences de l'entreprise
          (salariés) ou d'un congé de reclassement :
          <a
            href="https://travail-emploi.gouv.fr/le-plan-de-developpement-des-competences"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lien vers le plan de développement
          </a>
        </h3>
        <div className="txt_comment">
          <p>
            Le bilan de compétences ne peut être réalisé qu’avec le consentement
            du salarié.
          </p>
          <p>
            Il fait l’objet d’une convention tripartite signée par le salarié,
            l’employeur et l’organisme prestataire de bilan. La convention
            précise les objectifs, le contenu, les moyens, la réalisation, et
            les modalités de réalisation, les modalités de remise des résultats
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
            Lorsque le bilan est réalisé sur le temps de travail, il est
            assimilé à l’exécution normale du contrat de travail. Le coût du
            bilan est à la charge de l’employeur, sauf dans les cas où le CPF
            est mobilisé.
          </p>
          <p>
            Un bilan de compétences peut être préconisé à l’occasion d’un en
            évolution professionnelle (CEP). Les attentes sont définies
            conjointement par le bénéficiaire et son conseiller CEP, en lien
            avec le prestataire externe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BilanComment;
