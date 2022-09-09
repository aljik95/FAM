require('dotenv').config()
const bcrypt = require("bcryptjs");

//Routes SQL-CONNECT
var sql = require('mssql')
const sqlConfig = require('../middleware/db_connect');
const { RequestError } = require('tedious');


const add_index = (req,res) =>{
    res.render('add_account',{title :  'Create Account'});
}

const add_account = async (req,res) =>{
    const {username,password : plainText,description} = req.body
    const password = await bcrypt.hash(plainText,10)

      try {
        let pool = await sql.connect(sqlConfig)
        let results = await pool.request()
        .input("UserId", sql.VarChar, username) //Parameters
        .input("Password", sql.VarChar, password)
        .input("Description", sql.VarChar, description)
        .input("QueryType", sql.Int, 1)
        .execute("fam.nsp_addAccount"); //Stored Procedure

        res.json({status : 'ok',msg : results.recordset[0]['Status']})
       
        sql.close();
      } catch (err) {
        sql.close();
        return res.json({status : 'error',msg : err['message']})
      }

}
module.exports = {add_index,add_account}