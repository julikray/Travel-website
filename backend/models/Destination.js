const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
});

module.exports = mongoose.model("Destination", destinationSchema);
