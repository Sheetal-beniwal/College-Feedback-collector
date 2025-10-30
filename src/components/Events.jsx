import React from "react";
import { Link as RouterLink } from "react-router-dom";
import FeedbackNavbar from "./FeedbackNavbar";
import Navbar from "./Navbar";

function Events() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <FeedbackNavbar />

      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-2">
            Feedback for Events
          </h2>
          <p className="text-lg md:text-xl font-light text-gray-700 max-w-2xl mx-auto">
            From festivals to workshops, share your take on the campus event scene.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Buttons Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <RouterLink to="/feedback/events/cultural">
              <button className="w-full px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 font-semibold text-lg rounded-xl shadow-sm hover:bg-gray-200 hover:border-gray-400 transition-colors duration-200 text-left">
                Cultural Events
              </button>
            </RouterLink>

            <RouterLink to="/feedback/events/sports">
              <button className="w-full px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 font-semibold text-lg rounded-xl shadow-sm hover:bg-gray-200 hover:border-gray-400 transition-colors duration-200 text-left">
                Sports Events
              </button>
            </RouterLink>

            <RouterLink to="/feedback/events/workshops">
              <button className="w-full px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 font-semibold text-lg rounded-xl shadow-sm hover:bg-gray-200 hover:border-gray-400 transition-colors duration-200 text-left">
                Workshops & Seminars
              </button>
            </RouterLink>

            <RouterLink to="/feedback/events/social">
              <button className="w-full px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 font-semibold text-lg rounded-xl shadow-sm hover:bg-gray-200 hover:border-gray-400 transition-colors duration-200 text-left">
                Social Gatherings
              </button>
            </RouterLink>

            <RouterLink to="/feedback/events/fests">
              <button className="w-full px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 font-semibold text-lg rounded-xl shadow-sm hover:bg-gray-200 hover:border-gray-400 transition-colors duration-200 text-left">
                Campus Fests
              </button>
            </RouterLink>

            <RouterLink to="/feedback/events/performances">
              <button className="w-full px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 font-semibold text-lg rounded-xl shadow-sm hover:bg-gray-200 hover:border-gray-400 transition-colors duration-200 text-left">
                Performances & Shows
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

export default Events;