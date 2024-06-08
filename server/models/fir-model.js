const mongoose = require("mongoose");

const firSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  }
});

const fir = mongoose.model("fir", firSchema);

module.exports = fir;