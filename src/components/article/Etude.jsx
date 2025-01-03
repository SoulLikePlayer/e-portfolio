import React, { useState, useCallback } from 'react';
import '../../styles/article/Etude.css';
import { etudeData } from '../data/etude';

function Etude() {
    const [currentSection, setCurrentSection] = useState(1);
    const [currentYears, setCurrentYears] = useState(1);

    const handleNextSection = useCallback(() => {
        setCurrentSection(prevSection => Math.min(prevSection + 1, 6));
    }, []);

    const handlePrevSection = useCallback(() => {
        setCurrentSection(prevSection => Math.max(prevSection - 1, 1));
    }, []);

    const handleYearChange = useCallback((year) => {
        setCurrentYears(year);
    }, []);

    return (
        <div className="etude-page">
            <section className="intro-section text-center py-5">
                <h1>Mes études</h1>
            </section>
            <div className='etude-container'>
                <div className='etude-text'>
                    <h1>{etudeData[`UE${currentSection}`].titre} | {etudeData[`UE${currentSection}`].descritpion[`${currentYears} année`].titre}</h1>
                    <h2>{etudeData[`UE${currentSection}`].descritpion[`${currentYears} année`].descritpion.titre}</h2>
                    <h3>1er Semestre</h3>
                    <h3>2eme Semestre</h3>
                    <div className="navigation">
                        {Array.from({ length: 3 }, (_, i) => i + 1).map((annee) => (
                            <button
                                key={annee}
                                onClick={() => handleYearChange(annee)}
                                className={currentYears === annee ? 'active pagination' : 'pagination'}
                            >
                                {`Année N°${annee}`}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="navigation">
                    <button onClick={handlePrevSection} disabled={currentSection === 1}>Précédent</button>
                    {Array.from({ length: 6 }, (_, i) => i + 1).map((index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSection(index)}
                            className={currentSection === index ? 'active pagination' : 'pagination'}
                        >
                            {`Ressource N°${index}`}
                        </button>
                    ))}
                    <button onClick={handleNextSection} disabled={currentSection === 6}>Suivant</button>
                </div>
            </div>
        </div>
    );
}

export default Etude;
