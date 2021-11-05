const express = require('express');
const path = require('path');

const app = express();

const htmlRoute = require('./routes/htmlRoutes');
const apiRoute = require('./routes/apiRoutes');

const port = process.env.port || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));

app.use(express.static('public'));  // loads the root file, links the js file, and the css file


app.use(express.json());

app.use(apiRoute);
app.use(htmlRoute);

// app.get('/', (req, res) => {
//     res.send('Navigate to /index or /notes');
// });

// app.get('/index', (req, res) => 
//     res.index(path.join(__dirname, 'public/index.html'))
// );

// app.get('/notes', (req, res) => 
//     res.notes(path.join(__dirname, 'public/notes.html'))
// );

// app.get('/')