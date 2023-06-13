const express = require('express');
const PORT = 70;
const ejs = require('ejs');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'models')));
app.use(express.static(path.join(__dirname, 'public')));

const {default:mongoose} = require("mongoose");

mongoose.connect('mongodb+srv://dormatana101:Dormatana054@sportify.m6md4z5.mongodb.net/Sportify?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB!');
});


app.get("/Register",(req,res) =>{
  res.render("Register");
});
app.listen(PORT,()=>console.log("Server started on port 70"));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const loginRouter = require('./routes/login');
app.use('/', loginRouter);
app.get("/term",(req,res) =>{
  res.render("termandcon");
});
app.get("/Register",(req,res) =>{
  res.render("Register");
});
app.listen(PORT, () => console.log('Server started on port 70'));
