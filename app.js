const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, 'public')));
require('custom-env').env(process.env.NODE_ENV, './config');

const { default: mongoose } = require("mongoose");
// Add body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

const session = require('express-session');
app.use(session({
    secret: 'foo',    
    saveUninitialized: false,
    resave: false
}));

mongoose.connect(process.env.CONNECTION_STRING, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB!');
});

app.set('view engine', 'ejs');

const loginRouter = require('./routes/register_login');
app.use('/', loginRouter);

app.listen(process.env.PORT, () => console.log('Server started on port 70'));
