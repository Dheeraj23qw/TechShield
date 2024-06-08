import React, { useState, useEffect } from "react";
import axios from "axios";
import Comment from "./comment";
import styles from "./module_css/handleComment.module.css";

export default function HandleComment() {
  const [commentsData, setCommentsData] = useState({ items: [] });
  const [newCommentText, setNewCommentText] = useState("");

  useEffect(() => {
    
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/comments");
      setCommentsData({ items: response.data });
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleAddComment = async () => {
    if (newCommentText.trim() !== "") {
      const newCommentItem = {
        id: Date.now(),
        name: `user_${Date.now()}`,
        comment: newCommentText,
        likes: 0,
        dislikes: 0,
        replies: [],
        timestamp: new Date().toLocaleString(),
      };
      try {
        const response = await axios.post(
          "http://localhost:5000/api/comments",
          newCommentItem
        );
        if (response.status === 201) {
          const data = response.data;
          setCommentsData((prevData) => ({ items: [...prevData.items, data] }));
          setNewCommentText("");
        } else {
          throw new Error("Failed to add comment");
        }
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  const handleLike = async (commentId) => {
    try {
      await axios.put(`http://localhost:5000/api/comments/${commentId}/like`);
      fetchComments();
    } catch (error) {
      console.error("Error liking comment:", error);
    }
  };

  const handleDislike = async (commentId) => {
    try {
      await axios.put(
        `http://localhost:5000/api/comments/${commentId}/dislike`
      );
      fetchComments();
    } catch (error) {
      console.error("Error disliking comment:", error);
    }
  };

  const handleReply = async (parentId, replyText) => {
    if (replyText.trim() !== "") {
      const newReply = {
        name: "New User",
        comment: replyText,
        likes: 0,
        dislikes: 0,
        replies: [],
        timestamp: new Date().toLocaleString(),
      };
      try {
        const response = await axios.post(
          `http://localhost:5000/api/comments/${parentId}/reply`,
          newReply
        );
        if (response.status !== 201) {
          throw new Error("Failed to add reply");
        }
        fetchComments();
      } catch (error) {
        console.error("Error replying to comment:", error);
      }
    }
  };

  const handleEdit = (commentId) => {
    setCommentsData((prevData) => ({
      items: prevData.items.map((comment) =>
        comment._id === commentId ? { ...comment, isEditing: true } : comment
      ),
    }));
  };

  const handleSave = async (commentId, editedComment) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/comments/${commentId}/edit`,
        { comment: editedComment }
      );
      if (response.status === 200) {
        const updatedComments = commentsData.items.map((comment) =>
          comment._id === commentId
            ? { ...comment, comment: editedComment, isEditing: false }
            : comment
        );
        setCommentsData({ items: updatedComments });
        fetchComments();
      } else {
        console.error("Failed to save edited comment");
      }
    } catch (error) {
      console.error("Error saving edited comment:", error);
    }
  };

  const handleCancel = (commentId) => {
    setCommentsData((prevData) => ({
      items: prevData.items.map((comment) =>
        comment._id === commentId ? { ...comment, isEditing: false } : comment
      ),
    }));
  };

  return (
    <div className={styles.commentSection}>
      <h1>Comment Box</h1>
      <div className={styles.newComment}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
        />
        <button onClick={handleAddComment}>Comment</button>
      </div>
      {commentsData.items.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onLike={handleLike}
          onDislike={handleDislike}
          onReply={handleReply}
          onEdit={handleEdit}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ))}
    </div>
  );
}
