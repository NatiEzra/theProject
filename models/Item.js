const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  img: {
    data: Buffer, // Store image as a Buffer
    contentType: String, // Store image content type
  },
});

const Item = mongoose.model("items", ItemSchema);

module.exports = Item;
