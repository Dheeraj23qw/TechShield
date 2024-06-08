const post = require("../models/form-model");
const Contact = require("../models/contact-model");
const Fir =require("../models/fir-model")
const message = require("../models/messageModel");
// Handler for handling form submission
exports.handleFormSubmission = async (req, res) => {
  try {
    const formData = req.body;
    formData.coverImage = req.file.filename;

    const newPost = new post(formData);
    await newPost.save();

    
    res.status(201).json({
      message: "Post created successfully",
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.handleGetForm = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find all posts with the matching userId
    const posts = await post.find({ userId });

    // Check if any posts were found
    if (!posts || posts.length === 0) {
      return res.status(404).json({ message: "No posts found for this user" });
    }

    // If posts are found, send them in the response
    res.status(200).json({ posts });
  } catch (error) {
    console.error("Error retrieving posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Handler for retrieving all posts
exports.handleGetAll = async (req, res) => {
  try {
    const allPosts = await post.find();

    // Check if any posts were found
    if (!allPosts || allPosts.length === 0) {
      return res.status(404).json({ message: "No posts found" });
    }

    // If posts are found, send them in the response
    res.status(200).json({ posts: allPosts });
  } catch (error) {
    console.error("Error retrieving posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.handleContact = async (req, res) => {
  const { name, message, email } = req.body;
 
  try {
    const newContact = new Contact({
      name,
      email,
      message,
    });
    await newContact.save();
    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Error posting form:", error);
  }
};

exports.handleFir=async(req,res)=>{
  const {name,address,contact,description}=req.body;
  try {
    const newFir = new Fir({
      name,
      address,
      contact,
      description,
    });
    await newFir.save();
    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Error posting form:", error);
  }
}

exports.handleGetMsg = async (req, res) => {
  try {
    const messages = await message.find();
    return res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.handleSaveMsg = async (req, res) => {
  
  const { text, username } = req.body;
  try {
    const newMessage = new message({
      text,
      username,
    });
    await newMessage.save();
    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Error posting message:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
