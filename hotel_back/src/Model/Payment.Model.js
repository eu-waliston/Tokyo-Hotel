const mongoose = require("mongoose");

const Payment = mongoose.Schema({
    PaymentDate: {type: Date, default: null},
    PaymentMethod: {type: Number, default: null},
    Amount: {type: Number, default: null}
})

module.exports = mongoose.model("Payment", Payment);