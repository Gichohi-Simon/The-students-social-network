const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  name:String,
  message: String,
});

const CommentMessage = mongoose.model("CommentMessage", commentSchema);
module.exports = CommentMessage;
