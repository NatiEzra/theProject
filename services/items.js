const fs = require("fs");
const Item = require("../models/Item");
async function getitems(){
  const allitems= 
  await Item.find();
  return allitems;
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

module.exports = { addItemWithImage,
getitems,
getWomenItems,
getMenPants,
getMenShoes,
getMenShirts,
getWomenShirts,
getWomenPants,
getWomenShoes,
getMenItems,
 };
