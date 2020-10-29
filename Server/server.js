//npm run server
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const db = "mongodb://localhost:27017/todo_app";

mongoose.connect(db, ({useUnifiedTopology: true, useNewUrlParser: true}))
    .then(console.log("Connected to Mongodb..."))
    .catch(err => console.log(err));

const noteSchema = new mongoose.Schema({
    id : Number,
    title: String,
    body: String,
});

const Note = mongoose.model('note', noteSchema);

const defaultNote = new Note({
    title: "Note 1",
    body: "Test 1"
  });

defaultNote.save();

app.get("/notes", (req,res) => {
    Note.find().then( note => res.json(note));
});

app.listen(5000, ()=>{
    console.log("Server is running...");
});