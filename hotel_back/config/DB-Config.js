
var mongoose = require('mongoose');
require("dotenv").config();

//Set up default mongoose connection
var mongoDB = process.env.DB_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", () => {
    console.log("Successfully Connected");
})