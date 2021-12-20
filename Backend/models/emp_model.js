const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        default: true
    },
    available: {
        type: Boolean,
        default: false
    },
    task_list: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task',
    }]
});

const Emp = mongoose.model('Empolyee',EmpSchema);

// export the model
module.exports = Emp;