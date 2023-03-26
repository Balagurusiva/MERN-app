import Post from "../models/post.js"; 
import User from "../models/User.js"

//create 
export const createPost = async (req,res) =>{
    try{
       const {userId, description, picturePath} = req.body;
       const user = await User.findById(userId);
       const newPost = new Post({
        userId,
        firstName : User.firstName,
        lastName : User.lastName,
        location : User.location,
        description,
        userPicturePath,
        like : {},
        comments:[],
       })

       await newPost.save();

       const post = await post.find();

       res.status(201).json(post);
    }catch(err){
        res.status(409).json({message:err.message})
    }
}

//read

export const getFeedPosts = async (req,res) => {
    try{
       const post = await post.find();
       res.status(200).json(post);
    }catch(err){
        res.status(404).json({message:err.message})
    }
}

export const getUserPosts = async (req,res) =>{
    try{
       const {userId} = req.params;
       const post = Post.find({userId});
       res.status(200).json(post);
    }catch(err){
        res.status(404).json({msg :err.message})
    }
}

//update

export const likePost = async (req,res) =>{
    try{
        const {id} = req.params;
        const {userId} = req.body;

        const post = await Post.findById(id);
        const isLike = post.likes.get(userId);
        
        if(isliked){
            post.likes.delete(userId);
        }else{
            post.likes.set(userId, true);
        }

        const updatedPost = await post.findByIdandUpdat(
            id,
            {likes:post.likes},
            {new:true},
        )

        res.stuts(200).json(updatedPost);
    }catch(err){
        res.status(404).json({msg:err.message});
    }
} 
  






