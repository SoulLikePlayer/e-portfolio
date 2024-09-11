/**
 * The Erreur function in JavaScript React displays an error message based on a given error code,
 * including a special message for error code 418.
 * @returns The `Erreur` component is returning a JSX structure that displays an error message based on
 * the `code` prop passed to it. The `getMessage` function inside the component uses a `switch`
 * statement to determine the appropriate error message based on the `code` provided.
 */
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/page/Erreur.css'
function Erreur({ code }) {
  const getMessage = (code) => {
    switch (code) {
      case 404:
        return "La page que vous recherchez est introuvable.";
      case 403:
        return "Vous n'avez pas la permission d'accéder à cette page.";
      case 500:
        return "Une erreur interne du serveur est survenue.";
      case 401:
        return "Vous devez vous connecter pour accéder à cette page.";
      case 503:
        return "Le service est temporairement indisponible.";
      case 418:
        return (
          <div className="tea-error">
            <h1>418 - Je suis une Théière</h1>
            <p>
              Vous avez essayé de me demander quelque chose que je ne peux pas faire. <br />
              Je suis une théière, pas un assistant. Je suis trop occupée à infuser du thé ! ☕️
            </p>
            <img src="../img/theiere.png" alt="Tea Pot" className="tea-img" />
          </div>
        );
      default:
        return "Une erreur inconnue est survenue.";
    }
  };
  return (
    <div className="erreur">
      <div className="error-container">
        <h1 className="error-code">{code}</h1>
        <p className="error-page-message">{getMessage(code)}</p>
        <a href="/" className="back-link">Retourner à la page d'accueil</a>
      </div>
    </div>
  );
}

Erreur.propTypes = {
  code: PropTypes.number.isRequired,
};

export default Erreur;
