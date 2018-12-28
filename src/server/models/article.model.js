const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  picture: String,
  gallery: [String],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  comment: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});

var Article = mongoose.model("articles", articleSchema);

module.exports = Article;
