const AdminService = require("../services/admin");
const axios = require('axios');
const User = require('../models/User');
const socketIo = require("socket.io");
const http = require('http'); // Node.js HTTP module
const express = require('express');
const app = express();
const server = http.createServer(app); // Create an HTTP server
const orderController = require("./orders");

require('custom-env').env(process.env.NODE_ENV, './config');

async function Adminpage(req, res) {
    let isAdmin = req.session.isadmin;
    let username = req.session.username;
    if (isAdmin === true) {
      let Users = await Getlistofusers();
      let PromoCodes = await GetlistofPromocodes();
      let Orders= await orderController.getOrders();
      //let Promo = await GetlistofPromocodes();
      res.render("Management", { loggedIn: true, username: username, Admin: isAdmin , users:Users , promocodes: PromoCodes , userId:req.session.userid, orders: Orders});
    } else {
     res.status(404) // Render the 404 error page
     res.redirect("/ErrorPage");   // Render the 404 error page
     //res.render("Management", { loggedIn: true, username: username, Admin: true  });
    }
  }
async function PostFacebook(req,res)
{
    const pageId = '105535155938772';
    const accessToken = process.env.accessToken_facebook;
    const message = req.body.postdata;
    const apiUrl = `https://graph.facebook.com/${pageId}/feed?message=${message}&access_token=${accessToken}`;
    let isAdmin = req.session.isadmin;
    let username = req.session.username;
    let Users = await Getlistofusers();
    axios.post(apiUrl,null).then(function(response){
        if(response.status==200)
        {
          res.send({ message: 'Your post has been shared!' });
        }
        else 
          res.send({message: 'Problem'});
    })
  
  
}
function Add_user_Form(req,res)
{
    if ('isLoggedIn' in req.session) {
        let isAdmin = req.session.isadmin;
        res.render("add_user", {loggedIn: true, Admin: isAdmin , username:req.session.username , message:'' ,exsist_username :false , exsist_email:false,userId:req.session.userid });
    }
    else{
        res.redirect("/ErrorPage");
    }
}

async function Additem(req, res) {
    //const { name, type , gender , price , details ,single_input } = req.body.postdata
    const name=req.body.postdata.Name;
    const type=req.body.postdata.Type;
    const gender=req.body.postdata.Gender;
    const price=req.body.postdata.Price;
    const details=req.body.postdata.Details;
    const single_input=req.body.postdata.Choose_Image;
    let result=await AdminService.AddItem(req,res,name, type , gender , price , details ,single_input);   
    if(result)
    {
      res.send({ message: 'Your item has been Added!' });
    }
    else{
      res.send({ message: 'There is a Problem' });
    }
    //res.redirect('/Mainpage');
  
  }
  async function CreatePromoCode(req, res) {
    let discount=req.body.discount;
    let promocodename=req.body.promocodename;
    let quantity=req.body.quantity;
    let result=await AdminService.CreatePromoCode(discount,promocodename,quantity);   
    if(result)
    {
      res.send({ message: 'Your PromoCode has been Added!' });
    }
    else{
      res.send({ message: 'There is a Problem' });
    }
  
  }
async function AddPhoto(req,res)
{
  let result= await AdminService.AddPhoto(req,res);   
}

async function Getlistofusers()
{
  let Users = await AdminService.Listofusers();
  return Users;
}
async function GetlistofPromocodes()
{
  let promo = await AdminService.ListofPromocodes();
  return promo;
}
async function Promocodes(req, res,next) {
  const PromoLoc=await AdminService.ListofPromocodes();
  res.json(PromoLoc);
 }
async function CreateUser(req, res) {
  const { username, email, firstname, lastname, gender, date, password } = req.body;
  let result = await AdminService.CreateUser(username, email, firstname, lastname, gender, date, password);
  if (result) {
    const message  = "The User added successfully!"
    res.render("add_user", {loggedIn: true, Admin: req.session.isAdmin , username:req.session.username ,message:message,exsist_username:false,exsist_email:false , userId:req.session.userid });

  }
}
async function Update_user_page(req,res)
{
  axios.get('http://localhost:70/api/users', { params : { id : req.query.id }})
      .then(function(userdata){
          res.render("update_user", { user : userdata.data , loggedIn:true , username:req.session.username , Admin:true , userId:req.session.userid});
      })
      .catch(err =>{
          res.send(err);
      })
}
async function find_user(req, res){
  const id = req.query.id;
  const data = await AdminService.findById(id);
  if(data)
    res.send(data);
  else 
  res.status(500).send({ message: "Erro retrieving user with id " + id})
   
}
async function Delete_user (req, res)
{
  const id = req.params.id;
  let result = await AdminService.findByIdAndDelete(id);
  if(result)
  {
    res.send({
      message : "User was deleted successfully!" });
  }
  else{
    console.log("Cant remove account id : "+ id);
  }
}

async function check_username(req, res,next) {
  const { username, email} = req.body
    let result = await AdminService.check_username(username, email);  
    if(result =="username exsist")
    {
        return res.render( "add_user",{ loggedIn: true, Admin: req.session.isAdmin , username:req.session.username,exsist_username:true,message: '' , exsist_email:false , userId:req.session.userid});
    }
    if(result =="email exsist")
    {
      return res.render("add_user",{ loggedIn: true, Admin: req.session.isAdmin , username:req.session.username,exsist_username:false,message: '' , exsist_email:true, userId:req.session.userid });
    }
    return next();
}
async function check_PromoCode(req, res,next) {
    let discount=req.body.discount;
    let promocodename=req.body.promocodename;
    let quantity=req.body.quantity;
    let result = await AdminService.check_PromoCode(promocodename);  
    if(result =="promocode exsist")
    {
        res.send("Promocode exsist");
        return;
    }
    return next();
}

async function Update_user(req, res) {
  try {
    if (!req.
      body) {
      return res.status(400).send({ message: 'Data to update cannot be empty' });
    }

    const id = req.params.id;
    const userData = req.body;
    // const { username, email} = req.body
    // let result = await AdminService.check_username(username, email); 
    // if(result =="username exsist")
    // {
    //     return res.render( "add_user",{ loggedIn: true, Admin: req.session.isAdmin , username:req.session.username,exsist_username:true,message: '' , exsist_email:false });
    // }
    // if(result =="email exsist")
    // {
    //   return res.render("add_user",{ loggedIn: true, Admin: req.session.isAdmin , username:req.session.username,exsist_username:false,message: '' , exsist_email:true });
    // }
    const updatedUser = await AdminService.updateUser(id, userData);

    if (!updatedUser) {
      return res.status(404).send({ message: `Cannot update user with ID ${id}. Maybe user not found!` });
    }

    res.send(updatedUser);
  } catch (error) {
    res.send({ message: 'Error Email or Username is already exsist' });
  }
}



module.exports = {
    Adminpage,
    Additem,
    Getlistofusers,
    Update_user,
    Update_user_page,
    find_user,
    Delete_user,
    Add_user_Form,
    CreateUser , 
    PostFacebook , 
    check_username,
    AddPhoto,
    GetlistofPromocodes,
    Promocodes,
    CreatePromoCode,
    check_PromoCode,
  }