const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
 username : {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    
  }
});

module.exports = mongoose.model("Registration", registrationSchema);
