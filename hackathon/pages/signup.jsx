import styles from "./page_module_css/signup.module.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { SiReact } from "react-icons/si";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/register", {
        email,
        password,
        username,
      });

      if (res.data.msg === "User created successfully") {
        console.log("signup successful");
        navigate("/signin");
      } else {
        console.log("registration failed:", res.data.msg);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles["signup-container"]}>
        <form className={styles["signup-form"]} onSubmit={handleSubmit}>
          <h2 className={styles.heading}>Sign Up</h2>

          <div className={styles["input-field"]}>
            <FaUser className={styles.icon} />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles["input-field"]}>
            <FaEnvelope className={styles.icon} />
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles["input-field"]}>
            <FaLock className={styles.icon} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles["login-link"]}>
            <Link to="/signin">Already a user?</Link>
          </div>
          <button className={styles["register-button"]}>Sign In</button>
        </form>
        <div className={styles["signup-image"]}>
          <img src="image.png" alt="signin" />
        </div>
      </div>
    </>
  );
}
