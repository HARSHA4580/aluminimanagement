import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import axios from 'axios';
import { FiSend, FiDownload, FiTrash2, FiSettings } from 'react-icons/fi';
import { FaRobot, FaHistory, FaRoad } from 'react-icons/fa';

function AIChatbot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am your AI assistant. How can I help you today?' },
    { sender: 'bot', text: 'Feel free to ask me anything!' }
  ]);
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([{ sessionId: 1, messages: [] }]);
  const [activeSession, setActiveSession] = useState(1);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { sender: 'mentee', text: input }];
    setMessages(newMessages);

    try {
      const botMessage = `This is a demo reply to your message: "${input}"`;
      setMessages([...newMessages, { sender: 'bot', text: botMessage }]);
    } catch (error) {
      console.error('Error communicating with AI:', error);
      setMessages([...newMessages, { sender: 'bot', text: 'Something went wrong. Please try again later.' }]);
    }

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleDownloadChat = () => {
    const chatData = messages.map((msg) => `${msg.sender}: ${msg.text}`).join('\n');
    const blob = new Blob([chatData], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'chat_history.txt';
    link.click();
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  const handleSessionClick = (sessionId) => {
    setActiveSession(sessionId);
    const session = chatHistory.find((s) => s.sessionId === sessionId);
    setMessages(session ? session.messages : []);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-6 flex justify-between items-center shadow-md">
        <h1 className="text-4xl font-bold flex items-center">
          <FaRobot className="mr-4" />
          AI Chatbot
        </h1>
        <div className="space-x-4 flex items-center">
          <Link to="/roadmap" className="flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition duration-300">
            <FaRoad className="text-2xl" />
            <span>Roadmap</span>
          </Link>
          <button onClick={handleDownloadChat} className="hover:text-teal-100 transition duration-200">
            <FiDownload className="text-2xl" title="Download Chat" />
          </button>
          <button onClick={handleClearChat} className="hover:text-teal-100 transition duration-200">
            <FiTrash2 className="text-2xl" title="Clear Chat" />
          </button>
          <button className="hover:text-teal-100 transition duration-200">
            <FiSettings className="text-2xl" title="Settings" />
          </button>
        </div>
      </div>

      {/* Main Chat Section */}
      <div className="flex-1 flex">
        {/* Sidebar for Chat History */}
        <div className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6 flex flex-col justify-between shadow-lg">
          <div>
            <h2 className="text-3xl font-semibold mb-6 tracking-wider text-gray-200">Chat History</h2>
            {chatHistory.map((session) => (
              <div
                key={session.sessionId}
                className={`p-3 my-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-300 ${
                  session.sessionId === activeSession ? 'bg-gray-700' : 'bg-gray-600'
                }`}
                onClick={() => handleSessionClick(session.sessionId)}
              >
                <FaHistory className="inline mr-2 text-teal-300" /> Session {session.sessionId}
              </div>
            ))}
          </div>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg mt-6 hover:bg-teal-600 transition duration-300">
            New Session
          </button>
        </div>

        {/* Chat window */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 bg-gray-50 flex flex-col space-y-4 shadow-inner">
            <div className="flex-1 overflow-y-auto p-4 bg-white rounded-lg">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`my-2 p-4 rounded-2xl text-white ${
                    message.sender === 'mentee'
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 ml-auto max-w-xs text-right shadow-md'
                      : 'bg-gradient-to-r from-purple-500 to-indigo-500 mr-auto max-w-xs text-left shadow-md'
                  } transition-all duration-200 ease-in-out transform hover:scale-105`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Input section */}
            <div className="mt-auto">
              <div className="flex items-center mt-4 space-x-2 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
                  placeholder="Type your message..."
                />
                <button
                  onClick={handleSend}
                  className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg flex items-center justify-center hover:bg-teal-600 transition-all shadow-md transform hover:scale-105"
                >
                  <FiSend className="mr-2" /> Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIChatbot;
