import { useState } from "react";
import {
  FaComment,
  FaWpforms,
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaUser,
  FaExclamationCircle,
  FaUsers,
  FaBalanceScale,
  FaAmbulance,
} from "react-icons/fa";
import { SiHelpdesk } from "react-icons/si";
import { Link } from "react-router-dom";
import styles from "./module_css/sidebar.module.css";
import { LuLogOut } from "react-icons/lu";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

 
  return (
    <div>
      <div
        className={`${styles.sidebarToggle} ${isDarkMode ? styles.dark : ""}`}
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div
        className={`${styles.sidebar} ${isOpen ? styles.open : ""} ${
          isDarkMode ? styles.dark : ""
        }`}
      >
        <div className={styles.sidebarHeader}>
          <div className={styles.logo}>
            <h2>techShield</h2>
          </div>
          
        </div>
        <div className={styles.sidebarMenu}>
          <ul>
            <li>
              <Link to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FaInfoCircle /> About Us
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <FaPhone /> Contact Us
              </Link>
            </li>
            <li>
              <Link to="/help">
                <SiHelpdesk /> Help Desk
              </Link>
            </li>

            <li>
              <Link to="/signup">
                <FaUser /> Sign Up
              </Link>
            </li>
            <li>
              <Link to="/fir">
                <FaWpforms /> E-FIR
              </Link>
            </li>
            <li>
              <Link to="/rights">
                <FaBalanceScale /> your Rights
              </Link>
            </li>
           
            <li>
              <Link to="/community">
                <FaUsers /> Community Forums
              </Link>
            </li>
            <li>
              <Link to="/emergency">
                <FaAmbulance /> Emergency Info
              </Link>
            </li>
            <li>
              <Link to="/emergency">
                <  FaExclamationCircle/> SOS
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.searchBar}>
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}
