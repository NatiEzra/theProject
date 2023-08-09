const fs = require("fs");
const logedin = require("./login");
const loginService = require("../services/account");
const accountService = require("../services/account");

function Mainpage(req, res) {
  let username = logedin.isLoggedIn(req, res);
  let admin=req.session.isadmin;
  ;
  if (username == null) loggedIn = false;
  else
  { 
    loggedIn = true;

  }
  res.render("MainPage", { loggedIn: loggedIn, username: username , Admin:admin,showFire:false });
}
function Error(req, res){
res.render("ErrorPage", {});
}
  async function SavedItems(req, res){
    const admin=false;
    if ('isLoggedIn' in req.session) {
      const admin=req.session.isadmin;
      const name=req.session.username;
      const user = await accountService.FindUser(name);
      res.render("SavedItems", {Admin: admin, loggedIn: true, username:name , firstName:user.firstname , lastname:user.lastname , email:user.email ,username:user.username});
    } else {
      res.render("login", { flag: true });
    }
  }


async function Myaccount(req, res){
  const admin=false;
  if ('isLoggedIn' in req.session) {
    const admin=req.session.isadmin;
    const name=req.session.username;
    const user = await accountService.FindUser(name);
    res.render("myAccountPage", {Admin: admin, loggedIn: true, username:name , firstName:user.firstname , lastname:user.lastname , email:user.email ,username:user.username});
  } else {
    res.render("login", { flag: true });
  }
}


async function Cartpage(req, res){
  const admin=false;
  if ('isLoggedIn' in req.session) {
    const admin=req.session.isadmin;
    const name=req.session.username;
    const user = await accountService.FindUser(name);
    res.render("ShoppingCart", {Admin: admin, loggedIn: true, username:name , firstName:user.firstname , lastname:user.lastname , email:user.email ,username:user.username});
  } else {
    res.render("login", { flag: true });
  }
}


module.exports = {
  Mainpage,
  Cartpage,
  Error,
  Myaccount,
  SavedItems
}
