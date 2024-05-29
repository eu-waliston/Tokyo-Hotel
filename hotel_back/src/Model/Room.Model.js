const mongoose = require("mongoose");

const Room = mongoose.Schema({
    Name: { type: String, default: null },
    Location: { type: Number, default: null },
    Number: { type: Number, default: null },
    Status: { type: String, default: null }
})

module.exports = mongoose.model("Room", Room);