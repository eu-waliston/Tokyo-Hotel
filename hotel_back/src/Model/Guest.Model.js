const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
    FirstName: { type: String, default: null },
    LastName: { type: String, default: null },
    DateBirth: { type: Date, default: null },
    Address: { type: String, default: null },
    Phone: { type: String, default: null },
    Email: { type: String, default: null }
})


module.exports = mongoose.model("Guest", guestSchema);