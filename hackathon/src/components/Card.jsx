import React, { useState } from "react";
import { FaThumbsUp, FaShare, FaComment, FaShoppingCart } from "react-icons/fa";
import styles from "./module_css/Card.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/app";

export default function Card({ post }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);

  const handleComment = () => {
    navigate("/Comment");
  };

  const handleLiked = () => {
    setLiked(!liked);
  };

  const handlePayment = () => {
    dispatch(addToCart(post));
    navigate("/Payment");
  };

  return (
    <div className={styles.cardcontainer}>
      <div className="card" style={{ width: "25rem" }}>
        <div className={styles.imageContainer}>
          <img
            src={`http://localhost:5000/uploads/${post.coverImage}`}
            alt="Post Cover"
            className={styles.image}
          />
        </div>

        <div className="card-body">
          <p className="card-text">
            {post.username}_{post._id}
          </p>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.description}</p>
          <p className="card-text">{post.content}</p>
          <div className="card-icons">
            <FaThumbsUp
              className={liked ? styles.iconclicked : styles.iconunclicked}
              onClick={handleLiked}
            />
            <FaShare className={styles.iconunclicked} />
            <FaComment
              className={styles.iconunclicked}
              onClick={handleComment}
            />
            <FaShoppingCart
              className={styles.iconunclicked}
              onClick={handlePayment}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
