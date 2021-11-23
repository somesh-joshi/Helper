const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
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
        max: 10
    },
    pass: {
        type: String,
        required: true    
    },
    emp: {
        type: Boolean,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);

//export the model
module.exports = User;