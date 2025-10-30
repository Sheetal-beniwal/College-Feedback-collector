import React from "react";
import { Link as RouterLink } from "react-router-dom";
import FeedbackNavbar from "./FeedbackNavbar";
import Navbar from "./Navbar";

function Faculty() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <FeedbackNavbar />

      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-2">
            Feedback for Faculty
          </h2>
          <p className="text-lg md:text-xl font-light text-gray-700 max-w-2xl mx-auto">
            Rate your professors and provide feedback on their teaching style and support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Buttons Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <RouterLink to="/feedback/faculty/teaching-style">
              <button className="w-full px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 font-semibold text-lg rounded-xl shadow-sm hover:bg-gray-200 hover:border-gray-400 transition-colors duration-200 text-left">
                Teaching Style
              </button>
            </RouterLink>

            <RouterLink to="/feedback/faculty/course-material">
              <button className="w-full px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 font-semibold text-lg rounded-xl shadow-sm hover:bg-gray-200 hover:border-gray-400 transition-colors duration-200 text-left">
                Course Material
              </button>
            </RouterLink>

            <RouterLink to="/feedback/faculty/availability">
              <button className="w-full px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 font-semibold text-lg rounded-xl shadow-sm hover:bg-gray-200 hover:border-gray-400 transition-colors duration-200 text-left">
                Availability & Support
              </button>
            </RouterLink>

            <RouterLink to="/feedback/faculty/communication">
              <button className="w-full px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 font-semibold text-lg rounded-xl shadow-sm hover:bg-gray-200 hover:border-gray-400 transition-colors duration-200 text-left">
                Communication
              </button>
            </RouterLink>

            <RouterLink to="/feedback/faculty/grading">
              <button className="w-full px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 font-semibold text-lg rounded-xl shadow-sm hover:bg-gray-200 hover:border-gray-400 transition-colors duration-200 text-left">
                Grading & Feedback
              </button>
            </RouterLink>

            <RouterLink to="/feedback/faculty/overall-performance">
              <button className="w-full px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 font-semibold text-lg rounded-xl shadow-sm hover:bg-gray-200 hover:border-gray-400 transition-colors duration-200 text-left">
                Overall Performance
              </button>
            </RouterLink>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/feedback_photo.webp"
              alt="Feedback Illustration"
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faculty;