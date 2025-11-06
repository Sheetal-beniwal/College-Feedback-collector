import React from "react";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import { Link as RouterLink } from "react-router-dom";
import Spline from "@splinetool/react-spline";

export default function FeedbackLanding() {
  return (
    <>
      <Navbar />

      {/* 🎨 Hero Section with New Color Scheme */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* 🩵 Background Spline */}
        <Spline
          scene="https://prod.spline.design/YNDHy5tbeP3tn72y/scene.splinecode"
          className="absolute inset-0 w-full h-full"
        />

        {/* 🌌 Blue-Purple overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/60 via-gray-200/50 to-gray-300/50 z-[5]" />

        {/* ✨ Content */}
        <main className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_0_20px_rgba(156,163,175,0.7)]">
            Your Feedback Matters <br /> More Than You Think
          </h2>

          <p className="mt-8 text-lg md:text-xl text-gray-900 max-w-2xl">
            Every opinion is a step towards building a better college. Share your
            experience, rate your classes, and help us improve together.
          </p>

          <p className="mt-4 text-base md:text-lg text-gray-200 italic">
            Be the voice of change. Because the future of your campus starts with you.
          </p>

          <RouterLink to="/feedback">
            <button className="mt-10 px-8 py-3 text-xl font-semibold bg-gradient-to-r from-gray-950 to-gray-500 text-white rounded-md shadow-lg hover:scale-105 active:scale-95 transition-all">
              Start Now
            </button>
          </RouterLink>
        </main>
      </div>

      {/* 🌸 Other Sections */}
      <section id="contact">
        <ContactUs />
      </section>

      <section id="about">
        <AboutUs />
      </section>
    </>
  );
}
