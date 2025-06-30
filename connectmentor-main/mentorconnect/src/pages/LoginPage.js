import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Subtle, classic background gradient color
const backgroundGradient = 'bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600';

function LoginPage() {
  const navigate = useNavigate();

  // Handle Mentee Login
  const handleMenteeLogin = (e) => {
    e.preventDefault();
    // Logic for authentication (if needed) can go here

    // Redirect to Mentee Dashboard
    navigate('/mentee-dashboard');
  };

  // Handle Mentor Login
  const handleMentorLogin = (e) => {
    e.preventDefault();
    // Logic for authentication (if needed) can go here

    // Redirect to Mentor Dashboard
    navigate('/mentor-dashboard');
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${backgroundGradient}`}>
      <div className="w-full max-w-6xl shadow-xl rounded-lg overflow-hidden bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Mentee Section */}
          <div className="relative bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg')` }}>
            <div className="absolute inset-0 bg-blue-800 bg-opacity-50"></div>
            <div className="relative p-8 md:p-16">
              <h2 className="text-white text-3xl font-bold mb-6 text-center">Mentee Login</h2>
              <form className="space-y-4" onSubmit={handleMenteeLogin}>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-lg transition duration-200">
                  Login as Mentee
                </button>
              </form>
              <div className="text-center mt-4 text-white">
                Don't have an account?{' '}
                <Link to="/mentee-signup" className="font-semibold underline">
                  Sign up
                </Link>
              </div>
            </div>
          </div>

          {/* Mentor Section */}
          <div className="relative bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/3184647/pexels-photo-3184647.jpeg')` }}>
            <div className="absolute inset-0 bg-purple-800 bg-opacity-50"></div>
            <div className="relative p-8 md:p-16">
              <h2 className="text-white text-3xl font-bold mb-6 text-center">Mentor Login</h2>
              <form className="space-y-4" onSubmit={handleMentorLogin}>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg shadow-lg transition duration-200">
                  Login as Mentor
                </button>
              </form>
              <div className="text-center mt-4 text-white">
                Don't have an account?.{' '}
                <Link to="/mentor-signup" className="font-semibold underline">
                  Sign up
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;
