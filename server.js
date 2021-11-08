// Requiring Express module with express function
const express = require('express');

// Object that calls the express function
const app = express();

// Sets the port up for the listener
const PORT = process.env.PORT || 3001;

// Definines the port that the server is listening on. In this case, we are referencing the PORT function
app.listen(PORT, () => 
    console.log(`Listening on port http://localhost:${PORT}...`)
);


const path = require('path');


const api = require('./routes/indexRoutes.js');



const htmlRoute = require('./routes/htmlRoutes');


app.use(htmlRoute);



const apiRoute = require('./routes/indexRoutes');


app.use(apiRoute);

// Loads the static files like the javascript and css files
app.use(express.static('public'));  


app.use(express.json());

