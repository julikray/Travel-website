const Destination = require("../models/Destination");

// Get all destinations
module.exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Create a new destination
module.exports.createDestination = async (req, res) => {
  const { name, description, imageUrl, price } = req.body;

  try {
    const newDestination = new Destination({
      name,
      description,
      imageUrl,
      price,
    });

    await newDestination.save();
    res.json(newDestination);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

