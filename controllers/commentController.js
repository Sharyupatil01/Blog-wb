//Import model 
const Post=require("../model/postmodel");
const Comment=require("../model/commentmodel");


exports.createComment=async(req,res)=>{
    try{
        //created new comment schema object 
        const {post,user,body}=req.body;
        const comment=new Comment({
            post,user,body
        });
        //save the new comment into the databse 
        const savedComment=await comment.save();

        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true}) 
        .populate("comments")// populate comments array with comments documenets 
        .exec();//execute query



        res.status(200)
        .json({
            post:updatedPost,
        });


    }
    catch(error)
    {
       return res.status(500).json({
        error:"Error while creating comments",
       });
    }
}