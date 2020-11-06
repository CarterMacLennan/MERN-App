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
    title: String,
    body: String,
});

const Note = mongoose.model('note', noteSchema);

app.get("/notes", async (req,res) => {
    let note = await Note.find();
    res.json(note);
});

app.post("/notes/create/", async (req, res) => {
    const newNote = new Note({
        title: "",
        body: "",
    });

    let note = await newNote.save();
    res.json(note);
});

app.put("/notes/update/:id", async (req, res) => {
    let note = await Note.findById(req.params.id);
    
    note.title = req.body.title;
    note.body = req.body.body;
    note.save();
});

app.delete("/notes/delete/:id", async (req, res) => {
    let data = await Note.findByIdAndDelete(req.params.id);
    res.json(data);
});

app.listen(5000, ()=>{
    console.log("Server is running...");
});