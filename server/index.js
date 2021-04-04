const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

app.get('/',(req,res)=>{
    res.send('Hello simon')
});

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true, useUnifiedTopology:true})

const db = mongoose.connection;

db.on("error",(error)=>{
    console.log(error)
});

db.once("open",()=>{
    console.log('connection to database has been established')
});

app.listen(process.env.PORT,()=>{
    console.log(`server has started on ${process.env.PORT}`);
});
