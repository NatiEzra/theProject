const fs = require("fs");
const Item = require("../models/Item");
const User = require("../models/User");
async function getitems(){
  const allitems= 
  await Item.find();
  return allitems;
}

async function GetItemsPerGender()
{
  let result_;
  const aggregationPipeline = [
    {
      $group: {
        _id: "$gender", // Group by the 'gender' field
        items: { $push: "$$ROOT" }, // Push the whole document into the 'items' array
      },
    },
  ];

  // Execute the aggregation pipeline
  await Item.aggregate(aggregationPipeline)
    .then((result) => {
      
      result_= result;
    })
    .catch((error) => {
      result_=false;
    });
    return result_;
}

async function getMenPants(){
  const Menpants= 
  await Item.find({gender:"male", type: "pants"});
  return Menpants;
}
async function getMenShoes(){
  const Menshoes= 
  await Item.find({gender:"male", type: "shoes"});
  return Menshoes;
}

async function getMenShirts(){
  const Menshirts= 
  await Item.find({gender:"male", type: "shirts"});
  return Menshirts;
}
async function getWomenShirts(){
  const Womenshirts= 
  await Item.find({gender:"female", type: "shirts"});
  return Womenshirts;
}
async function getWomenPants(){
  const Womenpants= 
  await Item.find({gender:"female", type: "pants"});
  return Womenpants;
}
async function getWomenShoes(){
  const Womenshoes= 
  await Item.find({gender:"female", type: "shoes"});
  return Womenshoes;
}
async function getMenItems(){
  const MenItems= 
  await Item.find({gender:"male"});
  return MenItems;
}
async function getWomenItems(){
  const womenItems= 
  await Item.find({gender:"female"});
  return womenItems;
}
async function addItemWithImage() {
  try {
    // Read the image file as a Buffer
    const imageData = fs.readFileSync(__dirname + "/../public/Images/bag.png");

    // Create a new item with the image data
    const newItem = new Item({
      name: "Example Item",
      type: "Example Type",
      gender: "Example Gender",
      price: "123",
      details: "Example Details",
      img: {
        data: imageData,
        contentType: "image/jpeg",
      },
    });
   
      


 
    // Save the new item to the database
    await newItem.save();

    console.log("Item saved successfully");
  } catch (error) {
    console.error("Error saving item:", error);
  }
}
async function getAllUsers(username)
{
  const allUsers=await User.find({username:username});
  return allUsers;

}
async function updateCart(updatedUser, res)
{
  User.findOneAndUpdate({ username: updatedUser.username }, { cart: updatedUser.cart, orderHistory: updatedUser.orderHistory }, { new: true })
  .then(updatedUser => {
     if (updatedUser) {
      res.status(200).json({ message: "Cart updated successfully." });
    } else {
      res.status(404).json({ message: "User not found." });
    }
  })
  .catch(error => {
    res.status(500).json({ message: "Error updating cart.", error: error.message });
  });
}
async function getCart(username2){
 const foundUser= await User.findOne({username: username2});
 if(foundUser)
  return foundUser.cart;

}

async function removeFromCart(item, username2)
{
  const foundUser = await User.findOne({ username: username2 });
  var itemIndex=0;
  //itemIndex = foundUser.cart.findIndex(cartItem => cartItem.itemId === item.itemId);
for(let i=0; i<foundUser.cart.length;i++)
{
  if (foundUser.cart[i].itemId==item.itemId)
  {
    itemIndex=i;
    break;
  }
  itemIndex=-1;
}
  if(itemIndex!=-1){
    foundUser.cart.splice(itemIndex, 1);
    await foundUser.save();
  }
}
async function removeItem(item)
{
  let res = await Item.findOneAndDelete({
    _id: item
  })
  if(!res)
  {
    return false;
  }
  else{
    return true;
  }
}
async function UpdateItem(itemData) {
  try {
    const item = await Item.findByIdAndUpdate({ _id: itemData._id }, { name:itemData.name, price:itemData.price, type:itemData.type,details:itemData.details,gender:itemData.gender }, { new: false })
    if (!item) {
      throw new Error(`Cannot update user with ID ${itemData._id}. User not found.`);
    }
    return item;
  } catch (error) {
    console.error('Error occurred while updating item:', error);
    throw error;
  }
}


module.exports = { 
  addItemWithImage,
getitems,
getWomenItems,
getMenPants,
getMenShoes,
getMenShirts,
getWomenShirts,
getWomenPants,
getWomenShoes,
getMenItems,
getAllUsers,
updateCart,
getCart,
removeFromCart,
GetItemsPerGender,
removeItem,
UpdateItem,
 };
