const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Todo = new Schema(

    {
        taskName: { type: String, required: true },
        taskDesc:{type:String},
        taskPriority: { type: Number,default:0 }
    },
    {timestamps:true},
)
module.exports = mongoose.model('todos',Todo)