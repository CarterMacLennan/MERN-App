const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const db = "mongodb://localhost:27017/todo_app";

mongoose.connect(db, ({useUnifiedTopology: true, useNewUrlParser: true}))
    .then(console.log("Connected to Mongodb..."))
    .catch(err => console.log(err));

const todoSchema = new mongoose.Schema({
    title: String,
    checked:{
        type: Boolean,
        default: false
    }
});

const todo = mongoose.model('todo',todoSchema);

app.get("/todos", (req,res) => {
    todo.find().then(todo => res.json(todo))
});

app.listen(5000, ()=>{
    console.log("Server is running...");
});