// Router variable to require express module
const router = require('express').Router();

// Path variable to require the path module
const path = require('path');

// GET function from the router
router.get('/notes', (req, res) => 

    // Sends the response to join the path / the notes directory name
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET function from the router 
router.get('*', (req, res) => 

    // Sends the response to join the path / the index directory name
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

// Exports the router
module.exports = router;