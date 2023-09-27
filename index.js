const express = require('express');
const port = 8000;
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts'); //for accesing all ejs files in single layout
const db = require('./config/mongoose');
var bodyParser = require('body-parser');

app.use(express.static('./assets'));

app.use(expressLayouts);
app.use(express.urlencoded());
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/', require('./routes')); //when url req. comes it will redirect to routes

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.set("views",'views');



// parse application/json
app.use(bodyParser.json());
app.use(express.json());

app.listen(port, (err)=>{

    if(err){
        console.log("Error in running the server", err);
    }
    console.log("Express server up and running on port:  ", port );
});