const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
});

module.exports = mongoose.model("Post", postSchema);
