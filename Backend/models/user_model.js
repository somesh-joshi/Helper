const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({

});

const User = mongoose.model('User', UserSchema);

//export the model
module.exports = User;