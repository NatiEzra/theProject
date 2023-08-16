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
  return orders;
}
async function getOrdersJson(req, res){
  if (req.session.isadmin)
  {const orders=await orderService.getAllOrders();
  res.json(orders);}
  else
  {const orders=await orderService.getUserOrders(req.session.userid);
  res.json(orders)}
}
async function AllOrderJson(req,res){
  const all=await orderService.getAllOrders();
    res.json(all);
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
    getOrders,
    getOrdersJson,
    AllOrderJson
  }