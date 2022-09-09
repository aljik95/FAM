require('dotenv').config()
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

//Routes SQL-CONNECT
var sql = require('mssql')
const sqlConfig = require('../middleware/db_connect')

const login_index = (req,res) =>{
    
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token,process.env.SECRET_TOKEN,(err,decodedToken) =>{
            if(err){
                console.log(err)
                res.render('login',{title :  'Login'});
            }else{
                //console.log(decodedToken)
              if(req._parsedOriginalUrl.pathname == "/system/login"){
                res.redirect('/dashboard')
              }
            }
        });

    }else{
       res.render('system/login',{title : 'Login'});
    };
};

const login_user = async (req,res) => {
    const {username,password} = req.body
    try {
        sql.connect(sqlConfig)
        var request = new sql.Request();

        const valUser = await request.query`select password,description from [FAM].[userInfo] where UserId = ${username}`;
           
        if(valUser.rowsAffected === 0){
            return res.json({appStatus : 'error',msg : 'Invalid credentials.'})
        }

        if(await bcrypt.compare(password,valUser.recordset[0]['password'])){
       
            var jsonAccess ={
                "Access": [
                    {"Code":"HRIS/Employee201", "Description":"Employee 201" },
                    {"Code":"HRIS/Designation", "Description":"Employee Designation" }
                ]
            }

            const token = jwt.sign({id: valUser._id, fname : valUser.recordset[0]['description'],jsonAccess : jsonAccess},process.env.SECRET_TOKEN)
            res.cookie('jwt',token,{httpOnly: true})

            return res.json({appStatus :'ok',msg : 'successfull',id:username});
             
        }else{
            return res.json({appStatus : 'error',msg : 'Invalid credentials.'})
        }
    } catch (error) {
        throw error
    }
}
module.exports = {login_index,login_user}