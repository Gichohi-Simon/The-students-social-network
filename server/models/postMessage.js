const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:String,
    message:String,
    name:String,
    tags:[String],
    //convert img to string fb64.
    selectedFile:String,
    likes:{
        type:[String],
        default:[]
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
});

const PostMessage = mongoose.model('PostMessage',postSchema);
module.exports = PostMessage;

