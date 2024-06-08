
const { Comment } = require('../models/cmt-model');
const { Reply } = require('../models/cmt-model');


exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.addComment = async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add comment" });
  }
};

exports.likeComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id) 
    
        if (!comment) {
          return res.status(404).json({ error: "Comment not found" });
        }
        comment.likes += 1;
        await comment.save();
        res.json(comment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to like comment" });
    }
};


exports.dislikeComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    comment.dislikes += 1;
    await comment.save();
    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to dislike comment" });
  }
};

exports.addReplyToComment = async (req, res) => {
  try {
    const parentComment = await Comment.findById(req.params.id);
    const newReply = new Reply(req.body); 
    parentComment.replies.push(newReply);
    await parentComment.save();
    res.status(201).json(newReply);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add reply" });
  }
};

exports.saveEditedComment = async (req, res) => {
    const { id } = req.params;
    const { comment: editedComment } = req.body;
  
    try {
      const comment = await Comment.findById(id);
      if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
      }
      comment.comment = editedComment;
      await comment.save();
  
      res.status(200).json(comment);
    } catch (error) {
      console.error("Error saving edited comment:", error);
      res.status(500).json({ error: 'Internal Server Error' });
};
}
