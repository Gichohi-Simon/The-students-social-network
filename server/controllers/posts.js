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
    const newPost = new PostMessage({...post,name:req.userId, createdAt:new Date().toISOString()});
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

module.exports.deletePost = async(req,res) => {
    const {id:_id} = req.params;

     if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with that id:${_id}`);

     await PostMessage.findByIdAndRemove(_id);

     res.json({message:"Post deleted successfully"});

}

module.exports.likePost = async(req,res) => {
    const {id:_id} = req.params;

    //check if the user is authenticated.
    if(!req.userId) return res.json({message:'Unauthenticated'});

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with that id:${_id}`);

    const post = await PostMessage.findById(_id);

    //see if the user id is already in the likes id or not.
    //loops through all the id's and turns the red id into a string.
    const index = post.likes.findIndex((_id) => _id == String(req.userId));

    if(index === -1){
        post.likes.push(req.userId);
    }else{
        post.likes=post.likes.filter((_id)=> _id !== String(req.userId));

    }

    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{likes:post.likes + 1},{new:true});

    res.json(updatedPost);

}

