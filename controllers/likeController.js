
//Import model for each controller 
const Post=require("../model/postmodel");
const Like=require("../model/likemodel");


exports.createLike=async(req,res)=>{
    try{
        //create the object of like schema 
     const {post,user}=req.body;
     const like=new Like({
        post,user,
     });
     //saved the use like in the database 
     const savedLike=await like.save();

      const updatedPost=await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true}) 
             .populate("likes")// populate comments array with comments documenets 
             .exec();//execute query




    }
    catch(error)
    {
     return  res.status(500).json({
        error:"Error while creating like",
     });
    }
}


exports.createUnlike=async(req,res)=>{
    try{

        const{post,like}=req.body;
        //find aand delete the like 

        //the post with the id of the post that the user is trying to unlike
        // the like with the id of the like that the user is trying to unlike
        //both are matching then delete it
        const deleteLike=await Like.findOneAndDelete({post:post,_id:like});

        const updatedPost=await Post.findByIdAndUpdate(post,{$pull:{likes:deleteLike._id}},{new:true});

        res.status(200).json({
            message:"Unlike created successfully",
            post:updatedPost,
        });






    }
    catch(error)
    {
        return  res.status(500).json({
            error:"Error while creating Unliking Post",
         });
    }
}

