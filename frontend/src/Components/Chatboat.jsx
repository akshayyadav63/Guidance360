/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Bot from '../assets/images/CareerGPT_Bot.gif'; 

const Chatbot = () => {
  const [chatOpen, setChatOpen] = useState(false); // State to toggle chatbot visibility

  const toggleChat = () => {
    setChatOpen(!chatOpen); // Toggle visibility on click
  };

  return (
    <div>
      {/* Chatbot Image */}
      <img
        src={Bot} // Ensure the bot image path is correct
        alt="Chatbot"
        onClick={toggleChat}
        className="fixed bottom-5 right-5 w-20 h-20 cursor-pointer hover:scale-105 transition-transform duration-300 z-50"
      />

      {/* Chatbot Sidebar */}
      {chatOpen && (
        <div className="chatbot-sidebar fixed right-1 bottom-5 w-90 h-96 bg-indigo-700 text-white p-3 rounded-tl-3xl shadow-lg z-40">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl">Chat with Us</h2>
            <button
              onClick={toggleChat}
              className="text-white text-2xl hover:text-indigo-300"
            >
              X
            </button>
          </div>

          {/* Embed Iframe of Chatbot */}
          <iframe
            src="http://localhost:8000"  // Update this with the correct URL of your chatbot backend
            width="100%"
            height="85%"
            frameBorder="0"
            title="Chatbot"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
