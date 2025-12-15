module.exports = {
  mode: 'jit', // Utilisation du mode Just-in-Time (JIT) pour une compilation plus rapide
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', // Chemin vers les fichiers à purger pour une taille de fichier optimisée en production
    './public/index.html',
  ],
  darkMode: 'class', // Activer le mode sombre basé sur la classe
  theme: {
    extend: {
      colors: {
        // Définition de nouvelles couleurs personnalisées
        primary: '#4FD1C5',
        secondary: '#FF6347',
      },
      fontFamily: {
        // Définition de nouvelles polices personnalisées
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // Exemple d'activation de plugin
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
