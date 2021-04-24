const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    message:String,
});

const CommentMessage = mongoose.model('CommentMessage',commentSchema);
module.exports = CommentMessage;