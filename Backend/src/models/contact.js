const mongoose = require('mongoose');

const Contact = mongoose.model('Contact', {
    full_name: {type: String, require: [true]},
    email: {type: String, require: [true]},
    mensages: {type: String, require: [true]},
    contact_date: {type: Date, require: [true]},
    was_answered: {type: Boolean, require: [true]},
});

module.exports = Contact;