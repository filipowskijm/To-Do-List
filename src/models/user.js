const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    } 
}, {timestamps: true})

const User = mongoose.model('Users', userSchema)

module.exports = User;