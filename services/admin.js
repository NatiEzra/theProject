const multer = require('multer');
const path = require('path');
const Item = require('../models/Item');
const User = require('../models/User');
const Promocode = require('../models/promocode');

// const express = require("express");
// const router = express.Router();
// // Multer configuration
// router.use(express.static('public'));
let storage = multer.diskStorage({
    destination:'./public/images', //directory (folder) setting
    filename:(req, file, cb)=>{
        cb(null,file.originalname) // file name setting
    }
})

//Upload Setting
let upload = multer({
   storage: storage,
   fileFilter:(req, file, cb)=>{
    if(
        file.mimetype == 'image/jpeg' ||
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/png' ||
        file.mimetype == 'image/gif'

    ){
        cb(null, true)
    }
    else{
        cb(null, false);
        cb(new Error('Only jpeg,  jpg , png, and gif Image allow'))
    }
   }
})

async function AddItem(req, res, name, type, gender, price, details, singleInput) {
  try {
     // upload.single('single_input')(req, res, async (err) => {
      //console.log( path.resolve(__dirname, '../public/Images'));
      const item = new Item({
          name: name,
          type: type,
          gender: gender,
          price: price,
          details: details,
          img: singleInput, // Save the filename in the database
      });
        await item.save();
        console.log('Item saved successfully.');
        return true;
   // });
  } catch (error) {
    console.error('Error occurred while adding item:', error);
    return false;
  }
}
function AddPhoto(req,res) {
      upload.single('single_input')(req, res, async (err) => {
      console.log('Image saved successfully.');
      });
  
}
async function Listofusers()
{
  const Users= 
  await User.find();
  return Users;
}
async function Listofitems()
{
  const item= 
  await Item.find();
  return item;
}
async function ListofPromocodes()
{
  const Promo= 
  await Promocode.find();
  return Promo;
}

async function CreatePromoCode(discount,promocodename,quantity)
{
  try{
  const promocode = new Promocode({
    promocodename: promocodename,
    quantity:quantity,
    discount: discount,
    users:[]
  });
  await promocode.save();
  return true;
}
catch (error) {
  console.error('Error occurred while adding Promocode:', error);
  return false;
}
}


async function updateUser(userId, updatedData) {
    try {
      const user = await User.findByIdAndUpdate(userId, updatedData, { useFindAndModify: false });
      if (!user) {
        throw new Error(`Cannot update user with ID ${userId}. User not found.`);
      }
      console.log('User updated successfully.');
      return user;
    } catch (error) {
      console.error('Error occurred while updating user:', error);
      throw error;
    }
  }
async function CreateUser(username, email,firstname , lastname , gender , date , password){
    const user = new User({
      username: username,
      firstname : firstname , 
      lastname : lastname,
      email : email,
      gender , gender,
      date: date,
      password:password,
      cart:[],
  });
  await user.save();
  return true;
}
async function findById(id){
  let data = await User.findById(id); 
  if(!data){
    return false;
  }
  else{
    return(data);
    }
}
async function findByIdAndDelete(id)
{
  let result = await User.findByIdAndDelete(id);
  if(!result)
  {
    return false;
  }
  else{
    return true;
  }
}
async function check_username(username , email)
{
    const user = await User.findOne({username:username}); 
    if(user)
    {
      return "username exsist";
    }
    const user1 = await User.findOne({email:email}); 
    if(user1)
    {
      return "email exsist";
    } 
}
async function check_PromoCode(promocodename)
{
    const promocode = await Promocode.findOne({promocodename:promocodename}); 
    if(promocode)
    {
      return "promocode exsist";
    }
}
module.exports = { AddItem , Listofusers , updateUser , CreateUser,findById ,findByIdAndDelete , check_username , AddPhoto,ListofPromocodes , CreatePromoCode,check_PromoCode, Listofitems};
