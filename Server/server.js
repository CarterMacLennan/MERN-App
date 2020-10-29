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

app.get("/notes", (req,res) => {
    Note.find().then( note => res.json(note));
});

app.delete("/notes/:id", (req, res) => {
    Note.findByIdAndDelete(req.params.id)
    .then(() => res.json({ remove: true}))
})

app.listen(5000, ()=>{
    console.log("Server is running...");
});