const express = require('express');
const app=express();
const bodyParser=require('body-parser');
const ejs =require('ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine",'ejs');

app.get('/',(req,res)=>{
    res.render('home');
})


app.listen(3000,()=>{
    console.log("The server is up and running on port 3000");
})