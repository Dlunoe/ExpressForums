const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
    title: String,
    body: String,
    comments: [
        {type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"}
    ]
})

module.exports = mongoose.model('Topic', TopicSchema);