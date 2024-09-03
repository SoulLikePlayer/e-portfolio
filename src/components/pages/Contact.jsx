import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaExclamationCircle } from "react-icons/fa";
import "../../styles/page/Contact.css";

function Contact() {
  const formik = useFormik({
    initialValues: {
      nom: "",
      prenom: "",
      email: "",
      entreprise: "",
      objet: "",
      message: "",
    },
    validationSchema: Yup.object({
      nom: Yup.string().required("Le nom est obligatoire"),
      email: Yup.string()
        .email("Adresse email invalide")
        .required("L'email est obligatoire"),
      message: Yup.string().required("Le message est obligatoire"),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send('service_alokbam', "template_tu0o3w8", values, 'LFlDCU3TiUNNJfMx9')
        .then(
          (result) => {
            console.log(result.text);
            alert("Message envoyé avec succès!");
            resetForm();
          },
          (error) => {
            console.log(error.text);
            alert("Une erreur s'est produite, veuillez réessayer plus tard.");
          }
        );
    },
  });

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h2 id="contact">Contactez-moi</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Nom <span>*</span>:
          <input
            type="text"
            name="nom"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nom}
            className={formik.touched.nom && formik.errors.nom ? "input-error" : ""}
          />
          {formik.touched.nom && formik.errors.nom ? (
            <div className="error-message">
              <FaExclamationCircle className="error-icon" /> {formik.errors.nom}
            </div>
          ) : null}
        </label>
        <label>
          Prénom:
          <input
            type="text"
            name="prenom"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.prenom}
          />
        </label>
        <label>
          Email <span>*</span>:
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={formik.touched.email && formik.errors.email ? "input-error" : ""}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error-message">
              <FaExclamationCircle className="error-icon" /> {formik.errors.email}
            </div>
          ) : null}
        </label>
        <label>
          Entreprise:
          <input
            type="text"
            name="entreprise"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.entreprise}
          />
        </label>
        <label>
          Objet:
          <input
            type="text"
            name="objet"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.objet}
          />
        </label>
        <label>
          Message <span>*</span>:
          <textarea
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className={formik.touched.message && formik.errors.message ? "input-error" : ""}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="error-message">
              <FaExclamationCircle className="error-icon" /> {formik.errors.message}
            </div>
          ) : null}
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </motion.div>
  );
}

export default Contact;
