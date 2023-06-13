const express = require('express');
const PORT = 70;
const ejs = require('ejs');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

const { default: mongoose } = require("mongoose");
// Add body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

const session = require('express-session');
app.use(session({
    secret: 'foo',    
    saveUninitialized: false,
    resave: false
}));

mongoose.connect('mongodb+srv://dormatana101:Dormatana054@sportify.m6md4z5.mongodb.net/Sportify?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB!');
});

app.set('view engine', 'ejs');

const loginRouter = require('./routes/login');
app.use('/', loginRouter);

app.listen(PORT, () => console.log('Server started on port 70'));
