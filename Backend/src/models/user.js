const mongoose = require('mongoose')

const User = mongoose.model('User', {
    accountCreationDate: {type: Date, default: Date.now},
    userName: {type: String, unique: true, require: [true], min: 3, max: 20},
    email: {type: String, unique: true, require: [true]},
    password: {type: String, require: [true], min: 4},
})

module.exports = User