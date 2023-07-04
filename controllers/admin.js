const AdminService = require("../services/admin");
const axios = require('axios');
const User = require('../models/User');


async function Adminpage(req, res) {
    let isAdmin = req.session.isadmin;
    let username = req.session.username;
    if (isAdmin === true) {
      let Users = await Getlistofusers();
      res.render("Management", { loggedIn: true, username: username, Admin: isAdmin , users:Users });
    } else {
     // res.status(404) // Render the 404 error page
     //res.redirect("/ErrorPage");   // Render the 404 error page
     res.render("Management", { loggedIn: true, username: username, Admin: true  });
    }
  }

function Add_user_Form(req,res)
{
    if ('isLoggedIn' in req.session) {
        let isAdmin = req.session.isadmin;
        res.render("add_user", {loggedIn: true, Admin: isAdmin , username:req.session.username });
    }
    else{
        res.redirect("/ErrorPage");
    }
}

async function Additem(req, res) {
    const { name, type , gender , price , details ,single_input } = req.body
    await AdminService.AddItem(req,res,name, type , gender , price , details ,single_input);   
    //res.redirect('/Mainpage');
  
  }

async function Getlistofusers()
{
  let Users = await AdminService.Listofusers();
  return Users;
}

async function CreateUser(req,res){
  const { username, email,firstname , lastname , gender , date , password } = req.body
  let result = await AdminService.CreateUser(username, email,firstname , lastname , gender , date , password);
  if(result)
  {
    let Users= await Getlistofusers();
    res.render("Management", { loggedIn: true, username: req.session.username, Admin: req.session.isAdmin , users:Users });

  }

}
async function Update_user_page(req,res)
{
  axios.get('http://localhost:70/api/users', { params : { id : req.query.id }})
      .then(function(userdata){
          res.render("update_user", { user : userdata.data , loggedIn:true , username:req.session.username , Admin:true});
      })
      .catch(err =>{
          res.send(err);
      })
}
async function find_user(req, res){
  if(req.query.id){
      const id = req.query.id;

      User.findById(id)
          .then(data =>{
              if(!data){
                  res.status(404).send({ message : "Not found user with id "+ id})
              }else{
                  res.send(data)
              }
          })
          .catch(err =>{
              res.status(500).send({ message: "Erro retrieving user with id " + id})
          })

  }else{
      Userdb.find()
          .then(user => {
              res.send(user)
          })
          .catch(err => {
              res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
          })
  }

}
async function Delete_user (req, res)
{
    const id = req.params.id;
    User.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}



async function Update_user(req, res) {
  try {
    if (!req.
      body) {
      return res.status(400).send({ message: 'Data to update cannot be empty' });
    }

    const id = req.params.id;
    const userData = req.body;

    const updatedUser = await AdminService.updateUser(id, userData);

    if (!updatedUser) {
      return res.status(404).send({ message: `Cannot update user with ID ${id}. Maybe user not found!` });
    }

    res.send(updatedUser);
  } catch (error) {
    res.status(500).send({ message: 'Error updating user information' });
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
    CreateUser
  }