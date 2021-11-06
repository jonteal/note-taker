const express = require('express');
const path = require('path');
const api = require('./routes/apiRoutes.js');

const app = express();

const htmlRoute = require('./routes/htmlRoutes');
const apiRoute = require('./routes/apiRoutes');

// Sets the port up for the listener
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => 
    console.log(`Listening on port http://localhost:${PORT}...`)
);

// Loads the static files like the javascript and css files
app.use(express.static('public'));  


app.use(express.json());

app.use(apiRoute);
app.use(htmlRoute);