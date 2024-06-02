const mongoose = require("mongoose");

const Room = mongoose.Schema({
    Name: { type: String, default: null },
    Location: { type: Number, default: null },
    Number: { type: Number, default: null },
    Status: { type: Number, default: null },
    Description: { type: String, default: null },
    PricePerNight: { type: Number, default: null },
    Capacity: { type: Number, default: null }
})

module.exports = mongoose.model("Room", Room);