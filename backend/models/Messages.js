const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const MessagesSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
  },

  // address: {
  //   type: String,
  // },
  message: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
  // resetPasswordToken: String,
  // resetPasswordTime: Date,
});

module.exports = mongoose.model("Messages", MessagesSchema);