import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaPhone, FaUser, FaSun, FaMoon } from 'react-icons/fa';
import { Link } from "react-router-dom";
import styles from "./module_css/userSidebar.module.css";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { MdOutlineSettings } from "react-icons/md";
import { MdSchool, MdBook } from 'react-icons/md';
export default function UserSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

 
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div>
      <div
        className={`${styles.sidebarToggle} ${isDarkMode ? styles.dark : ""}`}
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <FaTimes />
        ) : (
          <>
            <div className={styles.logo}>
            <MdOutlineSettings/>
            </div>
          </>
        )}
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
              <Link to="/userInfo">
                <FaInfoCircle /> User Info
              </Link>
            </li>
            <li>
              <Link to="/mypost">
                < MdBook /> your courses
              </Link>
            </li>
            <li>
              <Link to="/createpost">
                <FaUser/> create cources
              </Link>
            </li>
            <li>
              <Link to="/post">
                <MdBook/> All Cources
              </Link>
            </li>
            <li>
              <Link to="">
                <LuLogOut /> logout
              </Link>
            </li>

            <li className={styles.themeToggle} onClick={toggleTheme}>
              {isDarkMode ? <FaSun /> : <FaMoon />}Theme
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
