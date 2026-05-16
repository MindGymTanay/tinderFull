const express=require('express');

const app=express();

const {adminAuth,userAuth}=require("./middlewares/auth");

app.post("/user/login",(req,res)=>{
    res.send("user loggedIn successfully");
})


app.use("/user",userAuth,(req,res)=>{
    res.send("All data send");
})



app.use("/admin",adminAuth);

app.get("/admin/getAllData",(req,res)=>{
    res.send("All Data Send");
});

app.get("/admin/deleteUser",(req,res)=>{
    res.send("Deleted a User");
});

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})
