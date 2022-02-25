const mongoose = require('mongoose');

const User = mongoose.model('User', {
    username:String,
    email:String,
    pass: String,
});

module.exports = User;