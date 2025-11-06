import { useState } from "react";
import { FaStar } from "react-icons/fa";
import FeedbackNavbar from "./FeedbackNavbar";

export default function Events() {
  const [ratings, setRatings] = useState({
    seating: 0,
    projectors: 0,
    cleanliness: 0,
  });

  const handleRating = (category, value) => {
    setRatings({ ...ratings, [category]: value });
  };

  return (
    <>
      <FeedbackNavbar />

      {/* Page Wrapper */}
      <div className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-pink-200 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mt-10 mb-6">
          <h2 className="text-4xl font-bold font-mono text-gray-800">
            Feedback for Events
          </h2>
          <p className="text-gray-600 font-mono mt-2">
            From stage lights to spotlights – tell us how the event felt for you!
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 w-full max-w-6xl">
          {/* Feedback Form */}
          <div className="w-full md:w-1/2 bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-pink-200">
            {/* Event Name */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
              <h3 className="text-2xl font-bold text-pink-700">Event name</h3>
              <input
                type="text"
                placeholder="Event"
                className="border-2 border-pink-200 rounded-lg px-4 py-2 w-full md:w-48 focus:outline-none focus:border-pink-400"
              />
            </div>

            {/* Rating Categories */}
            <div className="space-y-6">
              <RatingRow
                label="Overall Experience"
                value={ratings.seating}
                onChange={(val) => handleRating("seating", val)}
              />
              <RatingRow
                label="Refreshment Quality"
                value={ratings.projectors}
                onChange={(val) => handleRating("projectors", val)}
              />
              <RatingRow
                label="Event Organization"
                value={ratings.cleanliness}
                onChange={(val) => handleRating("cleanliness", val)}
              />
            </div>

            {/* Feedback Box */}
            <textarea
              placeholder="Share your thoughts about the event..."
              rows={4}
              className="w-full mt-6 border-2 border-pink-200 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-400"
            ></textarea>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
              <label className="cursor-pointer border-2 border-pink-300 px-4 py-2 rounded-lg bg-pink-100 hover:bg-pink-200 text-pink-700 font-semibold transition-all">
                Upload Picture
                <input type="file" className="hidden" />
              </label>

              <button className="bg-pink-500 text-white font-bold px-6 py-2 rounded-lg shadow-md hover:bg-pink-600 active:scale-95 transition-all">
                SUBMIT
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/feedback_photo.webp"
              alt="Feedback illustration"
              className="w-80 h-80 object-contain rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function RatingRow({ label, value, onChange }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-3">
      <p className="text-gray-700 font-medium w-full md:w-1/2">{label}</p>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            onClick={() => onChange(star)}
            className={`cursor-pointer text-2xl transition-colors duration-150 ${
              star <= value ? "text-pink-400" : "text-gray-300 hover:text-pink-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
