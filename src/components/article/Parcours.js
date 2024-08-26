import React from 'react';
import { Chrono } from 'react-chrono';

import '../../styles/parcours.css';

function Parcours({ closeSquare }) {
  const scolaire = [
    {
      title: '2023 - 2025',
      cardTitle: 'IUT Informatique de Ifs',
      cardSubtitle: 'Université de Technologie',
      cardDetailedText: 'Formation approfondie en informatique avec spécialisation en développement web et génie logiciel.',
    },
    {
      title: '2020 - 2023',
      cardTitle: 'Lycée Bayeux, Alain-Chartier',
      cardSubtitle: 'Baccalauréat',
      items: [
        {
            title: "2023",
            cardTitle: "2023 : Conférence 'Math en jean'",
            cardDetailedText: "Développement en équipe d'une simulation de tantrix",
        },
        {
            title: "2023",
            cardTitle: "2023 : Année de terminal",
            cardDetailedText: "Spécialité : Mathématique - NSI"
        },
        {
            title: "2022",
            cardTitle: "2022 : Année de première",
            cardDetailedText: "Spécialité : Mathématique - NSI - Physique-Chimie"
        }
      ]
    },
    {
      title: '2016 - 2020',
      cardTitle: 'Collège Creully, Jean de la Varende',
      cardSubtitle: 'Diplôme National du Brevet',
      items: [
        {
            title: "2020",
            cardTitle: "2020 : Stage de 3ème",
            cardSubtitle: "Entreprise ACGB",
            cardDetailedText: "Découverte du monde professionnel dans une entreprise",
        }
      ]
    },
  ];

  return (
    <div className="parcours-container">
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
    </div>
  );
}

export default Parcours;