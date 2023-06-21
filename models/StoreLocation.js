const mongoose = require("mongoose");
const StoreLocationSchema = new mongoose.Schema({
  lat: {
    type: String,
    required: true,
  },
  lng: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
  },
  
});
const StoreLocation = mongoose.model('storelocation',StoreLocationSchema);
module.exports = StoreLocation;
