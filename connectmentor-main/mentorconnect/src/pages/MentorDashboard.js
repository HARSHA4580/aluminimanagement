// src/pages/MentorDashboard.js
import React from 'react';
import MentorNavbar from '../components/MentorNavbar';
import { Link } from 'react-router-dom';

function MentorDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-50">
      <MentorNavbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">Mentor Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Manage Mentees */}
          <Link to="/manage-mentees" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex flex-col items-center">
              <i className="fas fa-users text-blue-600 text-7xl group-hover:text-blue-700 transition-colors duration-300"></i>
              <h2 className="text-2xl font-semibold text-gray-900 mt-6 group-hover:text-blue-700">Manage Mentees</h2>
              <p className="text-gray-600 mt-4 text-center">Monitor progress and manage your mentees effectively.</p>
            </div>
          </Link>

          {/* Schedule Meetings */}
          <Link to="/schedule-meetings" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex flex-col items-center">
              <i className="fas fa-calendar-check text-purple-600 text-7xl group-hover:text-purple-700 transition-colors duration-300"></i>
              <h2 className="text-2xl font-semibold text-gray-900 mt-6 group-hover:text-purple-700">Schedule Meetings</h2>
              <p className="text-gray-600 mt-4 text-center">Organize sessions based on mentees' availability.</p>
            </div>
          </Link>

          {/* Resources & Materials */}
          <Link to="/resources-materials" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex flex-col items-center">
              <i className="fas fa-book-open text-green-600 text-7xl group-hover:text-green-700 transition-colors duration-300"></i>
              <h2 className="text-2xl font-semibold text-gray-900 mt-6 group-hover:text-green-700">Resources & Materials</h2>
              <p className="text-gray-600 mt-4 text-center">Provide educational resources and materials to your mentees.</p>
            </div>
          </Link>

          {/* Review Requests */}
          <Link to="/review-requests" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex flex-col items-center">
              <i className="fas fa-clipboard-check text-red-600 text-7xl group-hover:text-red-700 transition-colors duration-300"></i>
              <h2 className="text-2xl font-semibold text-gray-900 mt-6 group-hover:text-red-700">Review Requests</h2>
              <p className="text-gray-600 mt-4 text-center">Approve or reject session requests from mentees.</p>
            </div>
          </Link>

          {/* AI Chat Assistant */}
          <Link to="/ai-chat-assistant" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex flex-col items-center">
              <i className="fas fa-comments text-yellow-600 text-7xl group-hover:text-yellow-700 transition-colors duration-300"></i>
              <h2 className="text-2xl font-semibold text-gray-900 mt-6 group-hover:text-yellow-700">AI Chat Assistant</h2>
              <p className="text-gray-600 mt-4 text-center">Leverage AI to assist you in mentoring and communication.</p>
            </div>
          </Link>

          {/* Performance Dashboard */}
          <Link to="/performance-dashboard" className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex flex-col items-center">
              <i className="fas fa-chart-line text-indigo-600 text-7xl group-hover:text-indigo-700 transition-colors duration-300"></i>
              <h2 className="text-2xl font-semibold text-gray-900 mt-6 group-hover:text-indigo-700">Performance Dashboard</h2>
              <p className="text-gray-600 mt-4 text-center">Track your mentees' progress through visual performance metrics.</p>
            </div>
          </Link>
          
          {/* Video Call */}
          <Link
            to="/video-call"
            className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <i className="fas fa-video text-red-600 text-7xl group-hover:text-red-700 transition-colors duration-300"></i>
              <h2 className="text-2xl font-semibold text-gray-900 mt-6 group-hover:text-red-700">Video Call</h2>
              <p className="text-gray-600 mt-4 text-center">Start a video call with your mentee.</p>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default MentorDashboard;
