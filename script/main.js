$(document).ready(function () {
  $(".animated-article").addClass("article-visible");
});

document.addEventListener('DOMContentLoaded', function() {
  const neonBorders = document.querySelectorAll('.neon-border');

  // Générer une couleur aléatoire en HSL
  function getRandomHSL() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 50%)`;
  }

  // Fonction pour changer la couleur des bordures néon
  function changeNeonColors() {
    neonBorders.forEach(border => {
      let currentHue = parseInt(border.dataset.hue, 10);
      currentHue = (currentHue + 1) % 360; // Incrémenter et revenir à 0 après 359
      const newColor = `hsl(${currentHue}, 100%, 50%)`;

      border.style.setProperty('--neon-color-1', newColor);
      border.style.setProperty('--neon-color-2', newColor);
      border.style.borderColor = newColor;
      border.style.boxShadow = `0 0 10px ${newColor}, 0 0 20px ${newColor}, 0 0 30px ${newColor}`;

      border.dataset.hue = currentHue; // Stocker la teinte actuelle
    });
  }

  neonBorders.forEach(border => {
    const color = getRandomHSL();
    border.style.borderColor = color;
    border.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`;
    border.dataset.hue = parseInt(color.match(/\d+/)[0], 10); // Initialiser la teinte
  });

  setInterval(changeNeonColors, 50);
});
