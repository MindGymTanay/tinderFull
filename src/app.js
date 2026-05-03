const express=require('express');

const app=express();


app.use("/user",[(req,res,next)=>{

    console.log("Handling the route user");
    next();
},
(req,res,next)=>{
    console.log("Handling the route user2");
    next();
}],
(req,res,next)=>{
    console.log("Handling the route user3");
    next();
    
},
(req,res,next)=>{
    console.log("Handling the route user 4");
    next();
  
},
(req,res,next)=>{
    console.log("Handling the route user 5");
    res.send("Response5 generated!!")
  
}


);

app.listen(3000,()=>{
    console.log("server is successfully listening on port 3000");
});


// app.get("/user/:userId/:name/:password",(req,res)=>{
//     console.log(req.params);
//     res.send({firstName:"Tanay", lastName:"Agrawal"});

// })

// app.post("/user",(req,res)=>{
//     res.send("Data successfully saved to the database");
// })

// app.delete("/user",(req,res)=>{
//     res.send("Deleted Successfully");
// })

// app.use("/test",(req,res)=>{
//     res.send("Hello from the user!");

// })

// app.use("/hello",(req,res)=>{
//     res.send("Hello Hello Hello");

// })


// app.use("/hello/2",(req,res)=>{
//     res.send("aabra ka dabra");
// })



