// Dependencies

const express = require("express");
const fs = require('fs');
const path = require('path');
const db = require('../db/db.json');

const router = require('express').Router();

// const { readFromFile, writeToFile, readAndAppend } = require('./helpers');

router.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => 
    res.json(JSON.parse(data))
    )
    .catch((err) => console.log(err))
});



router.post('/api/notes', (req, res) => {
    const { title, text } = req.body;

    const newNote = {
        title,
        text,
        id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');

    console.log(req.body);
    res.json(newNote);

})


module.exports = router;