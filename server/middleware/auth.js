//verifies all our tokens for liking deleteing etc.
const jwt = require('jsonwebtoken')


// module.exports  = function(req,res,next)  {
const auth = (req,res,next) => {
    try{
        console.log(req.headers);
        const token =  req.headers.authorization.split('')[1];
        const isCustomAuth =  token.length < 500;

        if(!token)
        res.status(401).json({msg:"no authentication token, access denied"});

        let decodedData = null;

        if(token && isCustomAuth){
            //sign works
            decodedData =  jwt.sign(token,'test');
            req.userId = decodedData?.id;
            console.log(decodedData);
        }else{
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
        next();
    }catch(err){
        res.status(500).json({error:err.message});
        console.log(err);
    }
}

module.exports = auth;