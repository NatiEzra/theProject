const express = require('express');
const PORT= 70;
const ejs= require('ejs');
const path= require('path');
const app = express();

app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");

app.get("/",(req,res) =>{
  res.render("loginpage");
});
app.listen(PORT,()=>console.log("Server started on port 70"));