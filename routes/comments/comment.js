const express= require("express");
 const commentRoutes=express.Router();
 
commentRoutes.post("/", async (req, res) => {
    try {
      res.json({
        status: "success",
        user: "comment created",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  //GET/api/v1/comments/:id
 commentRoutes.get("/:id", async (req, res) => {
    try {
      res.json({
        status: "success",
        user: "Post comments",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  //DELETE/api/v1/comments/:id
  commentRoutes.delete("/:id", async (req, res) => {
    try {
      res.json({
        status: "success",
        user: "comment deleted",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  //PUT/api/v1/comments/:id
commentRoutes.put("/:id", async (req, res) => {
    try {
      res.json({
        status: "success",
        user: "comment updated",
      });
    } catch (error) {
      res.json(error);
    }
  });
  module.exports=commentRoutes;
  
