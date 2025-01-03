import React, { useState, useEffect } from "react";
import Carte from "../composents/Carte";

import "../../styles/article/Localisation.css";

const Localisation = ({ closeSquare }) => {
    const position = [49.2861, -0.5950]; // Position fixe
    const [posAppareil, setPosAppareil] = useState(null); // Position obtenue via la géolocalisation
    const [error, setError] = useState(null); // Pour gérer les erreurs

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

        {/* Attente de la disponibilité des deux positions avant d'afficher la carte */}
        {posAppareil && position ? (
          <>
            <Carte position={position} positionAppareil={posAppareil} />
          </>
        ) : (
          <p>Obtention des positions en cours...</p>
        )}
      </div>
    );
};

export default Localisation;
