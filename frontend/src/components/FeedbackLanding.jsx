import React from "react";
import Navbar from './Navbar'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import { Link as RouterLink } from "react-router-dom";


export default function FeedbackLanding() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-between bg-white text-gray-900">
     
      <main className="flex flex-col items-center text-center px-6 py-16 max-w-3xl">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Your Feedback Matters <br /> More Than You Think
        </h2>
        <p className="mt-8 text-lg md:text-xl text-gray-700">
          Every opinion is a step towards building a better college. Share your
          experience, rate your classes, and help us improve together.
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-600 italic">
          Be the voice of change. Because the future of your campus starts with you.
        </p>

        <RouterLink to="/feedback">
         <button  className="mt-10 px-8 py-3 text-xl font-semibold bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 transition">
          Start Now
        </button>
        </RouterLink> 
      </main>
    
    </div>
    <section id="contact">
        <ContactUs />
      </section>

      <section id="about">
        <AboutUs />
      </section>
    </>
  );
}
