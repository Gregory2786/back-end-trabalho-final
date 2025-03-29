const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const comerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  ingredientes: {
    type: Boolean,
    required: true
  }
});
module.exports = mongoose.model("Comer", comerSchema);