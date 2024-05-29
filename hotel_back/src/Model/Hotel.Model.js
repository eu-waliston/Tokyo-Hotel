const mongoose = require("mongoose");

const Hotel = mongoose.Schema({
    Name: { type: String, default: null },
    Address: { type: String, default: null },
    Phone: { type: String, default: null },
    Email: { type: String, default: null },
    Starts: { type: String, default: null },
    ChekingTime: { type: String, default: null },
    CheckoutTime: { type: String, default: null }
})

module.exports = mongoose.model("Hotel", Hotel);