const logedin = require("./login");
const orderService = require("../services/orders");
async function OrderPage(req, res) {

  let username = logedin.isLoggedIn(req, res);
  let admin=req.session.isadmin;
  
  if (username == null) loggedIn = false;
  else
  { 
    loggedIn = true;

  }
  res.render("MyOrdersPage", { loggedIn: loggedIn, username: username, Admin:admin , userId: req.session.userid});
}
async function getOrders(req, res){
  const orders=await orderService.getAllOrders();
  res.json(orders);
}

async function createOrder(req, res)
{
  Order=req.body;
  const x=await orderService.createOrder(Order, res);
  res.send({ message: x });
}

  

  module.exports = {
    OrderPage,
    createOrder,
    getOrders
  }