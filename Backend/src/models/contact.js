const mongoose = require('mongoose');

const Contact = mongoose.model('Contact', {
    full_name: String,
    email: String,
    mensages: String,
    contact_date: Date,
    was_answered: Boolean
});

module.exports = Contact;