const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Route pour récupérer les projets
router.get('/', (req, res) => {
  const dataPath = path.join(__dirname, '../data/projects.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading projects file:', err);
      res.status(500).send('Server Error');
      return;
    }
    try {
      const projects = JSON.parse(data);
      res.json(projects);
    } catch (parseError) {
      console.error('Error parsing projects JSON:', parseError);
      res.status(500).send('Server Error');
    }
  });
});

module.exports = router;
