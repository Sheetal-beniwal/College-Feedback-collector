import React from "react";
import Navbar from './Navbar'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import { Link as RouterLink } from "react-router-dom";


export default function FeedbackLanding() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
        <main className="flex flex-col items-center text-center px-6 py-16 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-gray-900">
            Your Feedback Matters <br /> More Than You Think
          </h1>
          <p className="mt-8 text-lg md:text-2xl font-light text-gray-700 max-w-2xl">
            Every opinion is a step towards building a better college. Share your
            experience, rate your classes, and help us improve together.
          </p>
          <p className="mt-4 text-base md:text-xl font-light text-gray-600 italic">
            Be The voice of change . Because the future of your campus starts with you.
          </p>

          <RouterLink to="/feedback">
            <button className="mt-12 px-10 py-4 text-xl font-semibold bg-gray-900 text-white rounded-md shadow-xl hover:bg-gray-700 transition-all">
              Start Now
            </button>
          </RouterLink>
        </main>
      </div>
      
      <section id="about">
        <AboutUs />
      </section>

      <section id="contact">
        <ContactUs />
      </section>
    </>
  );
}