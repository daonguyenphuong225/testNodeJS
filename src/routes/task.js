const express = require('express');
const route = express.Router();

route.get('/task',(req,res) =>{
    return res.json({
        task: 'get',
    })
});

route.post('/task',(req,res) =>{
    return res.json({
        task: 'post',
    })
});



module.exports = route;