const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    pic:{
        type:String,
        default:"https://res.cloudinary.com/manvi/image/upload/v1594301383/images_dr9bdf.png"
    },
    followers:[
        {type:ObjectId,ref:"User"}
    ],
    following:[
        {type:ObjectId,ref:"User"}
    ]
});

mongoose.model("User",userSchema);