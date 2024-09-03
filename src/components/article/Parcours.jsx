import React from 'react';
import { Chrono } from 'react-chrono';

import '../../styles/article/parcours.css';

import { scolaire } from "../data/parcours"

function Parcours({ closeSquare }) {
  return (
    <section className="intro-section text-center py-5 parcours-container">
      <h1>Mon Parcours</h1>
      <Chrono
        items={scolaire}
        mode="VERTICAL"
        theme={{
          primary: '#0d6efd',
          secondary: '#ffffff',
          cardBgColor: '#f8f9fa',
          cardForeColor: '#000000',
          titleColor: '#0d6efd',
        }}
        cardHeight={150}
        scrollable
        hideControls
        timelinePointShape="square"
      />
    </section>
  );
}

export default Parcours;