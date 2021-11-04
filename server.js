const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.port || 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send();
})

app.listen(3001, () => {
    console.log('Listening on Port 3001!');
});

app.get('/api/', (req, res) => {
    
})