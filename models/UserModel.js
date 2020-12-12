const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false,
        uniqe:true
    },
    password: {
        type: String,
        required: false,
    },
    registerDate: {
        type: Date,
        default: Date.now,
    },
});

// const User = mongoose.model('user', userSchema);
// module.exports = User

module.exports = User = mongoose.model('user', userSchema);