const adress = require("../models/StoreLocation");
const storeService = require("../services/ourStores");
const logedin = require("./login");
require('custom-env').env(process.env.NODE_ENV, './config');
function Storepgage(req, res) {
      const apikey=process.env.apikey;
      let username = req.session.username;
      let admin= req.session.isadmin;
      if (username == null) loggedIn = false;
      else loggedIn = true;
     res.render('ourStores',{apikey:apikey , loggedIn: loggedIn,username: username , Admin:admin ,userId:req.session.userid});
   }
async function stores(req, res,next) {
   const storeLoc=await storeService.getmap();
   res.json(storeLoc);
  }
async function editStores(req, res)
{
  let username = req.session.username;
  let admin= req.session.isadmin;
  if (username == null) loggedIn = false;
  else loggedIn = true;
  if(admin){
    res.render('editStores',{loggedIn: loggedIn,username: username , Admin:admin ,userId:req.session.userid});
  }
  else{
    res.status(404) // Render the 404 error page
     res.redirect("/ErrorPage");
  }

}
async function deleteBranch(req, res){
//in req.body there is the branch
  branch=req.body;
  storeService.deleteBranch(branch, res);
}
async function updateBranch(req, res)
{
  branch=req.body.branch;
  let result=await storeService.updateBranch(branch);
  if(result){
    res.send({ message: "Branch updated successfully." });
  }
  else
    res.send({ message: "Branch not found." });
}
async function createBranch(req, res){
  branch=req.body;
  const result=storeService.createBranch(branch, res);
  if (result){
    res.send({ message: "Branch created successfully." });
  }
  else
  res.send({ message: "Branch not found." });

}
  module.exports = { 
    stores,
    Storepgage,
    editStores,
    deleteBranch,
    updateBranch,
    createBranch,
  }
  
  
  