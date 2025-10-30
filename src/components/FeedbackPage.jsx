import React from 'react';
import FeedbackNavbar from './FeedbackNavbar';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from './Navbar';

function FeedbackPage() {
  return ( 
    <>
      <Navbar/>
      <div className="bg-gray-100 min-h-[calc(100vh-64px)] p-8 md:p-12">
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div className="max-w-xl md:order-1">
            <h2 className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Be it academics, infrastructure, facilities, or college events – we’re all ears! 
              What’s on your mind to share valuable feedback about today?
            </h2>

            {/* Feedback Categories */}
            <div className="space-y-6">
              {/* Academics Card */}
              <div className="p-6 border rounded-xl bg-white shadow hover:shadow-lg hover:border-gray-300 transition-all cursor-pointer">
                <h3 className="text-lg font-bold text-gray-900">Academics</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Give feedback about courses, curriculum, and academic support.
                </p>
                <RouterLink
                  to="/feedback/academics"
                  className="inline-block mt-4 px-6 py-2 bg-gray-900 text-white rounded-md font-semibold shadow-md hover:bg-gray-700 transition-colors"
                >
                  Give Feedback →
                </RouterLink>
              </div>

              {/* Facilities Card */}
              <div className="p-6 border rounded-xl bg-white shadow hover:shadow-lg hover:border-gray-300 transition-all cursor-pointer">
                <h3 className="text-lg font-bold text-gray-900">Facilities</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Share your thoughts about labs, classrooms, or infrastructure.
                </p>
                <RouterLink
                  to="/feedback/facilities"
                  className="inline-block mt-4 px-6 py-2 bg-gray-900 text-white rounded-md font-semibold shadow-md hover:bg-gray-700 transition-colors"
                >
                  Give Feedback →
                </RouterLink>
              </div>

              {/* Events Card */}
              <div className="p-6 border rounded-xl bg-white shadow hover:shadow-lg hover:border-gray-300 transition-all cursor-pointer">
                <h3 className="text-lg font-bold text-gray-900">Events</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Share your thoughts about labs, classrooms, or infrastructure.
                </p>
                <RouterLink
                  to="/feedback/events"
                  className="inline-block mt-4 px-6 py-2 bg-gray-900 text-white rounded-md font-semibold shadow-md hover:bg-gray-700 transition-colors"
                >
                  Give Feedback →
                </RouterLink>
              </div>

              {/* Faculty Card */}
              <div className="p-6 border rounded-xl bg-white shadow hover:shadow-lg hover:border-gray-300 transition-all cursor-pointer">
                <h3 className="text-lg font-bold text-gray-900">Faculty</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Share your thoughts about labs, classrooms, or infrastructure.
                </p>
                <RouterLink
                  to="/feedback/faculty"
                  className="inline-block mt-4 px-6 py-2 bg-gray-900 text-white rounded-md font-semibold shadow-md hover:bg-gray-700 transition-colors"
                >
                  Give Feedback →
                </RouterLink>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center items-center md:order-2">
            <img
              src="/Gemini_Generated_Image_4y9occ4y9occ4y9o-Photoroom.png"
              alt="Students Illustration"
              className="w-full max-w-xs md:max-w-none md:w-auto"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default FeedbackPage;