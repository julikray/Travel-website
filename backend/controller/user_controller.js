const userModel = require("../models/user_model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Signup controller
module.exports.signup = async (req, res) => {
 
  const { name, email, password } = req.body;

  try {

    if (!email || !password || !name) {
      return res.status(422).json({ error: "Please fill in all fields" });
    }

  
    let existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(422)
        .json({ error: "User already exists with this email" });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });


    await newUser.save();

    
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

    return res.status(201).json({
      message: "User created successfully",
      token,
      userId: newUser._id.toString(),
    });
  } catch (error) {
   
    console.error("Error in user signup:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


// Login controller
module.exports.login = async (req, res) => {
  
  const { email, password } = req.body;

  try {
  
    if (!email || !password) {
      return res.status(422).json({ error: "Please provide email and password" });
    }

   
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

   
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    
    return res.status(200).json({
      message: "Login successful",
      token,
      userId: user._id.toString(),
    });
  } catch (error) {

    console.error("Error in user login:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};