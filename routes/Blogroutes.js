const express=require("express");
const router=express.Router();

// controller


const {createComment}= require("../controllers/commentController");
const {createPost}=require("../controllers/postController");
const {createLike}=require("../controllers/likeController");
const {createAll}=require("../controllers/postController");

const{createUnlike}=require("../controllers/likeController");





router.post("/comments",createComment);
router.post("/posts",createPost);
router.post("/likes",createLike);
router.get("/posts/all",createAll);
router.post("/likes/unlike",createUnlike);










module.exports=router;



