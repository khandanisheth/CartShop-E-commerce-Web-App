const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    prname: { type: String, required: true },
    image: { type: String, default: "" },
});

module.exports = mongoose.model("Product", productSchema);
