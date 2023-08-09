const mongoose = require("mongoose");

const promocodeSchema = new mongoose.Schema({
  promocodename: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
    default:1
  },
  discount: {
    type: Number,
    required: true,
  }, 
  users: {
    type: Array,
    required: true,
  }, 

});
const promocode = mongoose.model('promocodes',promocodeSchema);
module.exports = promocode;
