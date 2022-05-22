//Part#1,Point1 installed node modules
const express = require('express');   
const path = require ('path'); 
const cors = require('cors');
const bodyParser = require('body-parser'); //Part#1, Point2 Import body parser

const nav = require('./src/data/nav');   //Part#2 Point6

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');       //Part#1, Point3 Path changed
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express;


app.set('views','./src/views'); 
app.set('view engine','ejs'); 
app.use(cors());     //Part#2, Point7


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});





app.listen(5000,()=>{
    console.log("Server Ready on 5000"); //Part#1 , Point5
});