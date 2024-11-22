/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Bot from '../assets/images/CareerGPT_Bot.gif'; // Import the bot image
import { FaComments } from 'react-icons/fa'; // Import chat bubble icon

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [chatOpen, setChatOpen] = useState(false); // State to toggle chatbot visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to a server or email)
    console.log('Form Submitted:', formData);
  };

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <div className="min-h-screen bg-white-800 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="text-center pb-6">
            <h1 className="text-3xl">Contact Us!</h1>
            <p className="text-gray-300">Fill up the form below to send us a message.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Type your message here..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <div className="flex justify-between">
              <input
                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Send ➤"
              />
              <input
                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="reset"
                value="Reset"
              />
            </div>
          </form>

          {/* Contact Links with Icons */}
          <div className="mt-5 text-center text-gray-300">
            <p className="text-lg">Or get in touch with us:</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 hover:scale-105 transition-transform duration-300"
              >
                <FaPhoneAlt className="text-xl" />
                <span className="text-lg">Call Us</span>
              </a>
              <a
                href="mailto:info@example.com"
                className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 hover:scale-105 transition-transform duration-300"
              >
                <FaEnvelope className="text-xl" />
                <span className="text-lg">Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Image */}
      <img
        src={Bot} // Using the Bot image imported above
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

export default ContactUs;
