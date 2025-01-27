import React from "react";

const BilanDeroulement = () => {
  return (
    <section className="deroulement_bilan">
      <h2>Comment se déroule un bilan de compétences ?</h2>
      <p>
        Le bilan comprend <b>obligatoirement trois phases</b> sous la conduite
        du prestataire. Le temps consacré à chaque phase est variable selon les
        actions conduites pour répondre au besoin de la personne.
      </p>
      <div className="deroulement">
        <h3>déroulement du bilan de compétence :</h3>
        <p>
          Un <b>premier rendez-vous gratuit et sans engagement</b> est proposé.
          Cet entretien permettra de cerner vos attentes et vérifier que le
          bilan de compétences est adapté à vos besoins.
        </p>
      </div>
      <div className="phase_preliminaire">
        <h3> Une phase préliminaire a pour objet :</h3>
        <ul>
          <li> D’analyser la demande et le besoin du bénéficiaire ;</li>
          <li>
            De déterminer le format le plus adapté à la situation et au besoin ;
          </li>
          <li>
            De définir conjointement les modalités de déroulement du bilan.
          </li>
        </ul>
      </div>
      <div className="phase_investigation">
        <h3>Une phase d'investigation permet au bénéficiaire :</h3>
        <ul>
          <li>
            d’analyser ses motivations et intérêts professionnels et personnels.
          </li>
          <li>
            d’identifier ses compétences et aptitudes professionnelles et
            personnelles.
          </li>
          <li>
            Construire son projet professionnel et en vérifier la pertinence .
          </li>
        </ul>
      </div>
      <div className="phase_conclusion">
        <h3> Une phase de conclusion</h3>
        <p>
          La phase conclusion permettra de mettre en place le plan d'action pour
          accéder au projet défini
        </p>
        <p>
          Cette phase se termine par la présentation au bénéficiaire des
          résultats détaillés et d’un document de synthèse. Les résultats du
          bilan sont la seule propriété du bénéficiaire. Ils ne peuvent être
          communiqués à un tiers qu’avec son accord.
        </p>
      </div>
    </section>
  );
};

export default BilanDeroulement;
