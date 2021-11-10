// Requiring Express module with express function
const express = require('express');

const htmlRoute = require('./routes/htmlRoutes');
const apiRoute = require('./routes/apiRoutes');
const path = require('path');

// Object that calls the express function
const app = express();

// Sets the port up for the listener
const PORT = process.env.PORT || 3001;


app.use(express.json());

// Loads the static files like the javascript and css files
app.use(express.static('public'));  

app.use(express.urlencoded({extended:true}));

app.use(apiRoute);


app.use(htmlRoute);


// Definines the port that the server is listening on. In this case, we are referencing the PORT function
app.listen(PORT, () => 
    console.log(`Listening on port http://localhost:${PORT}...`)
);