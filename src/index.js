const express = require('express');
const path = require('path');
const route = require('./routes/index')

const app = express();


app.use(route);
app.use('/nodemy',route);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'html')))

app.listen(8000, ()=>{
    console.log('sever start at port 8000');
})