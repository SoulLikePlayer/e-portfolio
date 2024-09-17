import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Importer le CSS de la bibliothèque

import '../../styles/article/parcours.css';
import { scolaire } from '../data/parcours';
import { FaGraduationCap, FaSchool } from 'react-icons/fa'; // Exemple d'icône

function Parcours() {
  return (
    <div className="parcours-page">
      <section className="intro-section text-center py-5">
        <h1 className="parcours-title">Mon Parcours</h1>
            </section>
            <div className='parcours-container'>
        <VerticalTimeline>
          {scolaire.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={item.title}
              contentStyle={{
                background: '#f8f9fa',
                color: '#000',
                border: '1px solid #dee2e6',
                borderRadius: '10px',
              }}
              contentArrowStyle={{ borderRight: '7px solid #dee2e6' }}
              iconStyle={{ background: '#0d6efd', color: '#fff' }}
              icon={index === 0 ? <FaGraduationCap /> : <FaSchool />} // Icône conditionnelle
            >
              <h3 className="vertical-timeline-element-title">{item.cardTitle}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.cardSubtitle}</h4>
              <p>{item.cardDetailedText}</p>

              {/* Si l'élément a des sous-événements (items), on les affiche */}
              {item.items && item.items.length > 0 && (
                <div className="sub-items">
                  {item.items.map((subItem, subIndex) => (
                    <div key={subIndex} className="sub-item">
                      <h4 className="vertical-timeline-element-subtitle">{subItem.cardTitle}</h4>
                      <p>{subItem.cardDetailedText}</p>
                    </div>
                  ))}
                </div>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        </div>  
    </div>
  );
}

export default Parcours;
