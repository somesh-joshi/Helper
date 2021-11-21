const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpSchema = new Schema({

});

const Emp = mongoose.model('Empolyee',EmpSchema);

// export the model
model.exports = Emp;