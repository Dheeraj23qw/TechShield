import React, { useState } from "react";
import styles from "./module_css/form.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("USERID");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("coverImage", coverImage);
    formData.append("content", content);
    formData.append("price", price);
    formData.append("userId", userId);
    formData.append("username", localStorage.getItem("USERNAME"));

    try {
      const response = await axios.post(
        "http://localhost:5000/api/form",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      navigate("/mypost");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.formcontainer}>
      <h1>Create Course</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="postTitle">Post Title</label>
          <input
            type="text"
            className={styles["input-control"]}
            id="postTitle"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="postDescription">Post Description</label>
          <textarea
            className={styles["textarea-control"]}
            id="postDescription"
            rows="3"
            placeholder="Enter post description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="postCoverImage">Post Cover Image</label>
          <input
            type="file"
            className={styles["file-control"]}
            id="postCoverImage"
            accept="image/*"
            onChange={(e) => setCoverImage(e.target.files[0])}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="postDescription">Post Content</label>
          <textarea
            className={styles["textarea-control"]}
            rows="5"
            placeholder="write your post..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="postPrice">Post Price</label>
          <input
            type="number"
            className={styles["input-control"]}
            id="postPrice"
            placeholder="Enter post price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className={`btn ${styles["btn-primary"]} mr-2`}>
          Create Post
        </button>
      </form>
    </div>
  );
}
