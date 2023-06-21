const mongoose = require("mongoose");
console.log('1');
const StoreLocationSchema = new mongoose.Schema({
  storename: {
    type: String,
    required: true,
    unique: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
  
});
const StoreLocation = mongoose.model('storelocation',StoreLocationSchema);
module.exports = StoreLocation;
