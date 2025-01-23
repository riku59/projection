import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <div className="contact">
        {/* <div className="margin"></div> */}
        <div className="form_info">
          <div className="formulaire_contact">
            <form action="#">
              <div className="nom">
                <label htmlFor="nom">Nom et prenom</label>
                <input
                  type="text"
                  name="nom"
                  id="nom"
                  required
                  placeholder="Nom et prénom"
                />
              </div>
              <div className="email">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Entrez votre e-mail"
                />
              </div>
              <div className="objet">
                <label htmlFor="objet">Objet</label>
                <input
                  type="text"
                  name="objet"
                  id="objet"
                  required
                  placeholder="Objet"
                />
              </div>
              <div className="message">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="7"
                  placeholder="Entrez votre message"
                ></textarea>
              </div>
              <button>Envoyer</button>
            </form>
          </div>
          <div className="info">
            <div className="adresse">
              <h6>Adresse</h6>
              <p>16 rue de maraîchers 62500 Saint Omer</p>
            </div>
            <div className="telephone">
              <h6>Téléphone</h6>
              <p>07 83 78 29 70</p>
            </div>
            <div className="mail">
              <h6>Email </h6>
              <p>amandine.tetart@yahoo.fr</p>
            </div>
            <div className="social">
              <h6>Linkedin</h6>
              <a href="https://www.linkedin.com/in/amandine-tetart-2b8255155/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
