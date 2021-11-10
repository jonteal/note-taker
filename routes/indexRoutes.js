const express = require('express');

const notesRouter = require('./apiRoutes');

const app = express();

app.use('./notes', notesRouter);

module.exports = app;









// // Variable to enable interaction with the file system
// const fs = require('fs');

// // Module that provides utilities for working with file and directory paths
// const path = require('path');

// // Variable for db.json path
// const db = require('../db/db.json');

// // Function Requiring the Uniqid package
// const uniqid = require('uniqid');

// // Variable to require the Router() function
// const router = require('express').Router();

// // Variable require the file system in order to readFromFile, writeToFile, and readAndAppend
// const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');

// // Get function to retrieve info from api/notes path
// router.get('/api/notes', (req, res) => {

//     // readFromFile function from db/db.json path
//     readFromFile('./db/db.json').then((data) => 
    
//     // Returns the response in JSON format
//     res.json(JSON.parse(data))
//     )
//     .catch((err) => console.log(err))
// });

// // Post function to add note object to 'api/notes' path
// router.post('/api/notes', (req, res) => {
    
//     // Sets the value of the req.body to const variable with title and text as the values
//     const { title, text } = req.body;

//     // newNote object
//     const newNote = {
//         title,
//         text,
//         id: uniqid(),
//     };

//     // reads and then appends the newNote object to the db/db.json endpoint
//     readAndAppend(newNote, '');

//     // Prints the req.body to the console
//     console.log(req.body);

//     // Sets the response in JSON format
//     res.json(newNote);

// })

// // Delete function to remove note object from apinotes:id path
// router.delete('/api/notes:id', (req, res) => {
//     const { id } = req.params;
// })

// // Exporting the router
// module.exports = router;