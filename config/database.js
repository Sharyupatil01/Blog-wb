const mongoose=require("mongoose");
require("dotenv").config();

const connectdb=()=>{
    mongoose.connect(process.env.DATABASE_URL,{})
    .then(()=>{
        console.log("Connected to MONGODB");
    })
    .catch((error)=>{
       console.log("database is not connceted!!");
       process.exit(1);
    })
}
module.exports=connectdb;


