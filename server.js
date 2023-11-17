const express= require('express');
const userRoutes=require("./routes/users/users");
const postRoutes = require("./routes/posts/posts");
 const commentRoutes=require("./routes/comments/comment");
 const globalErrHandler = require("./middlewares/globalHandler");
 const session=require("express-session");
  const MongoStore= require('connect-mongo');
 require("./config/dbConnect");
const app=express();
//-----
//users rute
//----
 app.use(express.json());
 app.use(session({
  secret:'josdsjdl',
  resave:false,
  saveUninitailized: true,
   store:new MongoStore({
    mongoUrl: "mongodb+srv://pummys480:12345@cluster0.d6l0ynx.mongodb.net/fullstackblog?retryWrites=true&w=majority",
     ttl:24*60*60,

   })

 })
 );
app.use("/api/v1/users",userRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/comments",commentRoutes);
 app.use(globalErrHandler);
  //-------
  //posts route
  //------
  //POST/api/v1/posts
 
//listen server
 const PORT= process.env.PORT || 9000;
app.listen(PORT,console.log(`Server is ruuning on PORT ${PORT}  `))