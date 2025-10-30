import React from 'react';

function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Our Mission: Empowering Student Voices
        </h1>
        <p className="text-lg md:text-xl font-light leading-relaxed mb-8 text-gray-400">
          At **CampusPulse**, We Believe Every student's opinion is a valuable tool for building a better college experience. Our platform is designed to be the central hub where you can share your feedback, rate classes, and contribute to meaningful change within our community.
        </p>
        <p className="text-lg md:text-xl font-light leading-relaxed mb-8 text-gray-400">
          We're a team of students passionate about creating a transparent and collaborative environment. By giving you a direct line to faculty and administration, we empower you to become an active participant in the future of our campus. Your feedback isn't just a suggestion—it's the pulse of our community, driving improvement and innovation.
        </p>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h2 className="text-3xl font-bold mb-4 text-gray-200">Our Vision</h2>
          <p className="text-base text-gray-500">
            To create a campus where every voice is heard, valued, and acts as a catalyst for positive change.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;