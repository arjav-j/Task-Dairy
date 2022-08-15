const mongoose = require('mongoose');
const schema = mongoose.schema;

const taskSchema = new schema({
    user: {
        type: String,
        required: true
    },
    taskDes: {
        type: String,
        required: false
    },
    taskDate: {
        type: Date, default: Date.now
    },
    taskStatus: {
        type: String,
        enum: ['pending', 'active', 'completed'],
        default: 'pending'
    },

}, {timestamps: true});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;