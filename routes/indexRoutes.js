const express = require('express');

const notesRouter = require('./apiRoutes');

const app = express();

app.use('./notes', notesRouter);

module.exports = app;