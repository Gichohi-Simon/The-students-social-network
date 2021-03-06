const mongoose = require('mongoose');
const PostMessage = require('../models/postMessage');

module.exports.getPosts = async(req,res)=>{
    try{
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    }catch(err){
        res.status(404).json({message:err.message});
    }
}

module.exports.getPost = async(req,res)=>{

    const {id} = req.params;

    try{
        const post = await PostMessage.findById(id);
        res.status(200).json(post);
    }catch(err){
        res.status(404).json({message:err.message});
    }
}

//added creator.
module.exports.createPost = async(req,res)=>{
    const post =  req.body;
    const newPost = new PostMessage({...post,creator:req.userId, createdAt:new Date().toISOString()});
    try{
        await newPost.save();
        res.status(201).json(newPost);  
    }catch(err){
        res.status(409).json({message:err.message})
        console.log(err);
    }
}

module.exports.updatePost = async(req,res) => {
    //getting our id and renaming it
    const {id} = req.params;
    //receiving the posts
    const post = req.body;

    //validating the id.
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that id:${id}`);

    //updating our posts by calling our model.
    const updatedPost = await PostMessage.findByIdAndUpdate(id,post,{new:true});

    res.json(updatedPost);
    
}

module.exports.deletePost = async(req,res) => {
    const {id} = req.params;

     if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that id:${id}`);

     await PostMessage.findByIdAndRemove(id);

     res.json({message:"Post deleted successfully"});

}

module.exports.likePost = async(req,res) => {

    //no auth liking
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);




    //*------------------------------auth liking--------------------- */
    // const {id} = req.params;

    // //check if the user is authenticated.
    // if(!req.userId){
    //     return res.json({message:'Unauthenticated'});
    // } 
    
    // if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that id:${id}`);

    // const post = await PostMessage.findById(id);

    // //see if the user id is already in the likes id or not.
    // //loops through all the id's and turns the red id into a string.
    // const index = post.likes.findIndex((id) => id === String(req.userId));

    // if(index === -1){
    //     post.likes.push(req.userId);
    // }else{
    //     post.likes = post.likes.filter((id)=> id !== String(req.userId));
    // }

    // const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
    // res.status(200).json(updatedPost);
}

