const adress = require("../models/StoreLocation");

 
async function storoes(req, res) {
    const { lat, lng , Address  } = req.body
   
      const stores = await adress.find({}); 
      if(stores)
      {
        res.render('ourStores', { addresses: stores });
        
      }
    
  }
  module.exports = { 
    register,
    isLoggedIn
  }
  
  
  