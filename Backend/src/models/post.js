const mongoose = require('mongoose');

const Post = mongoose.model('Post', 
{
    username: {type: String, require: [true]},
    post_date: {type: String, require: [true]},
    category: {type: String, require: [true]},
    tags: {type: [{type: String}], require: [true]},
    title: {type: String, require: [true], unique: true},
    description: {type: String, require: [true], unique: true},
    source_url: {type: String, require: [true], unique: true},
});

module.exports = Post;