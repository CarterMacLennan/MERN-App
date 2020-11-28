const path = require('path'),
    express = require('express'),
    mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '/client/build')));

mongoose.connect(process.env.DB_URI, ({useUnifiedTopology: true, useNewUrlParser: true}))
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
        await Note.findByIdAndDelete(req.params.id);
        req.method = 'GET';
        res.redirect(200, '/notes');
    } catch(err) {
        console.log(data);
    }
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/../client/build', "index.html"));
});

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server is running...");
});