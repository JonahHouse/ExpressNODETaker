
// Require Express
const express = require('express');
const app = express();
const fs = require('fs');
const { join } = require('path');
app.use(express.static(join(__dirname, 'public')))
router = express.Router();

let notes = (require('./public/db.json'))



// Main, not sure how to *
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

// Routing Notes Page
app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/public/notes.html')
    console.log(notes);
});

// Getting and Displaying notes on /notes
app.get('/api/notes', (req, res) => {
    
});

// Database Modification 

// Delete
app.get('/api/notes/:id/', (req, res) => {
    let id = parseInt(req.params.id);
    const target = notes.findIndex(function(target){
        return target.id === id;
    });
    notes.splice(target, 1);
    console.log(notes);
});


// Post notes to /api/notes
app.post('/api/notes', (req, res) => {
    
});

app.listen(3000, () => console.log(`Listening on port 3000...`))
