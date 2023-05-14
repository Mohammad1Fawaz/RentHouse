const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const HousesSchema = new mongoose.Schema({
  src: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },

  frequency: {
    type: String,
  },
  furnishedType: {
    type: String,
  },
  propertyType:{
    type:String,
  },
  price: {
    type: Number,
  },
  sqft: {
    type: Number,
  },

  rooms: {
    type: Number,
  },
  bath: {
    type: Number,
  },
  sqft:{
    type:Number
  },
  imagesArray:[{}],
  facilities:[{}],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  // resetPasswordToken: String,
  // resetPasswordTime: Date,
});

module.exports = mongoose.model("Houses", HousesSchema);