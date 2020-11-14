//npm run server
const express = require("express");
const mongoose = require("mongoose");
const helmet = require('helmet')

const app = express();
app.use(express.json());

const db = "mongodb://localhost:27017/MERN";

mongoose.connect(process.env.MONGO_URL || db, ({useUnifiedTopology: true, useNewUrlParser: true}))
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

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('/Client/app/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/Client/app/build/index.html'));
    });
}

app.get("/notes", async (req,res) => {
    try {
        let note = await Note.find();
        res.json(note);
    } catch(err) {
        console.log(err);
    }
});

app.post("/notes/create/", async (req, res) => {
    try {
        const newNote = new Note;
        let data = await newNote.save();
        res.json(data);
    } catch(err) {
        console.log(err);
    }
});

app.put("/notes/update/:id", async (req, res) => {
    try {
        let note = await Note.findById(req.params.id);
        note.title = req.body.title;
        note.body = req.body.body;
        note.save();
    } catch(err) {
        console.log(err);
    }
});

app.delete("/notes/delete/:id", async (req, res) => {
    try {
        let data = await Note.findByIdAndDelete(req.params.id);
        res.json(data);
    } catch(err) {
        console.log(err);
    }
});

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server is running...");
});