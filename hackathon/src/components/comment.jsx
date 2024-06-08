import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaAngleDown, FaEdit, FaSave, FaTimes, FaReply } from 'react-icons/fa';
import styles from "./module_css/comment.module.css";

const Comment = ({
  comment,
  onLike,
  onDislike,
  onReply,
  onEdit,
  onSave,
  onCancel,
}) => {
  const [replyText, setReplyText] = useState("");
  const [editedComment, setEditedComment] = useState(comment.comment);
  const [isReply, setIsReply] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  const handleReply = () => {
    setIsReply(prevIsReply => !prevIsReply);
  };

  const handleEdit = () => {
    onEdit(comment._id);
    setEditedComment(comment.comment);
  };

  const handleSave = () => {
    onSave(comment._id, editedComment); 
  };

  const handleCancel = () => {
    onCancel(comment._id); 
  };

  const toggleReplies = () => {
    setShowReplies(prevShowReplies => !prevShowReplies);
  };

  const renderTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()}`;
  };

  return (
    <div className={styles.commentContainer}> 
      <div className={styles.comment}>
        <div className={styles.commentTime}>{renderTimestamp(comment.timestamp)}</div>
        <div className={styles.userProfile}>
          <img src="download.jpeg" alt="Profile" />
          <span className={styles.commentName}>{comment.name}</span>
        </div>
        <div className={styles.commentInfo}>
          <span className={styles.commentText}>{comment.comment}</span>
        </div>
        <div className={styles.commentActions}>
          <button className={styles.iconButton} onClick={() => onLike(comment._id, comment)}> 
            <FaThumbsUp />
            {comment.likes}
          </button>
          <button className={styles.iconButton} onClick={() => onDislike(comment._id)}> 
            <FaThumbsDown />
            {comment.dislikes}
          </button>
          <button className={styles.iconButton} onClick={handleReply}>
            <FaReply />
          </button>
          <button onClick={handleEdit}>
            <FaEdit />
          </button>
          {comment.replies && (
            <button onClick={toggleReplies}>
              <FaAngleDown /> Replies ({comment.replies.length})
            </button>
          )}
        </div>
        {comment.isEditing ? (
          <div className={styles.editComment}>
            <textarea
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
            ></textarea>
            <div>
              <button onClick={handleSave}>
                <FaSave />
              </button>
              <button onClick={handleCancel}>
                <FaTimes />
              </button>
            </div>
          </div>
        ) : null}
        {isReply && (
          <div className={styles.replyInput}>
            <input
              type="text"
              placeholder="Write your reply here"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <button className={styles.iconButton} onClick={() => {
              if (replyText.trim() !== "") {
                onReply(comment._id, replyText); 
                setReplyText("");
                setIsReply(false);
              }
            }}>Reply</button>
          </div>
        )}
      </div>
      {showReplies && comment.replies && comment.replies.length > 0 && (
        <div className={styles.replies}>
          {comment.replies.map(reply => (
            <Comment
              key={reply._id} 
              comment={reply}
              onLike={onLike}
              onDislike={onDislike}
              onReply={onReply}
              onEdit={onEdit}
              onSave={onSave}
              onCancel={onCancel}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
