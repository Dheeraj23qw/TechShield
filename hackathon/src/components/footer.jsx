import React from 'react';
import { FaTelegram, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import styles from "./module_css/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="https://twitter.com"><FaTwitter /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://facebook.com"><FaFacebook /></a>
      </div>
      <div className={styles.copyRight}>
        &copy; 2024 HACKATHON. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
