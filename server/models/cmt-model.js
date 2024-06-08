const mongoose = require('mongoose');

// Define reply schema
const replySchema = new mongoose.Schema({
    id: Number,
    name: String,
    comment: String,
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    replies: [this], // Reference 'this' for nested replies
    timestamp: { type: Date, default: Date.now },
});

// Define comment schema
const commentSchema = new mongoose.Schema({
    id: String, // Use Number type for the ID field
    name: String,
    comment: String,
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    replies: [replySchema], // Nested comments for replies
    timestamp: { type: Date, default: Date.now },
});

// Create models based on schemas
const Comment = mongoose.model("Comment", commentSchema);
const Reply = mongoose.model("Reply", replySchema);

module.exports = { Comment, Reply };
