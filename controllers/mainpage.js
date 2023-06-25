const fs = require("fs");
const logedin = require("./login");

function Mainpage(req, res) {
  let username = logedin.isLoggedIn(req, res);
  let admin=false;
  if (username == null) loggedIn = false;
  else
  { 
    loggedIn = true;

  }
  res.render("MainPage", { loggedIn: loggedIn, username: username , Admin:admin });
}

function Cartpage(req, res) {
  res.render("ShoppingCart", {Admin:false});
}


module.exports = {
  Mainpage,
  Cartpage
}
