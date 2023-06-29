const fs = require("fs");
const logedin = require("./login");

function Mainpage(req, res) {
  let username = logedin.isLoggedIn(req, res);
  let admin=req.session.isadmin;
  ;
  if (username == null) loggedIn = false;
  else
  { 
    loggedIn = true;

  }
  res.render("MainPage", { loggedIn: loggedIn, username: username , Admin:admin });
}
function Error(req, res){
res.render("ErrorPage", {});
}
async function Cartpage(req, res) {
  let username = req.session.username;
  //const result = await loginService.login(username, password);

  let admin=false;
  if (username == null) loggedIn = false;
  else
  { 
    loggedIn = true;
    admin=req.session.isadmin;
  }
  res.render("ShoppingCart", {username:username,Admin:admin});
}


module.exports = {
  Mainpage,
  Cartpage,
  Error
}
