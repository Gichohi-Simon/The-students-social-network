const CommentMessage = require('../models/comments');

module.exports.getComments = async(req,res) => {
    try{
        const commentMessage = await commentMessage.find();
        res.status(200).json(commentMessage);
    }catch(err){
        res.status(404).json({message:error.message});
    }
}

module.exports.createComment = async(req,res) => {
    const comment = req.body;
    const newComment = new CommentMessage(comment);
    try{
        await newComment.save();
        res.status(201).json(newComment);
    }catch(err){
        res.status(409).json({message:error.message})
    }
}

