const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    topic: {type: mongoose.Schema.Types.ObjectId, ref: "Topic"},
    body: String
})

module.exports = mongoose.model('Comment', CommentSchema);