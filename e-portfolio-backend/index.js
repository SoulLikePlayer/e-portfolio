const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes API
const personalInfoRouter = require('./routes/personalInfo');
const skillsRouter = require('./routes/skills');
const projectsRouter = require('./routes/projects');

app.use('/api/biographie', personalInfoRouter);
app.use('/api/competence', skillsRouter);
app.use('/api/project', projectsRouter);

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
