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
        // type:[String],
        // default:[]

        // without like component
        type: Number,
        default: 0,
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
});

const PostMessage = mongoose.model('PostMessage',postSchema);
module.exports = PostMessage;

