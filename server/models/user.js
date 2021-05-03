const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   name:{
       type:String,
       required:true
   },
   email:{
       type:String,
       required:true
   },
   password:{
       type:String,
       required:true
   },
   id:{
       type:String
   }
});

const userAuth = mongoose.model('User',userSchema);

module.exports = userAuth;