const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");




//db connection
const url="mongodb://localhost:27017/edumonk";
mongoose.Promise = global.Promise;
mongoose.connect(url,(err,db)=>{
    if(err) throw err;
    else
    {
        console.log('database connected');
    }
});

//getting form data in json format
app.use(bodyParser.urlencoded({extended:true}));

//using middlewares
app.use(express.static('./public'));


//view engine
app.set('view engine','ejs');
app.set('views','./Views');

//routes
app.use(require('./routes/studentpanel.js'));
app.use(require('./routes/edumonk.js'));
 
 
//creating server
app.listen(process.env.PORT || 3000,()=>{
     console.log("Server started at 3000");

});