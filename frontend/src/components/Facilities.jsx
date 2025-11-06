import React from "react";
import { Link as RouterLink } from "react-router-dom";
import FeedbackNavbar from "./FeedbackNavbar";

function Facilities() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 flex flex-col">
      {/* Navbar */}
      <FeedbackNavbar />

      {/* Main Content */}
      <div className="flex-grow px-6 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-3">
            Facilities Feedback
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Campus comfort check: cozy, chaotic, or somewhere in between?  
            We’re listening to your experience.
          </p>

          {/* Feedback Buttons */}
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { path: "/feedback/facilities/classroom", label: "Classrooms" },
              { path: "/feedback/facilities/library", label: "Library" },
              { path: "/feedback/facilities/labs", label: "Labs" },
              { path: "/feedback/facilities/canteen", label: "Canteen" },
              { path: "/feedback/facilities/infra", label: "Campus Infrastructure" },
              { path: "/feedback/facilities/hostel", label: "Hostel & Accommodation" },
            ].map((item, index) => (
              <RouterLink key={index} to={item.path}>
                <button
                  className="w-full px-6 py-4 text-lg font-semibold rounded-xl
                             bg-white/80 backdrop-blur-md shadow-md border border-green-100
                             hover:bg-gradient-to-r hover:from-emerald-400 hover:to-green-300 hover:text-white
                             hover:shadow-lg active:scale-95 transition-all duration-300"
                >
                  {item.label}
                </button>
              </RouterLink>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-300 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
            <img
              src="/feedback_photo.webp"
              alt="Facilities illustration"
              className="relative w-80 md:w-96 rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
