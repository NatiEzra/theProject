const fs = require("fs");
const logedin = require("./login");
const loginService = require("../services/account");
const accountService = require("../services/account");
const itemService = require("../services/items");
//const Item = require('../models/Item');
async function GetItemsPerGender(req,res)
{
  let result = await itemService.GetItemsPerGender();
  if(result)
  {
    res.send(result);
    return;
  }
  res.send("bad request");
  return;
}


async function Mainpage(req, res) {
  let username = logedin.isLoggedIn(req, res);
  let UserId=await accountService.FindUser(username);
  let admin=req.session.isadmin;
  ;
  if (username == null) loggedIn = false;
  else
  { 
    loggedIn = true;

  }
  res.render("MainPage", { loggedIn: loggedIn, username: username , Admin:admin,  showFire:false, userId: UserId._id });
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
      res.render("SavedItems", {Admin: admin, loggedIn: true, username:name , firstName:user.firstname , lastname:user.lastname , email:user.email ,username:user.username,userId:req.session.userid});
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
    res.render("myAccountPage", {Admin: admin, loggedIn: true, username:name , firstName:user.firstname , lastname:user.lastname , email:user.email ,username:user.username,password:user.password, userId: req.session.userid});
  } else {
    res.render("login", { flag: true });
  }
}

async function getEmails(req, res) {
  try {
    const users = await accountService.getEmails();
    
    // Extract the email properties from the user objects
    const emails = users.map(user => user.email);
    
    res.json(emails);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error fetching email addresses:", error);
    res.status(500).json({ message: "An error occurred" });
  }
}

async function updateUser(req,res){
  const updatedUser = req.body.foundUser;
  let result=await accountService.UpdateUser(updatedUser);
  if(result)
  {
    res.send({ message: "User updated successfully." });
  }
  else{
    res.send({ message: "User not found."});
  }
  
}

async function Cartpage(req, res){
  const admin=false;
  if ('isLoggedIn' in req.session) {
    const admin=req.session.isadmin;
    const name=req.session.username;
    const user = await accountService.FindUser(name);
    res.render("ShoppingCart", {Admin: admin, loggedIn: true, username:name , firstName:user.firstname , lastname:user.lastname , email:user.email ,username:user.username, userId: req.session.userid});
  } else {
    res.render("login", { flag: true });
  }
}


module.exports = {
  Mainpage,
  Cartpage,
  Error,
  Myaccount,
  SavedItems,
  updateUser,
  GetItemsPerGender,
  getEmails,
}
