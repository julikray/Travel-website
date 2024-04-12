const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
      },
      process.env.JWT_SECRET, 
      {
        expiresIn: "1h", 
      }
    );
  } catch (error) {
    console.error("Error generating token:", error);
    throw error; 
  }
};

module.exports = mongoose.model("User", userSchema);