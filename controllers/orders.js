const logedin = require("./login");

async function OrderPage(req, res) {

  let username = logedin.isLoggedIn(req, res);
  let admin=req.session.isadmin;
  
  if (username == null) loggedIn = false;
  else
  { 
    loggedIn = true;

  }
  res.render("MyOrdersPage", { loggedIn: loggedIn, username: username, Admin:admin });
}


  

  module.exports = {
    OrderPage
  }