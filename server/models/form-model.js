// postModel.js
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  coverImage: { type: String },
  content: { type: String },
  price: { type: Number, default: null },
  username: { type: String },
  userId: { type: String },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
