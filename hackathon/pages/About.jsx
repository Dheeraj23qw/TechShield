// About.js

import React from 'react';
import Navbar from '../src/components/navbar';
import Footer from '../src/components/footer';
import styles from "./page_module_css/About.module.css";

export default function About() {
  return (
    <>
      <Navbar />
      <div className={`${styles.aboutContainer} container`} style={{ minHeight: 'calc(100vh - 120px)', padding: '20px' }}>
        <h1 className={styles.aboutTitle}>About TechShield</h1>
        <p className={styles.aboutText}>
          Welcome to TechShield, a dedicated platform committed to empowering women and fostering a safer world for all. 
        </p>
        <h2 className={styles.aboutSubtitle}>Our Mission:</h2>
        <p className={styles.aboutText}>
          At the core of our mission is the unwavering commitment to women's safety and empowerment. We strive to provide resources, support, and education to help women protect themselves, advocate for their rights, and thrive in all aspects of their lives.
        </p>
        <h2 className={styles.aboutSubtitle}>What We Offer:</h2>
        <p className={styles.aboutText}>
          <strong>Comprehensive Safety Resources:</strong> We offer a wealth of information and resources on personal safety, self-defense techniques, risk assessment, and emergency preparedness. Our goal is to equip women with the knowledge and skills they need to navigate any situation with confidence.
          <br />
          <strong>Community Support:</strong> We believe in the power of community and solidarity. Through our platform, women can connect with one another, share their experiences, and offer support and encouragement in a safe and inclusive space.
          <br />
          <strong>Advocacy and Awareness:</strong> We are dedicated to raising awareness about issues related to women's safety and advocating for change at both the individual and systemic levels. By amplifying the voices of women and championing their rights, we work towards creating a world where every woman feels safe, valued, and respected.
        </p>
        <h2 className={styles.aboutSubtitle}>Why Choose Us:</h2>
        <p className={styles.aboutText}>
          <strong>Expertise:</strong> Our team consists of experts in the fields of safety, self-defense, psychology, and advocacy. We draw on our knowledge and experience to provide reliable, evidence-based information and support to women worldwide.
          <br />
          <strong>Empowerment:</strong> At TechShield, we believe in empowering women to take control of their own safety and well-being. Through education, support, and community engagement, we strive to empower women to live their lives to the fullest, free from fear and intimidation.
          <br />
          <strong>Inclusivity:</strong> We are committed to inclusivity and diversity, and we welcome women of all backgrounds, identities, and experiences to our platform. We recognize the unique challenges faced by different communities of women and strive to create a space where everyone feels seen, heard, and valued.
        </p>
        <h2 className={styles.aboutSubtitle}>Join Us:</h2>
        <p className={styles.aboutText}>
          Whether you're looking to learn new safety skills, connect with other women, or contribute to the movement for women's rights and safety, we invite you to join us at TechShield. Together, we can create a world where every woman feels safe, empowered, and free to live her life on her own terms.
        </p>
        <p className={styles.aboutText}>
          Thank you for being a part of our community.
        </p>
      </div>
      <Footer />
    </>
  );
}
