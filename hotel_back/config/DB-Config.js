const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.PORT, {
    useNewUrlParser: true
})

const DB = mongoose.connection;

DB.on("error", () => {
    console.log("MongoDB connection error")
})

DB.once("open", () => {
    console.log("Sucessfully Connected")
})