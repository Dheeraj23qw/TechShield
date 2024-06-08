const express = require("express");
const {
  getComments,
  addComment,
  likeComment,
  dislikeComment,
  addReplyToComment,
  saveEditedComment
} = require("../controllers/comment");

const router = express.Router();

router.get("/", getComments);
router.post("/", addComment);
router.put("/:id/like", likeComment);
router.put("/:id/dislike", dislikeComment);
router.post("/:id/reply", addReplyToComment);

router.put("/:id/edit", saveEditedComment);

module.exports = router;
