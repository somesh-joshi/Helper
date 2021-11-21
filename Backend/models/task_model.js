const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema ({

});

const Task = mongoose.model('Task',TaskSchema);

//export the model
model.exports = Task;