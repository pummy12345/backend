 const express= require("express");
  const multer=require("multer");
  const storage = require("../../config/cloudinary");
  const {
    createPostCtrl,
    deletePostCtrl,
    fetchPostCtrl,
    fetchPostsCtrl,
    updatepostCtrl,
  }= require("../../controllers/posts/posts");
 const postRoutes=express.Router();
  const protected= require("../../middlewares/protected");
  const upload=multer({
    storage,
  });

  postRoutes.post("/",protected,upload.single("file"),createPostCtrl);
  //GET/api/v1/posts

  
  //GET/api/v1/posts/:id
postRoutes.get("/:id", fetchPostCtrl);
postRoutes.get("/", fetchPostsCtrl);

  //DELETE/api/v1/posts/:id
  postRoutes.delete("/:id", protected,deletePostCtrl);
  postRoutes.put("/:id",protected,upload.single("file"),updatepostCtrl);
  
  //PUT/api/v1/posts/:id

  module.exports=postRoutes;