const adress = require("../models/StoreLocation");
const storeService = require("../services/ourStores");
require('custom-env').env(process.env.NODE_ENV, './config');
function Storepgage(req, res) {
      const apikey=process.env.apikey;
     res.render('ourStores',{apikey:apikey});
   }
async function stores(req, res,next) {
   const storeLoc=await storeService.getmap();
   res.json(storeLoc);
  }
  module.exports = { 
    stores,
    Storepgage
  }
  
  
  