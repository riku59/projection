import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <h1>Contact</h1>
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
              cols="30"
              placeholder="Entrez votre message"
            ></textarea>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
<h1>Contact</h1>;
