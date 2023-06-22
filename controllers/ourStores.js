const adress = require("../models/StoreLocation");
const storeService = require("../services/ourStores");

function Storepgage(req, res) {
     res.render('ourStores',{});
   }
async function stores(req, res) {
   const storeLoc=await storeService.getmap();
   console.log(storeLoc)
    res.json(storeLoc.json);
    return next();
  }
  module.exports = { 
    stores,
    Storepgage
  }
  
  
  