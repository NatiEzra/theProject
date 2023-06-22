const fs = require("fs");
const logedin = require("./login");
function Mainpage(req, res) {
  let username = logedin.isLoggedIn(req, res);
  if (username == null) loggedIn = false;
  else loggedIn = true;
  res.render("MainPage", { loggedIn: loggedIn, username: username });
}

function Cartpage(req, res) {
  res.render("ShoppingCart", {});
}

module.exports = {
  Mainpage,
  Cartpage
}
