const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs/promises');

// Chemin vers les données du portfolio
const portfolioDataPath = path.join(__dirname, '../data/portfolio.json');

// GET /api/portfolio
router.get('/', async (req, res) => {
  try {
    const portfolioData = await fs.readFile(portfolioDataPath, 'utf-8');
    res.json(JSON.parse(portfolioData));
  } catch (err) {
    console.error('Error reading portfolio data:', err);
    res.status(500).json({ error: 'Failed to load portfolio data' });
  }
});

module.exports = router;
