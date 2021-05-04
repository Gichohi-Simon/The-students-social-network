//verifies all oour tokens for liking deleteing etc.
const jwt = require('jsonwebtoken')

const auth = async(req,res,next) => {
    try{
        // console.log(req.headers);
        const token =  await req.headers.authorization.split('')[1];
        const isCustomAuth = await token.length < 500;

        let decodedData;
        
        if(token && isCustomAuth){
            decodedData = await jwt.sign(token,'test');
            req.userId = decodedData?.id;
            console.log(decodedData);
        }else{
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
        next();
    }catch(err){
        console.log(err);
    }
}

module.exports = auth;