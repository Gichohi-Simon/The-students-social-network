const CommentMessage = require('../models/comments');

module.exports.getComments = async(req,res) => {
    try{
        const commentMessages = await CommentMessage.find();
        res.status(200).json(commentMessages);
    }catch(error){
        res.status(404).json({message:error.message});
        console.log(err)
    }
}

module.exports.createComment = async(req,res) => {
    const comment = req.body;
    const newComment = new CommentMessage({...comment});
    try{
        await newComment.save();
        res.status(201).json(newComment);
    }catch(err){
        res.status(409).json({message:error.message})
    }
}



