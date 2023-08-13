const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();
//const fs = require('fs');
const http = require('http'); // Add this line
var UsersOnline = 0;
var bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, 'public')));
require('custom-env').env(process.env.NODE_ENV, './config');

const socket = require('socket.io');

const { default: mongoose } = require("mongoose");
// Add body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

const session = require('express-session');
app.use(session({
    secret: 'key',    
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

const Main_page = require('./routes/main_page');
app.use('/', Main_page);

const Item_page = require('./routes/items');
app.use('/', Item_page);

const promocode_page = require('./routes/promocode');
app.use('/', promocode_page);

const Admin_page = require('./routes/admin');
app.use('/', Admin_page);

const Order_page = require('./routes/orders');
app.use('/', Order_page);


const server=app.listen(process.env.PORT, () => console.log('Server started on port 70'));

const io = require('socket.io')(server, {
  cors: { origin: "*" }
});
io.on('connection', async function(socket){
  console.log('New user connected');

  UsersOnline++;
  socket.on('login', function(data){
    // saving userId to object with socket ID
  });
  socket.on('createPromoCode', function(data) {
    // Process the promo code creation
    // You can interact with your database or perform any other actions here
    // ...

    // Once the promo code is created, emit a message to the sender
    io.emit('promoCodeCreated', { message: 'Promo code has been created successfully.' });
  });
  io.emit('usercnt',UsersOnline);
  socket.on('disconnect', function(){
    console.log('New user Disconnected');
    UsersOnline--;
    io.emit('usercnt',UsersOnline);

  });
});


