const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes API
const personalInfoRouter = require('./routes/personalInfo');
const skillsRouter = require('./routes/skills');
const projectsRouter = require('./routes/projects');

app.use('/api/personal-info', personalInfoRouter);
app.use('/api/skills', skillsRouter);
app.use('/api/projects', projectsRouter);

// Serve static files (optional, if needed)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
