// Community.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./page_module_css/community.module.css";
import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";

export default function Community() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const username = localStorage.getItem("USERNAME");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/form/getmsg");
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleMessageSend = async () => {
    try {
      await axios.post("http://localhost:5000/api/form/savemsg", {
        username,
        text,
      });

      // Clear the input field
      setText("");

      // Automatically fetch updated messages after sending a message
      await fetchData();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className={styles["group-chat-container"]}
        style={{
          padding: "10px",
          fontWeight: "bold",
          position: "relative",
        }}
      >
        <div className={styles["chat-messages"]}>
          {messages.map((message, index) => (
            <div key={index} className={styles["message"]}>
              <span className={styles["sender"]} style={{ color: "blueviolet" }}>
                {message.username}..
              </span>
              <span className={styles["text"]}>{message.text}</span>
              <span className={styles["timestamp"]}>
                {new Date(message.timestamp).toLocaleString()}
              </span>{" "}
            </div>
          ))}
        </div>
        <div className={styles["message-input"]}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your message..."
            className={styles["input-field"]}
          />
          <button onClick={handleMessageSend} className={styles["send-button"]}>
            Send
          </button>
        </div>
        {/* Background image overlay */}
        <div className={styles["background-overlay"]} />
      </div>
      <Footer />
    </>
  );
}
