const express=require("express");
const app=express();

//Load config to env
require("dotenv").config();

const PORT=process.env.PORT || 4000;

//middleware


app.use(express.json());


const TodoBlog=require("./routes/Blogroutes");

app.use("/api/blogs",TodoBlog);
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})
const dbconnect=require("./config/database");
dbconnect();

app.get("/",(req,res)=>{
    res.send("helloo!!!");
})

