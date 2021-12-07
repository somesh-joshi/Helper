const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema ({
    tite: {
        type: String,
        required: true
    },
    at_Address: {
        type: String,
        required: true
    },
    ceated_at: {
        type: Date,
        default: Date.now
    },
    start_date: {
        type: Date, 
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    cancle: {
        type: Boolean,
        required: true
    },
    done: {
        type: Boolean,  
        required: true
    },
    in_process: {
        type: Boolean,
        required: true
    },
    assined_emp: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Emp'
    }
});

const Task = mongoose.model('Task',TaskSchema);

//export the model
module.exports = Task;
