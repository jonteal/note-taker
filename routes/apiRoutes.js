// Require Setups
const router = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const uniqid = require('uniqid');
const { json } = require('express');

// GET function from gets notes from api router
router.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST function for a new note
router.post('/api/notes', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uniqid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note successfully added!`);
    }
    else {
        res.error('Error in adding note');
    }
});

// Delete function to remove note object from apinotes:id path
router.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    readFromFile('./db/db.json').then((data) => {
        const notes = JSON.parse(data)
        const result = notes.filter((note) => note.id !== id);
        console.log(result);
        const newDb = writeToFile('./db/db.json', result)
        return newDb
    }).then(db => res.json(db))
})

module.exports = router;