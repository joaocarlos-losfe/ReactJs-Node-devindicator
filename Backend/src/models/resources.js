const mongoose = require('mongoose')

const StaticResources = mongoose.model('StaticResources', {
    categories: {type: [], unique:true}
})

module.exports = StaticResources