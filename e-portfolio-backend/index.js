const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
console.log("Test 1");
app.use(bodyParser.json());
console.log("Test 2");
app.use(bodyParser.urlencoded({ extended: true }));
console.log("Test 3");

// Routes API
const portfolioRouter = require('./routes/portfolio');
app.use('/api/portfolio', portfolioRouter);

// Serve static files (optional, if needed)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
