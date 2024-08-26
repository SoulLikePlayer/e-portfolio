import React from "react";
import Carte from "../Carte";

const Localisation = ({ closeSquare }) => {
    const position = [49.2861, -0.5950];
    return (
      <div>
        <button id="closeButton" onClick={closeSquare}>&#x1F5D9;</button>
        <section className="intro-section text-center py-5">
          <h1>Ma localisation</h1>
        </section>
        <Carte position={position} />
      </div>
    );
};

export default Localisation;
