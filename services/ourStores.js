const StoreLocation= require('../models/StoreLocation');
const { findOneAndDelete } = require('../models/User');

async function getmap(){
    const storelocation= 
    await StoreLocation.find();
    return storelocation;
}

async function deleteBranch(branch, res)
{
  await StoreLocation.findOneAndDelete({_id: branch._id});
}


  module.exports={
    getmap,
    deleteBranch,
  }