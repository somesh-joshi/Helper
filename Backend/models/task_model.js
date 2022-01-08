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
        required: true,
        default: false
    },
    done: {
        type: Boolean,  
        required: true,
        default: false
    },
    in_process: {
        type: Boolean,
        required: true,
        default: true
    },
    assined_emp: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Emp'
    },
    note: {
        type: String,
    }
});

const Task = mongoose.model('Task',TaskSchema);

//export the model
module.exports = Task;
