import React from 'react';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons

function FeedbackNavbar() {
  const navigate = useNavigate();

  return (
    <div>
      {}
      <nav className="w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        {}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              <FaArrowLeft className="text-gray-600" />
            </button>
            <button onClick={() => navigate(1)} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              <FaArrowRight className="text-gray-600" />
            </button>
          </div>
          <h1 className="text-2xl font-bold">
            <RouterLink to="/">CampusPulse</RouterLink>
          </h1>
        </div>

        {/* Right-aligned items: Feedback categories */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">
            <RouterLink to="/feedback/academics">Academics</RouterLink>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <RouterLink to="/feedback/facilities">Facilities</RouterLink>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <RouterLink to="/feedback/events">Events</RouterLink>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <RouterLink to="/feedback/faculty">Faculty</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default FeedbackNavbar;