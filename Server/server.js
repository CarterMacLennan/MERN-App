//npm run server
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const db = "mongodb://localhost:27017/MERN";

mongoose.connect(db, ({useUnifiedTopology: true, useNewUrlParser: true}))
    .then(console.log("Connected to MongoDB..."))
    .catch(err => console.log(err));

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        default: "",
    },
    body: {
        type: String,
        default: ""
    },
});

const Note = mongoose.model('note', noteSchema);

app.route("/notes")

.get(async (req,res) => {
    try {
        res.json( await Note.find());
    } catch(err) {
        console.log(err);
    }
})

.post(async (req, res) => {
    try {
        const newNote = new Note;
        res.json( await newNote.save());
    } catch(err) {
        console.log(err);
    }
});

app.route("/notes/:id")

.put(async (req, res) => {
    try {
        let note = await Note.findById(req.params.id);
        note.title = req.body.title;
        note.body = req.body.body;
        
        res.json( await note.save());
    } catch(err) {
        console.log(err);
    }
})

.delete(async (req, res) => {
    try {
        res.json( await Note.findByIdAndDelete(req.params.id));
    } catch(err) {
        console.log(err);
    }
});

app.listen(5000, ()=>{
    console.log("Server is running...");
});