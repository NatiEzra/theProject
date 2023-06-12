const express = require('express');
const PORT= 70;
const ejs= require('ejs');
const path= require('path');
const app = express();
const mongoose = require('mongoose');
app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"models")));

app.set("view engine","ejs");

app.get("/",(req,res) =>{
  res.render("loginpage");
});


app.get("/Register",(req,res) =>{
  res.render("Register");
});
app.listen(PORT,()=>console.log("Server started on port 70"));