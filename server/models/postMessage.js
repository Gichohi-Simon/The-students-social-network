const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    // title:String,
    message:String,
    name:String,
    creator:String,
    tags:[String],
    //convert img to string fb64.
    selectedFile:String,
    likeCount:{
        type: Number,
        default: 0,

        // type:[String],
        // default:[]
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
});

const PostMessage = mongoose.model('PostMessage',postSchema);
module.exports = PostMessage;

