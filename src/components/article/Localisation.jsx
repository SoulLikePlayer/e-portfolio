import React, { useState, useEffect } from "react";
import Carte from "../composents/Carte";

import "../../styles/article/Localisation.css";

const Localisation = ({ closeSquare }) => {
    const positionCours = [ 49.1487204,  -0.354978]
    const [posAppareil, setPosAppareil] = useState(null); 
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("La géolocalisation n'est pas supportée par ce navigateur.");
            return;
        }

        const successCallback = (position) => {
            setPosAppareil([position.coords.latitude, position.coords.longitude]);
        };

        const errorCallback = (error) => {
            setError(error.message);
        };

        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }, []);

    return (
      <div className="localisation-container">
        <section className="intro-section text-center py-5">
          <h1>Ma localisation</h1>
          <p>Découvrez ma position géographique actuelle sur la carte ci-dessous.</p>
          {error && <p>Erreur: {error}</p>}
        </section>

        {posAppareil && positionCours ? (
          <>
            <Carte position={positionCours} positionAppareil={posAppareil} />
          </>
        ) : (
          <p>Obtention des positions en cours...</p>
        )}
      </div>
    );
};

export default Localisation;
