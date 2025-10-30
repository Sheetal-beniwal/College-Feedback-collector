import React from 'react'

import FeedbackNavbar from './FeedbackNavbar';

function FeedbackPage() {
  return (
    <>
    <FeedbackNavbar/>
    

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-12 gap-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Be it academics, infrastructure, facilities, or college events – we’re all ears! 
            What’s on your mind to share valuable feedback about today?
          </h2>


          {/* Feedback Cards */}
          <div className="space-y-6">
            <div className="p-6 border rounded-xl bg-white shadow hover:shadow-gray-500 transition">
              <h3 className="text-lg font-bold">Academics</h3>
              <p className="text-sm text-gray-600 mb-3">
                Give feedback about courses, curriculum, and academic support.
              </p>
              <a
                href="/feedback/academics"
                className="text-blue-600 font-semibold hover:underline"
              >
                Give Feedback →
              </a>
            </div>


            <div className="p-6 border rounded-xl bg-white shadow hover:shadow-gray-500 transition">
              <h3 className="text-lg font-bold">Facilities</h3>
              <p className="text-sm text-gray-600 mb-3">
                Share your thoughts about labs, classrooms, or infrastructure.
              </p>
              <a
                href="/feedback/facilities"
                className="text-blue-600 font-semibold hover:underline"
              >
                Give Feedback →
              </a>
            </div>


            <div className="p-6 border rounded-xl bg-white shadow hover:shadow-gray-500 transition">
              <h3 className="text-lg font-bold">Events</h3>
              <p className="text-sm text-gray-600 mb-3">
                Share your thoughts about labs, classrooms, or infrastructure.
              </p>
              <a
                href="/feedback/events"
                className="text-blue-600 font-semibold hover:underline"
              >
                Give Feedback →
              </a>
            </div>

           
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src="/feedback_page.jpg"
            alt="Students Illustration"
            className="w-72 md:w-full"
          />
        </div>
      </section>
  
    </>
  );
}

export default FeedbackPage;

   