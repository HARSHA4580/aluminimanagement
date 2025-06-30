// src/pages/MenteeDashboard.js
import React from 'react';
import MenteeNavbar from '../components/MenteeNavbar';
import { Link } from 'react-router-dom';

function MenteeDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <MenteeNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Mentee Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Explore Mentors */}
          <Link
            to="/explore-mentors"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            aria-label="Explore Mentors"
          >
            <div className="text-center">
              <i className="fas fa-user-tie text-blue-500 text-6xl"></i>
              <h2 className="text-xl font-semibold text-gray-800 mt-4">Explore Mentors</h2>
              <p className="text-gray-600 mt-2">Browse and connect with industry experts and mentors.</p>
            </div>
          </Link>

          {/* AI Chatbot */}
          <Link
            to="/ai-chatbot"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            aria-label="AI Chatbot"
          >
            <div className="text-center">
              <i className="fas fa-robot text-green-500 text-6xl"></i>
              <h2 className="text-xl font-semibold text-gray-800 mt-4">AI Chatbot</h2>
              <p className="text-gray-600 mt-2">Get guidance and support through our AI-powered chatbot.</p>
            </div>
          </Link>

          {/* Flexible Scheduling */}
          <Link
            to="/flexible-scheduling"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            aria-label="Flexible Scheduling"
          >
            <div className="text-center">
              <i className="fas fa-calendar-alt text-purple-500 text-6xl"></i>
              <h2 className="text-xl font-semibold text-gray-800 mt-4">Flexible Scheduling</h2>
              <p className="text-gray-600 mt-2">Schedule sessions with mentors according to your availability.</p>
            </div>
          </Link>

          {/* Resources and Materials */}
          <Link
            to="/resources-materials"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            aria-label="Resources and Materials"
          >
            <div className="text-center">
              <i className="fas fa-book text-orange-500 text-6xl"></i>
              <h2 className="text-xl font-semibold text-gray-800 mt-4">Resources and Materials</h2>
              <p className="text-gray-600 mt-2">Access the resources and materials suggested by your mentor.</p>
            </div>
          </Link>
          
          {/* Video Call */}
          <Link
            to="/video-call"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            aria-label="Video Call"
          >
            <div className="text-center">
              <i className="fas fa-video text-red-500 text-6xl"></i>
              <h2 className="text-xl font-semibold text-gray-800 mt-4">Video Call</h2>
              <p className="text-gray-600 mt-2">Start a video call with your mentor.</p>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default MenteeDashboard;
