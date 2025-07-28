const mongoose = require("mongoose");

const DB = new mongoose.Schema({
    prname: String,
    prtitle: String,
    prprice: String,
    image: String,
    prmessage: String,
    prbrand: String,
});

module.exports = mongoose.model("AllItem", DB);
