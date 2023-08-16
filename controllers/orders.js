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
async function AllOrderJson(req, res) {
  try {
    const all = await orderService.getAllOrders();
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    // Extract and transform the order data to contain only the months
    const monthsOnly = all.map(order => {
      const monthIndex = new Date(order.orderDate).getMonth();
      const monthName = monthNames[monthIndex]; // Assuming you have monthNames array defined

      return {
        month: monthName,
      };
    });

    res.json(monthsOnly);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
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