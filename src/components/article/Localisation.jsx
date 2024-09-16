import React from "react";
import Carte from "../composents/Carte";

import "../../styles/article/Localisation.css";

const Localisation = ({ closeSquare }) => {
    const position = [49.2861, -0.5950];
    return (
      <div className="localisation-container">
        <section className="intro-section text-center py-5">
          <h1>Ma localisation</h1>
          <p>Découvrez ma position géographique actuelle sur la carte ci-dessous.</p>
        </section>
        <Carte position={position} />
      </div>
    );
};

export default Localisation;
