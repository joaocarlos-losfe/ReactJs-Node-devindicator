const mongoose = require('mongoose');

const User = mongoose.model('User', {
    username:{type: String, require: [true]},
    email:{type: String, require: [true]},
    pass: {type: String, require: [true]},
    account_creation_date: {type: Date, require: [true]},
});

module.exports = User;