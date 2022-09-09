//Routes SQL-CONNECT
var sql = require('mssql')
const sqlConfig = require('../middleware/db_connect')

const employee_list = async (req,res) =>{
    
    sql.connect(sqlConfig)
    var request = new sql.Request();
    
    try {
        let pool = await sql.connect(sqlConfig)
        let results = await pool.request()
        .input("QueryType", sql.Int, 0)
        .execute("hris.nsp_employee201"); //Stored Procedure
        res.render('HRIS/Employee201',{title :  'Employee201',results:results.recordset});
        console.log(results.recordset);
        sql.close();
      } catch (err) {
        console.log(err);
        sql.close();
      }
   
}

const employee_details = async (req,res) =>{
    
  sql.connect(sqlConfig)
  var request = new sql.Request();
  
  try {
      let pool = await sql.connect(sqlConfig)
      let results = await pool.request()
      .input("QueryType", sql.Int, 0)
      .execute("hris.nsp_employee201"); //Stored Procedure
      res.render('HRIS/Employee201',{title :  'Employee201',results:results.recordset,});
      console.log(results.recordset);
      sql.close();
    } catch (err) {
      console.log(err);
      sql.close();
    }
 
}

module.exports = {employee_list,employee_details}