const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('./fs');
const uniqid = require('uniqid');


notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uniqid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note successfully added!`);
    }
    else {
        res.error('Error in adding note');
    }
});

module.exports = notes;