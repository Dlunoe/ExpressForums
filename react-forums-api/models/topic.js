const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
    title: String,
    body: String,
    comments: [
        String
    ]
})

module.exports = mongoose.model('Topic', TopicSchema);