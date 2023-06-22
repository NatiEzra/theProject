const StoreLocation= require('../models/StoreLocation');

async function getmap(){
    const storelocation= 
    await StoreLocation.find();
    return storelocation;
}


async function stores(req, res) {
    const { lat, lng , Address  } = req.body
   
      const stores = await adress.find({}); 
      if(stores)
      {
        res.render('ourStores', { addresses: stores });
        
      }
    
  }
  module.exports={
    getmap,
    stores,

  }