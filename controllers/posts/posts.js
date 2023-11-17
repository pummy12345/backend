const Post =require("../../model/post/Post");
const User=require("../../model/user/User");
const appErr = require("../../utils/appErr");
//create
const createPostCtrl = async (req, res,next) => {
     const{title,description,category,user}=req.body;
    try {
       if(!title || !description ||!category || !req.file){
         return next(appErr('Alll Fields are required'));
       }
        const userId=req.session.userAuth;
         const userFound=await User.findById(userId);
         const postCreated=await Post.create({
             title,
             description,
             category,
             user: userFound._id,
             image:req.file.path,
         });
         userFound.posts.push(postCreated._id);
       await userFound.save();
      res.json({
        status: "successfully",
       data:postCreated,
      });
    } catch (error) {
        next(appErr(error.message));
    }
  };
  
  //all
  const fetchPostCtrl = async (req, res,next) => {
    try {
         const id=req.params.id
         const post=await Post.findById(id)
      res.json({
        status: "success",
       data:post,
      });
    } catch (error) {
    next(appErr(error.message));
    }
  };
  
  //details
  const fetchPostsCtrl = async (req, res,next) => {
    try {
        const posts=await Post.find();
      res.json({
        status: "success",
        data: posts,
      });
    } catch (error) {
     next(appErr(error.message));
    }
  };
  
  //delete
  const deletePostCtrl = async (req, res,next) => {
    try {
        const post=    await Post.findById(req.params.id);
        if(post.user.toString()!==req.session.userAuth)
        {
            return next(appErr('You r not allowed',403));
        }
      await Post.findByIdAndDelete(req.params.id);
      res.json({
        status: "success",
        data: "Post deleted",
      });
    } catch (error) {
        next(appErr(error.message));
    }
  };
  
  //update
  const updatepostCtrl = async (req, res,next) => {
    const{title,description,category}=req.body;
   
   
    try { 
        const post=  await Post.findById(req.params.id);
        if(post.user.toString()!==req.session.userAuth)
        {
            return next(appErr('You r not allowed',403));
        }
        const postUpdated=await Post.findByIdAndUpdate(req.params.id,{
            title,
            description,
            category,
            image:req.file.path,
        },
        {
            new:true,
        },
        );
      res.json({
        status: "success",
       data:postUpdated,
      });
    } catch (error) {
      res.json(error);
    }
  };
  module.exports = {
    createPostCtrl,
    fetchPostsCtrl,
    fetchPostCtrl,
    deletePostCtrl,
    updatepostCtrl,
  };