const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const app = express();
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');
const commentRoutes = require('./routes/comments');


app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());
app.use('/posts',postRoutes);
app.use('/users',userRoutes);
app.use('/comments',commentRoutes);


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
