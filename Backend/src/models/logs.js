const mongoose = require('mongoose')

const Logs = mongoose.model('Logs', {
    addDate: {type: Date, default: Date.now},
    route: {type: String, require: [true]},
    message: {type: String, require: [true]},
})

module.exports = Logs