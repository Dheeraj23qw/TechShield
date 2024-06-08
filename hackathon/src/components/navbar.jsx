import React, { useEffect, useState } from "react";
import { FaBars, FaBell, FaSignOutAlt } from "react-icons/fa";
import styles from "./module_css/navbar.module.css";
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";
import UserSidebar from "./userSidebar";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("theme");
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("USERID");

    navigate("/signin");
  };



  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>techShield</div>
      <Sidebar />

     

      <div className={styles.icons}>
        <div className={styles.notification}>
          <FaBell />
        </div>
        
        <div className={styles.logout}>
          <FaSignOutAlt onClick={handleLogout} />
        </div>
        <div className={styles.usersidebar}>
          <UserSidebar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
