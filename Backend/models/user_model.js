const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: Number,
        required: true,
    },
    user_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true    
    },
    emp: {
        type: Boolean,
        default: false
    },
    admin: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('User', UserSchema);

//export the model
module.exports = User;