const mongoose= require('mongoose');
const dbConnect=async()=>{
    try{
        await mongoose.connect("mongodb+srv://pummys480:12345@cluster0.d6l0ynx.mongodb.net/fullstackblog?retryWrites=true&w=majority");
        console.log('DB Connected Successfully');
    } catch(error){
     console.log('DB Connection failed',error.message);
    }
};

dbConnect();