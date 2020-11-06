//npm run server
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const db = "mongodb://localhost:27017/MERN";

mongoose.connect(db, ({useUnifiedTopology: true, useNewUrlParser: true}))
    .then(console.log("Connected to Mongodb..."))
    .catch(err => console.log(err));

const noteSchema = new mongoose.Schema({
    title: String,
    body: String,
});

const Note = mongoose.model('note', noteSchema);

app.get("/notes", (req,res) => {
    Note.find().then( note => res.json(note));
});

app.post("/notes/create/", (req, res) => {
    const newNote = new Note({
        title: "",
        body: "",
    });

    newNote.save().then(note => res.json(note));
});

app.put("/notes/update/:id", (req, res) => {
    Note.findById(req.params.id)
    .then( note => {
        note.title = req.body.title;
        note.body = req.body.body;
        note.save();
    });
});

app.delete("/notes/delete/:id", (req, res) => {
    Note.findByIdAndDelete(req.params.id)
    .then(data => res.json({ data}))
});

app.listen(5000, ()=>{
    console.log("Server is running...");
});