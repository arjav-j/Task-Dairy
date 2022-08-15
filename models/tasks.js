const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    user: {
        type: String,
        //required: true,
        default: 'Guest'
    },
    taskTitle: {
        type: String,
        required: true
    },
    taskDes: {
        type: String,
        default: 'its a task'
    },
    taskDate: {
        type: Date, 
        required: true
    },
    taskStatus: {
        type: String,
        enum: ['pending', 'active', 'completed'],
        default: 'pending'
    },

}, {timestamps: true});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;