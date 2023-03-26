import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
      userId:{
        type: String,
        required : true,
      },
      firstName:{
        type: String,
        required : true,
      },
      lastName:{
        type: String,
        required : true,
      },
      location: String,
      discription: String,
      picturePath : String,
      userPicturePath: String,
      likes:{
        type:Map,
        of:Boolean,
      }
    }
);

const Post = mongoose.model("Post", postSchema);
 
export default Post;