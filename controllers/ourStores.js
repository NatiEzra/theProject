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
     res.render('ourStores',{apikey:apikey , loggedIn: loggedIn,username: username , Admin:admin});
   }
async function stores(req, res,next) {
   const storeLoc=await storeService.getmap();
   res.json(storeLoc);
  }
  module.exports = { 
    stores,
    Storepgage
  }
  
  
  