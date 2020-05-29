const express = require('express');
const router = express.Router();
const notes = require('../db/db.json'); 
const path = require('path');
const fs = require('fs');

// displaying notes.html page
    router.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html")) 

    })

// getting all notes from the db
    router.get('/api/notes', (req, res) => {
        let data = fs.readFileSync('db/db.json');
        data = JSON.parse(data)
        res.json(data);
    })

// saving a note to the db
    router.post('/api/notes', (req, res) => {
        const note = {
            id: notes.length + 1,
            title: req.body.title,
            text: req.body.text
        }

        notes.push(note)
        fs.writeFileSync('db/db.json', JSON.stringify(notes));
        res.json(note)
    })



// deleting a note from the db

    router.delete('/api/notes/:id', (req, res) => {
        // Find note in array
        console.log(`delete route activated ${req.params.id}`)
        const note = notes.find(c => c.id === parseInt(req.params.id));
        console.log(note);
        // Delete
        const index = notes.indexOf(note);
        notes.splice(index, 1);

        // Return note in array
        
        fs.writeFileSync('db/db.json', JSON.stringify(notes));
        res.json(note)

    })


module.exports = router;