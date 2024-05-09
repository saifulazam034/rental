const mongoose = require('mongoose');
const residencySchema = new mongoose.Schema({
  title: String,
  userId: String,
  rent: String,
  address: String,
  name: String, 
  phone: String,
  vicinity: String,
  description: String,
  city: String,
  Image: String,
  facilities: String
});
module.exports = mongoose.model("residencies", residencySchema);
