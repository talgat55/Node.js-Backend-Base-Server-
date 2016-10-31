import mongoose from "mongoose"
let Schema = mongoose.Schema;
let toDoSchema = new Schema({
    title: String,
    text: String,
    date: { type: Date, default: Date.now }
});


let toDo = mongoose.model('Todo', toDoSchema);

module.exports = toDo;