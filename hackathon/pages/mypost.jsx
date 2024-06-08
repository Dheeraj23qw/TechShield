import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";
import Card from "../src/components/Card";
import styles from "./page_module_css/mypost.module.css"; // Import module CSS

export default function Mypost() {
  const navigate = useNavigate();
  const id = localStorage.getItem("USERID");
  const [postData, setPostData] = useState(null); // State variable to hold post data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/form/mypost/${id}`
        );
        setPostData(res.data); // Set post data in state
      } catch (err) {
        console.log(err);
      }
    };

    fetchData(); // Fetch data when component mounts
  }, [id]); // Dependency array includes id, so useEffect runs whenever id changes
 
  return (
    <div >
      <Navbar />
      <div className={styles.container}>
        {/* Render Card component with postData as a prop if postData exists, otherwise display a styled message */}
        {postData ? (
          postData.posts.map((post) => <Card key={post._id} post={post} />)
        ) : (
          <p className={styles.message}>No posts available right now.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
