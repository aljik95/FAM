require('dotenv').config();

var sqlConfig = {
    user: process.env.user,
        password: process.env.pass,
        server: 'ALJAKE\\SQL2019EXPRESS', 
        database: process.env.database,
        synchronize: true,
        trustServerCertificate: true,
 };
module.exports = sqlConfig;