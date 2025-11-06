import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        className="w-full flex justify-between items-center py-4 px-8 
        bg-gradient-to-r from-[#fff5f7] via-[#fdecef] to-[#fce7ec]
        shadow-md border-b border-pink-100 backdrop-blur-md"
      >
        <h1 className="text-3xl font-extrabold  text-gray-800 tracking-tight">
          CampusPulse
        </h1>

        <div className="space-x-8 text-lg font-medium">
          <ScrollLink
            to="about"
            smooth={true}
            duration={600}
            className="text-gray-700 hover:text-pink-600 hover:underline hover:underline-offset-4 transition-all duration-200 cursor-pointer"
          >
            About Us
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            className="text-gray-700 hover:text-pink-600 hover:underline hover:underline-offset-4 transition-all duration-200 cursor-pointer"
          >
            Contact Us
          </ScrollLink>

          <RouterLink
            to="/feedback"
            className="text-gray-700 hover:text-pink-600 hover:underline hover:underline-offset-4 transition-all duration-200"
          >
            New Feedbacks
          </RouterLink>

          <RouterLink
            to="#"
            className="text-gray-700 hover:text-pink-600 hover:underline hover:underline-offset-4 transition-all duration-200"
          >
            All Feedback
          </RouterLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
