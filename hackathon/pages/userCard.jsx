import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../src/components/navbar';
import Footer from '../src/components/footer';
import UserInfoCard from '../src/components/userInfoCard';
import styles from "./page_module_css/userCard.module.css";

export default function UserCard() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const username= localStorage.getItem("USERNAME");
        const response = await axios.get(`http://localhost:5000/api/user/${username}`); 
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {loading ? (
          <div className={styles.msg}>Loading...</div>
        ) : error ? (
          <div className={styles.msg}>Error: {error}</div>
        ) : (
          <UserInfoCard
            username={userData.username}
            email={userData.email}
            password={userData.password}
          />
        )}
      </div>
      <Footer />
    </>
  );
}
