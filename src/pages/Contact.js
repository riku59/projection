import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <h1>Contact</h1>
      <div className="formulaire_contact">
        <form action="#">
          <label htmlFor="nom">Nom et prenom</label>
          <input
            type="text"
            name="nom"
            id="nom"
            required
            placeholder="Nom et prénom"
          />
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Entrez votre e-mail"
          />
          <label htmlFor="objet">Objet</label>
          <input
            type="text"
            name="objet"
            id="objet"
            required
            placeholder="Objet"
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            placeholder="Entrez votre message"
          ></textarea>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
<h1>Contact</h1>;
