const StoreLocation= require('../models/StoreLocation');

async function getmap(){
    const storelocation= 
    await StoreLocation.find();
    return storelocation;
}


  module.exports={
    getmap,
  }