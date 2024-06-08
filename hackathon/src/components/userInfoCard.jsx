import React, { useState } from 'react';
import styles from './module_css/userInfoCard.module.css';
import { FaEdit } from 'react-icons/fa';

export default function UserInfoCard({ username, email, password }) {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.userInfoCard}>
      <div className={styles.profileImageContainer}>
        <label htmlFor="profileImageInput" className={styles.profileImageLabel}>
          <input
            type="file"
            id="profileImageInput"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.profileImageInput}
          />
          <img
            src={profileImage || 'download.jpeg'}
            alt="Profile"
            className={styles.profileImage}
          />
        </label>
        <span className={styles.greeting}>Hi {username}</span>
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.field}>
          <label>Username:</label>
          <div className={styles.valueContainer}>
            <span>{username}</span>
           
          </div>
        </div>
        <div className={styles.field}>
          <label>Email:</label>
          <div className={styles.valueContainer}>
            <span>{email}</span>
          </div>
        </div>
       
      </div>
    </div>
  );
}
