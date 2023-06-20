const mongoose = require("mongoose");

const StroeLocationSchema = new mongoose.Schema({
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
const StroeLocation = mongoose.model('storelocation',StroeLocationSchema);
module.exports = StoreLocation;
