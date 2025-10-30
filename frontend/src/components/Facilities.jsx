// App.jsx
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import FeedbackNavbar from "./FeedbackNavbar";

function Facilities() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <FeedbackNavbar/>

      {/* Main Content */}
      <div className="px-6 py-10">
        {/* Heading */}
        <h2 className="text-4xl font-bold font-mono mb-2">
          Feedback for Facilities
        </h2>
        <p className="text-gray-600 mb-10 font-mono">
          Campus comfort check: cozy, chaotic, or somewhere in between? We’re
          listening!
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Buttons */}
          <div className="flex flex-col gap-4">
            <button className="border-2 border-gray-400 px-4 py-2 text-xl font-mono rounded hover:bg-gray-100 text-left">
            <RouterLink to="/feedback/facilities/classroom">Classrooms </RouterLink>
            </button>

            <button className="border-2 border-gray-400 px-4 py-2 text-xl font-mono rounded hover:bg-gray-100 text-left">
            <RouterLink to="/feedback/facilities/library">  Library</RouterLink> 
            </button>

            <button className="border-2 border-gray-400 px-4 py-2 text-xl font-mono rounded hover:bg-gray-100 text-left">
            <RouterLink to="/feedback/facilities/labs"> Labs</RouterLink> 
            </button>

            <button className="border-2 border-gray-400 px-4 py-2 text-xl font-mono rounded hover:bg-gray-100 text-left">
            <RouterLink to="/feedback/facilities/canteen">  Canteen</RouterLink> 
            </button>

            <button className="border-2 border-gray-400 px-4 py-2 text-xl font-mono rounded hover:bg-gray-100 text-left">
            <RouterLink to="/feedback/facilities/infra">Campus Infrastructure</RouterLink> 
            </button>

            <button className="border-2 border-gray-400 px-4 py-2 text-xl font-mono rounded hover:bg-gray-100 text-left">
            <RouterLink to="/feedback/facilities/hostel"> Hostel and Accommodation </RouterLink> 
            </button>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/feedback_photo.webp"
              alt="Feedback Illustration"
              className="max-w-sm w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
