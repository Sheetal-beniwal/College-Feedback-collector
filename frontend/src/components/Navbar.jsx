import React from 'react'
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  return (
    <div>

      <nav className="w-full flex justify-between items-center py-4 px-8 border-b border-gray-200">
        <h1 className="text-2xl font-extrabold font-mono">CampusPulse</h1>
        <div className="space-x-6 text-lg font-medium">
        <ScrollLink to="about" smooth={true} duration={600} className="hover:text-gray-500">About Us</ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={600} className="hover:text-gray-500">Contact Us</ScrollLink>
          <RouterLink to="/feedback" className="hover:text-gray-500">New Feedbacks</RouterLink>
          <RouterLink to="#" className="hover:text-gray-500">All Feedback</RouterLink>
        </div>
      </nav>
      </div>
  )
}

export default Navbar
