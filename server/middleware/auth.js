const jwt = require('jsonwebtoken')

const auth = async(req,res,next) => {
    try{
        console.log(req.headers);
        const token =  await req.headers.Authorization.split('')[1];
        const isCustomAuth = await token.length < 500;

        let decodedData;
        
        if(token && isCustomAuth){
            decodedData = jwt.verify(token,'test');
            req.userId = decodedData?.id;
        }else{
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
        next();
    }catch(error){
        console.log(error);
    }
}

module.exports = auth;