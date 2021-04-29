const express = require('express');
const route = express.Router();
const path = require('path')

route.get('',(req,res) =>{
    res.sendFile(path.resolve(__dirname, "../html/home.html"));
});

route.get('/login',(req,res) =>{
    res.sendFile(path.resolve(__dirname, "../html/login.html"));
});
route.get('/download',(req,res)=>{
    res.download(path.resolve(__dirname, "../html/img.jpg"))
})

route.get('/javascipt/bai1',(req,res) =>{
    res.json('Welcome bạn đến javascript bài 1');
});
route.get('/javascipt/bai2',(req,res) =>{
    res.json('Welcome bạn đến javascript bài 2');
});
route.get('/html/bai1',(req,res) =>{
    res.json('Welcome bạn đến html bài 1');
});
module.exports = route;