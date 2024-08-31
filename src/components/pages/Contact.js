// Contact.js

import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../../styles/page/Contact.css";
import {motion} from "framer-motion";


function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    entreprise: "",
    objet: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nom || !formData.email || !formData.message) {
      alert("Veuillez remplir les champs obligatoires: Nom, Email et Message");
      return;
    }

    emailjs.send('service_alokbam', "template_tu0o3w8", formData, 'LFlDCU3TiUNNJfMx9')
      .then((result) => {
        console.log(result.text);
        alert("Message envoyé avec succès!");
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          entreprise: "",
          objet: "",
          message: ""
        });
      }, (error) => {
        console.log(error.text);
        alert("Une erreur s'est produite, veuillez réessayer plus tard.");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <motion.div className="contact-container"
    initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}>
      <h2 id="contact">Contactez-moi</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom <span>*</span>:
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
        </label>
        <label>
          Prénom:
          <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} />
        </label>
        <label>
          Email <span>*</span>:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Entreprise:
          <input type="text" name="entreprise" value={formData.entreprise} onChange={handleChange} />
        </label>
        <label>
          Objet:
          <input type="text" name="objet" value={formData.objet} onChange={handleChange} />
        </label>
        <label>
          Message <span>*</span>:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </motion.div>
  );
}

export default Contact;
