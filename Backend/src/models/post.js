const mongoose = require('mongoose')

const Post = mongoose.model('Post', {
    addDate: {type: Date, default: Date.now},
    userName: {type: String, require: [true]},
    originalAuthor: {type: String, require: [true]},
    category: {type: String, require: [true], enum: ['video', 'artigo', 'projeto', 'plataforma', 'noticia', 'livro']},
    tags: {type: [{type: String, lowercase: true}]},
    descriptionText: {type: String, require:[true], unique: true},
    title: {type: String, require: [true], unique: true},
    sourceUrl: {type: String, require:[true], unique: true}
})

module.exports = Post