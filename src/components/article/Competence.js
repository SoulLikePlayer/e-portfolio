import React from 'react';

const Competence = ({ closeSquare }) => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express",
    "React",
    "Tailwind CSS",
    "Python",
    "Java",
    "JavaFX",
    "Rust",
    "PHP"
  ];

  return (
    <div>
      <button id="closeButton" onClick={closeSquare}>&#x1F5D9;</button>
      <section className="intro-section text-center py-5">
        <h1>Compétences</h1>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 mt-4 -mx-4">
        <div className="rounded bg-white p-4 col-span-6 rounded shadow-md text-dark article-container">
          <ul>
            {skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Competence;
