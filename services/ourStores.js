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
async function updateBranch(branch, res)
{
  let flag=false;
  await StoreLocation.findOneAndUpdate({_id:branch._id}, {Address: branch.Address, lat: branch.lat, lng: branch.lng}, {new: false})
  .then(updatedBranch => {
    if (updatedBranch) {
     flag=true;
   } else {
     flag=false;
   }
 })
 .catch(error => {
   flag=false;
 });

return flag;
}


async function createBranch(branch, res){
 const store=new StoreLocation({
  Address: branch.Address,
  lat: branch.lat,
  lng: branch.lng,
 })
const flag= await store.save();
 return flag;
}

  module.exports={
    getmap,
    deleteBranch,
    updateBranch,
    createBranch,
  }