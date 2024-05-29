const mongoose = require("mongoose");

const RoomType = mongoose.Schema({
    Name: { type: String, default: null },
    Description: { type: String, default: null },
    PricePerNight: { type: Number, default: null },
    Capacity: { type: Number, default: null }
})

module.exports = mongoose.model("RoomType", RoomType);