import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ChatScreen.css";
import Navbar from "./navBar";

export default function ChatScreen() {
  const { userId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    setMessages([...messages, { text: newMessage, sender: "user" }]);
    setNewMessage("");
  };

  const handleBackClick = () => {
    // Implement navigation back logic here
  };

  useEffect(() => {
    // Fetch messages for the specific user (userId) from your database or backend
  }, [userId]);

  return (
    <div className="chat-screen-container">
      <Navbar onBackClick={handleBackClick} profileName="Profile Name" />
      <div className="chat-content">
        {/* Left Side - Chat List */}
        <div className="chat-list">
          <ul>
            <li>
              <img src="profile1.jpg" alt="Profile Image" className="profile-img" />
              <div className="chat-info">
                <div className="profile-name">John Doe</div>
                <div className="last-message">Last message here...</div>
              </div>
            </li>
            <li>
              <img src="avatar_25.jpg" alt="Profile Image" className="profile-img" />
              <div className="chat-info">
                <div className="profile-name">Jane Smith</div>
                <div className="last-message">Another last message...</div>
              </div>
            </li>
            {/* Add more chat items as needed */}
          </ul>
        </div>

        {/* Right Side - Chat Screen */}
        <div className="chat-screen">
          <div className="message-header">
            <button className="back-button" onClick={handleBackClick}>
              &lt;
            </button>
            <div className="message-profInfo">
              <img src="avatar_25.jpg" alt="Profile" className="profile-img" />
              <span className="profile-name">Your Name</span>
            </div>
          </div>
          <div className="message-list">
            {messages.map((message, index) => (
              <div key={index} className={message.sender === "user" ? "message user" : "message"}>
                {/* Render received messages with sender's profile image and name */}
                {message.sender !== "user" && (
                  <div className="message-info">
                    <img src={message.profileImg} alt="Profile" className="profile-img" />
                    <span className="profile-name">{message.profileName}</span>
                  </div>
                )}
                {message.text}
                {/* Render sent messages with user's profile image and name */}
                {message.sender === "user" && (
                  <div className="message-info user">
                    <span className="profile-name">Your Name</span>
                    <img src="avatar_25.jpg" alt="Profile" className="profile-img" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleMessageSubmit} className="message-input-form">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="message-input"
            />
            <button type="submit" className="send-button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
