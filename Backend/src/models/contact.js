const mongoose = require('mongoose')

const Contact = mongoose.model('Contact', {
    fullName: {type: String, require: [true]},
    email: {type: String, require: [true], unique:true},
    messages: {type: []}
})

module.exports = Contact