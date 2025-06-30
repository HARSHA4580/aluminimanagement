// src/pages/MentorSignupPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function MentorSignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Mentor Signup</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="mentor-name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="mentor-name"
                name="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="mentor-email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="mentor-email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="mentor-password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="mentor-password"
                name="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="mentor-experience" className="block text-sm font-medium text-gray-700">Experience (years)</label>
              <input
                type="number"
                id="mentor-experience"
                name="experience"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="mentor-qualification" className="block text-sm font-medium text-gray-700">Qualifications</label>
              <textarea
                id="mentor-qualification"
                name="qualification"
                rows="4"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="mentor-skills" className="block text-sm font-medium text-gray-700">Skills and Expertise</label>
              <input
                type="text"
                id="mentor-skills"
                name="skills"
                placeholder="e.g., Machine Learning, Data Analysis"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Sign Up as Mentor
            </button>
            <div className="mt-4 text-center">
              <Link to="/login" className="text-blue-600 hover:underline">Already have an account? Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MentorSignupPage;
