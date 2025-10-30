import React from 'react';
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import the arrow icons
import logo from '/Screenshot 2025-10-07 at 9.21.22 PM.png'; // Corrected path for public folder

function Navbar() {
  const navigate = useNavigate(); // Initialize the hook

  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 border-b border-gray-200">
      {/* Left-aligned items: Nav arrows and Logo/Text */}
      <div className="flex items-center space-x-4">
        {/* Navigation Buttons with Arrows */}
        <div className="flex space-x-2">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
            <FaArrowLeft className="text-gray-600" />
          </button>
          <button onClick={() => navigate(1)} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
            <FaArrowRight className="text-gray-600" />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="CampusPulse Logo"
            className="h-10 w-10"
          />
          <h1 className="text-2xl font-extrabold font-mono">CampusPulse</h1>
        </div>
      </div>

      {/* Right-aligned links */}
      <div className="space-x-6 text-lg font-medium">
        <ScrollLink to="about" smooth={true} duration={600} className="hover:text-gray-500 cursor-pointer">About Us</ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={600} className="hover:text-gray-500 cursor-pointer">Contact Us</ScrollLink>
        <RouterLink to="/feedback" className="hover:text-gray-500">New Feedbacks</RouterLink>
        <RouterLink to="#" className="hover:text-gray-500">All Feedback</RouterLink>
      </div>
    </nav>
  );
}

export default Navbar;