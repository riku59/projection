import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Bilan = () => {
  return (
    <div>
      <Navigation />
      <div className="bilan">
        <h1>Bilan de compétence</h1>
        <div className="pour_qui">
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
              ⦁ Les agents du secteur public (fonctionnaires, agents non
              titulaires, etc.) : textes spécifiques mais dans des conditions
              similaires aux salariés ;
            </p>
            <p>Lien utiles : </p>
            <a href="https://www.fonction-publique.gouv.fr">
              Site du gouvernement
            </a>
            <br />
            <a href="https://www.anfh.fr/">site de anfh</a>
            <p>⦁ Tout autre titulaire de compte personnel de formation (CPF)</p>
          </div>
        </div>
        <div className="objectif">
          <h2>Objectif</h2>
          <h3>
            Le souhait de faire un bilan de compétences est avant tout une
            démarche personnelle et volontaire.
          </h3>
          <p>L'objectif de cet accompagnement est :</p>
          <ul>
            <li>
              • D’analyser ses compétences personnelles et professionnelles,{" "}
            </li>
            <li>• D'analyser ses aptitudes et ses motivations ;</li>
            <li>• De définir un ou plusieurs projets professionnels </li>
            <li>• Mettre en place un plan d'action pour réaliser son projet</li>
          </ul>
        </div>
        <div className="Comment">
          <h2>Comment?</h2>
          <div className="compte_formation">
            <h3>
              1/ Les bilans de compétences sont éligibles au compte personnel de
              formation
              <a href="https://travail-emploi.gouv.fr/le-compte-personnel-de-formation-cpf">
                lien vers le CPF
              </a>
            </h3>
            <p>
              Lorsque le salarié mobilise son compte personnel de formation pour
              un bilan réalisé hors temps de travail,l’employeur n’a pas à en
              être informé.
            </p>
            <p>
              Lorsque le salarié mobilise son compte personnel de formation pour
              un bilan en tout ou partie, pendant le temps de travail, il doit
              demander l’accord préalable de l’employeur selon les au personnel
              de formation.
            </p>
          </div>

          <div className="plan_developpement">
            <h3>
              2/ Dans le cadre du plan de développement des compétences de
              l'entreprise (salariés) ou d'un congé de reclassement :
              <a href="https://travail-emploi.gouv.fr/le-plan-de-developpement-des-competences">
                Lien vers le plan de développement
              </a>
            </h3>
            <p>
              Le bilan de compétences ne peut être réalisé qu’avec le
              consentement du salarié.
            </p>
            <p>
              Il fait l’objet d’une convention tripartite signée par le salarié,
              l’employeur et l’organisme prestataire de bilan. La convention
              précise les objectifs, le contenu, les moyens, la réalisation, et
              les modalités de réalisation, les modalités de remise des
              résultats détaillés et du document de synthèse ainsi que le prix
              et les modalités de règlement du bilan.
            </p>
            <p>
              Le salarié dispose d’un délai de 10 jours pour faire connaître son
              acceptation en restituant la convention qu'il aura signée.
            </p>
            <p>
              L’absence de réponse du salarié au terme de ce délai vaut refus.
              Ce refus ne constitue ni une faute ni un motif de licenciement.
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
          <div className="financement">
            <h2>3/ Financement par France travail ou CAP emploi</h2>
            <p>
              Si vous êtes demandeur d'emploi ou bénéficiaire d'une
              reconnaissance de travailleur handicapé, vous pouvez solliciter
              votre conseiller France travail ou CAP Emploi pour une prise en
              charge totale ou partielle, à défaut de la mobilisation de votre
              CPF ou d'autres dispositifs d'accompagnement.
            </p>
          </div>
          <div className="financement_perso">
            <h3>4/ Financement personnel</h3>
            <p>
              Si vous n'êtes pas éligible au CPF, ou à tout autre financement,
              vous pouvez envisager un financement personnel
            </p>
          </div>
          <span>
            Depuis le 2 mai 2024, vous devez participer au financement du bilan
            de compétences via le CPF à hauteur de 100 €.
          </span>
          <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049486478">
            lien Décret n° 2024-394
          </a>
          <h4>A savoir :</h4>
          <p>
            Votre opérateur de compétences (OPCO) ou votre employeur peut
            prendre en charge ces 100 euros. Cette somme est indexée sur
            l'inflation et revue par arrêté ministériel tous les 1ers janviers.
          </p>
        </div>
        <div className="duree">
          <h2>Durée</h2>
          <p>
            La durée du bilan de compétences varie selon le besoin de la
            personne. Elle est au maximum de 24 heures. Elle se répartit
            généralement sur plusieurs semaines.
          </p>

          <p>
            Les entretiens se font en face en face et sont en général d'une
            durée de 2h sur 10 entretiens en fonction des modalités établies
            ainsi que du temps de travail personnel.
          </p>
        </div>

        <div className="deroulement_bilan">
          <h2>Comment se déroule un bilan de compétences ?</h2>
          <p>
            Le bilan comprend <b>obligatoirement trois phases</b> sous la
            conduite du prestataire. Le temps consacré à chaque phase est
            variable selon les actions conduites pour répondre au besoin de la
            personne.
          </p>
          <div className="deroulement">
            <h4>déroulement</h4>
            <p>
              Un <b>premier rendez-vous gratuit et sans engagement</b> est
              proposé. Cet entretien permettra de cerner vos attentes et
              vérifier que le bilan de compétences est adapté à vos besoins.
            </p>
          </div>
          <div className="phase_preliminaire">
            <h3>1/ Une phase préliminaire a pour objet :</h3>
            <ul>
              <li>• D’analyser la demande et le besoin du bénéficiaire ;</li>
              <li>
                • De déterminer le format le plus adapté à la situation et au
                besoin ;
              </li>
              <li>
                • De définir conjointement les modalités de déroulement du
                bilan.
              </li>
            </ul>
          </div>
          <div className="phase_conclusion">
            <h3>3/ Une phase de conclusion</h3>
            <p>
              La phase conclusion permettra de mettre en place le plan d'action
              pour accéder au projet défini
            </p>
            <p>
              Cette phase se termine par la présentation au bénéficiaire des
              résultats détaillés et d’un document de synthèse. Les résultats du
              bilan sont la seule propriété du bénéficiaire. Ils ne peuvent être
              communiqués à un tiers qu’avec son accord.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bilan;
