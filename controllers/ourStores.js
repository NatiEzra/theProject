const adress = require("../models/StoreLocation");
const storeService = require("../services/ourStores");

function Storepgage(req, res) {
     res.render('ourStores',{});
   }
async function stores(req, res,next) {
   const storeLoc=await storeService.getmap();
  }
  module.exports = { 
    stores,
    Storepgage
  }
  
  
  