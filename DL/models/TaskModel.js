const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
    id: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        default: false
    },
    // if task have many status:
    // status: {
    //     type:String,
    //     enum:['start','in progress', 'done'],
    //     default : 'start'
    // }
    createDate: {
        type: Date,
        default: Date.now()
    },
    // subs: [String]
    // address: {
    //     city: {
    //         type: String
    //     },
    //     street: {
    //         type: String
    //     },
    //     homeNum: {
    //         type: Number
    //     }
})

const taskModel = mongoose.model('task', TaskSchema)

module.exports = taskModel