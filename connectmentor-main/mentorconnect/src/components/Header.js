import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-3xl font-extrabold hover:text-gray-200 transition-colors duration-300">
          MENTOR CONNECT
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline hover:text-gray-200 transition-colors duration-300">Home</Link>
          <Link to="/login" className="hover:underline hover:text-gray-200 transition-colors duration-300">Login</Link>
          <Link to="/signup" className="hover:underline hover:text-gray-200 transition-colors duration-300">Signup</Link>
        </nav>
        
        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-gradient-to-r from-blue-600 to-teal-500 p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <button
            className="text-white mb-4"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-white hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/login" className="text-white hover:underline" onClick={() => setIsOpen(false)}>Login</Link>
            <Link to="/signup" className="text-white hover:underline" onClick={() => setIsOpen(false)}>Signup</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
