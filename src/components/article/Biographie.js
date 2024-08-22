import React from 'react';

const Biographie = ({ closeSquare }) => {
  const data = {
    name: "Louis Lazare",
    email: "louislazare.pro@gmail.com",
    phone: "+33783105098",
    github: "https://github.com/SoulLikePlayer/"
  };

  return (
    <div>
      <button id="closeButton" onClick={closeSquare}>&#x1F5D9;</button>
      <section className="intro-section text-center py-5">
        <h1>{data.name}</h1>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 mt-4 -mx-4">
        <div className="rounded bg-white p-4 col-span-6 rounded shadow-md text-dark article-container">  
          <p>Email: {data.email}</p><br />
          <p>Téléphone: {data.phone}</p><br /> 
          <p><a href={data.github} target="_blank" rel="noopener noreferrer">Voir mon GitHub</a></p>
        </div>
      </div>
    </div>
  );
};

export default Biographie;
