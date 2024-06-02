const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      default: "Anonymous",
    },
    created: { type: Date, default: Date.now },
  },
  { autoCreate: true }
);

const ArticleModel = mongoose.model("Article", ArticleSchema);

module.exports = {
  ArticleModel
}