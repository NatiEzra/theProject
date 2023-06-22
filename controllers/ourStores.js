const adress = require("../models/StoreLocation");
const storeService = require("../services/ourStores");
require('custom-env').env(process.env.NODE_ENV, './config');
function Storepgage(req, res) {
     res.render('ourStores',{apikey:process.env.apikey});
   }
async function stores(req, res,next) {
   const storeLoc=await storeService.getmap();
  }
  module.exports = { 
    stores,
    Storepgage
  }
  
  
  