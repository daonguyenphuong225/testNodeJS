const express = require('express');
const route = express.Router();

route.get('/user',(req,res) =>{
    return res.json({
        user: 'get',
    })
});

route.post('/user',(req,res) =>{
    return res.json({
        user: 'post',
    })
});
module.exports = route;