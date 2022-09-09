//Packages
const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const sql = require('mssql');

//Routes
 const sqlConfig = require('./middleware/db_connect');
 const loginRoute = require('./routes/loginRoutes');
 const addAccountRoute = require('./routes/addAccountRoute');
 const dashboardRoutes = require('./routes/dashboardRoutes')
 const HRISRoutes = require('./routes/HRISRoutes')
 const {requireAuth,checkUser,ifLogin} = require('./middleware/authMiddleware')

//Initialize
const app = express();

//Check connection before listening to port
sql.connect(sqlConfig).then(() => {app.listen(5000),console.log('Connected to DB!!!')}).catch((err) => console.log(err))

//Middleware
app.use(bodyParser.json());
app.set('view engine','ejs');
app.use(express.urlencoded({extended : true}));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());


//API

app.get('/',requireAuth,(req,res) =>{
    res.redirect('dashboard');
 })

 app.use('/system/login',loginRoute);
 app.use('/add_account',addAccountRoute);

 app.get('*',checkUser);
 app.use('/dashboard',requireAuth,dashboardRoutes);
 app.use('/HRIS',requireAuth,HRISRoutes);

 app.get('/logout',(req,res) =>{
    res.cookie('jwt','',{maxAge : 1})
    res.redirect('login');
 })
//Handle Error
app.use((req,res)=>{
     res.status(404).sendFile('./views/error.html',{root:__dirname});
 })
