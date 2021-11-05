// Dependencies

const express = require("express");
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const db = require('../db/db.json');

const router = express.Router();

const { readFromFile, writeToFile, readAndAppend } = require('./helpers/fs');

router.get('/api/notes', (req, res) => res.json(db));

router.post('/api/notes', (req, res) => {
    const { title, text } = req.body;

    const newNote = {
        title,
        text,
        id: uuid(),
    };

    console.log(req.body);
    res.json(newNote);

})


module.exports = router;