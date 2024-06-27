document.addEventListener('DOMContentLoaded', function () {
  const lightModeBtn = document.getElementById('light-mode-btn');
  const darkModeBtn = document.getElementById('dark-mode-btn');
  const body = document.body;

  const hamburgerMenu = document.querySelector('.first-button');

  // Gestion du clic sur le bouton Light Mode
  lightModeBtn.addEventListener('click', function () {
      body.classList.remove('bg-dark', 'text-light');
      hamburgerMenu.classList.remove('light-mode');
      body.classList.add('bg-light', 'text-dark');
      hamburgerMenu.classList.add('dark-mode');
  });

  // Gestion du clic sur le bouton Dark Mode
  darkModeBtn.addEventListener('click', function () {
      body.classList.remove('bg-light', 'text-dark');
      hamburgerMenu.classList.remove('dark-mode');
      body.classList.add('bg-dark', 'text-light');
      hamburgerMenu.classList.add('light-mode');
      
  });

  // Gestion du clic sur le bouton de la navbar
  document.querySelector('.first-button').addEventListener('click', function () {
      document.querySelector('.animated-icon1').classList.toggle('open');
  });
});
