const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  useremail: { type: String, required: true },
  username: { type: String, required: true },
  userpass: { type: String, required: true },
});

module.exports = mongoose.model("UserDB", userSchema);
