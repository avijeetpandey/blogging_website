const express = require('express');
const app=express();
const bodyParser=require('body-parser');
const ejs =require('ejs');

//database stuff
const mongoose=require('mongoose');

//making connection request to the database
const url="mongodb://localhost:27017/postsDB";
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});


    
//new schema for the database
const postSchema=new mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        }
    });
    
//making model for the database 
const Post=new mongoose.model('post',postSchema);

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine",'ejs');

app.get('/',(req,res)=>{
    res.render('home');
})


app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/create',(req,res)=>{
    res.render('create');
})


app.post('/create',(req,res)=>{

    let title=req.body.title;
    let content=req.body.content;

    let post=new Post({
        title:title,
        content:content
    });


    post.save();

})

app.listen(3000,()=>{
    console.log("The server is up and running on port 3000");
})