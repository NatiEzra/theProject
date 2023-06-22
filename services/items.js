const fs = require("fs");
const Item = require("../models/Item");

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

module.exports = { addItemWithImage };
