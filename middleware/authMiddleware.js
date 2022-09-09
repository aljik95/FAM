require('dotenv').config();
var jwt = require('jsonwebtoken');


const requireAuth = (req,res,next) =>{
 
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token,process.env.SECRET_TOKEN,(err,decodedToken) =>{
            if(err){
                console.log(err)
                res.redirect('/system/login')
            }else{
                //console.log(decodedToken)
              if(req._parsedOriginalUrl.pathname == "/system/login"){
                res.redirect('/dashboard')
              }
                next();
            }
        })
    }else{
        res.redirect('/system/login')
    }
}

const checkUser = (req,res,next) => {
    const token = req.cookies.jwt;
  
    if(token){
        jwt.verify(token,process.env.SECRET_TOKEN,async (err,decodedToken) =>{
            if(err){
                console.log(err)
                res.locals.fname = null
                next();
            }else{
          
                 var jsonAccess = decodedToken.jsonAccess["Access"];

                // var len = jsonAccess.length;
                //     console.log(jsonAccess)
                //     console.log(len.jsonAccess)

                    // for(var x = 0 ; x<len ; x++){
                    //     console.log(jsonAccess[x]["Code"])
                    //     console.log(jsonAccess[x]["Description"])
                    // }
                //let isUser = await Customer.findById(decodedToken.id);
                res.locals.fname = decodedToken.fname;
                res.locals.jsonAccess = (jsonAccess);
                //console.log(decodedToken.username)
                next();
            }
        })
    }else{
        res.redirect('/system/login')
        res.locals.fname = null
    }
}

module.exports = {requireAuth,checkUser}