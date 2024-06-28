const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Route pour récupérer les compétences
router.get('/', (req, res) => {
  const dataPath = path.join(__dirname, '../data/skills.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading skills file:', err);
      res.status(500).send('Server Error');
      return;
    }
    try {
      const skills = JSON.parse(data);
      res.json(skills);
    } catch (parseError) {
      console.error('Error parsing skills JSON:', parseError);
      res.status(500).send('Server Error');
    }
  });
});

module.exports = router;
