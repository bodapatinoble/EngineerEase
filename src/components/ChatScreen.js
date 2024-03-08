import React, { useState } from "react";
import "./ChatScreen.css";

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    setMessages([...messages, { text: newMessage, sender: "user" }]);
    setNewMessage("");
  };

  return (
    <div className="chat-screen">
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className={message.sender === "user" ? "message user" : "message"}>
            {message.text}
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
  );
}
