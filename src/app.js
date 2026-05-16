const express=require('express');

const app=express();

app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("something went wrong");
    }
})

app.get("/getUser",(req,res)=>{
    
    // try{

        throw new Error("dvzhijf");
        res.send("user Data Send");
    // }
    // catch(err){
        
    //     res.status(500).send("some Error contact support team");
    // }
    
   
})



app.listen(3000,()=>{
    console.log("Server running on port 3000");
})
