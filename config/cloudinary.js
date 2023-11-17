
const cloudinary=require('cloudinary').v2;
const {CloudinaryStorage}=require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name:"duu9yaqae",
    api_key:"763411944697851",
    api_secret:"UZw2KBT6hJan1dntITEpcLWRybg",
});
const storage=new CloudinaryStorage({
    cloudinary,
    allowedFormats:['jpg','jpeg','png'],
    params:{
        folder:'blog-app-v3',
        transformation:[{width:500,height:500,crop:"limit"}],
    },
});
module.exports=storage;
