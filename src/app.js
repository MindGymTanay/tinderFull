const express=require('express');

const app=express();

app.use("/user",(req,res)=>{
    res.send("HAHAHAHAHAHA");
})

app.get("/user",(req,res)=>{
    res.send({firstName:"Tanay", lastName:"Agrawal"});

})

app.post("/user",(req,res)=>{
    res.send("Data successfully saved to the database");
})

app.delete("/user",(req,res)=>{
    res.send("Deleted Successfully");
})

app.use("/test",(req,res)=>{
    res.send("Hello from the user!");

})

app.use("/hello",(req,res)=>{
    res.send("Hello Hello Hello");

})



app.use("/hello/2",(req,res)=>{
    res.send("aabra ka dabra");
})






app.listen(3000,()=>{
    console.log("server is successfully listening on port 3000");
});

