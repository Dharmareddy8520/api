// baics need to insert in node
const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const app=express();
const mongoose = require('mongoose');
const hostname='0.0.0.0'

//import from other pages
const rem=require('./views/demo')
app.use(express.json());

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));//main problem

//connecting to database of mongodb atlas of 2.4 or after   

// mongodb mail :yobaki7658@teknowa.com
//yovefoj644@teknowa.com
  app.get('/king',rem)

const port=process.env.PORT||3000;
app.listen(port,hostname,function()
{
  console.log("server started");
});
