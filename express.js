const express=require('express');

const app=express();

app.use((req,res,next)=>{
    console.log('Welcome to First Middleware')
    next();
})

app.use((req,res,next)=>{
    res.send('<h1>Welcome to Second Middleware</h1>')
})

app.listen(3000);
