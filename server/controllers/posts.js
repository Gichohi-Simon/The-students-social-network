const mongoose = require('mongoose');
const PostMessage = require('../models/postMessage');

module.exports.getPosts = async(req,res)=>{
    try{
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    }catch(err){
        res.status(404).json({message:error.message});
    }
}

module.exports.createPost = async(req,res)=>{
    const post =  req.body;
    const newPost = new PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);  
    }catch(err){
        res.status(409).json({message:error.message})
    }
}

module.exports.updatePost = async(req,res) => {
    //getting our id and renaming it
    const {id:_id} = req.params;
    //receiving the posts
    const post = req.body;

    //validating the id.
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with that id:${_id}`);

    //updating our posts by calling our model.
    const updatedPost = await PostMessage.findByIdAndUpdate(_id,post,{new:true});

    res.json(updatedPost);
}
