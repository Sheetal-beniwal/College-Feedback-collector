import { useState } from "react";
import { FaStar } from "react-icons/fa";
import FeedbackNavbar from "../FeedbackNavbar";

export default function Classroom() {
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

      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 px-6 py-12">
        {/* Feedback Form */}
        <div className="w-full md:w-2/3 lg:w-1/2 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-emerald-100">
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-3">
            Classroom Feedback
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Help us make learning spaces more inspiring, comfortable, and bright.
          </p>

          {/* Title + Input */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-emerald-800">Classroom No.</h3>
            <input
              type="text"
              placeholder="Enter class no."
              className="border border-green-200 rounded-lg px-4 py-2 w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all"
            />
          </div>

          {/* Rating Categories */}
          <div className="space-y-8">
            <RatingRow
              label="Comfort of seating, lighting, and ventilation"
              value={ratings.seating}
              onChange={(val) => handleRating("seating", val)}
            />
            <RatingRow
              label="Availability and quality of projectors"
              value={ratings.projectors}
              onChange={(val) => handleRating("projectors", val)}
            />
            <RatingRow
              label="Cleanliness and maintenance"
              value={ratings.cleanliness}
              onChange={(val) => handleRating("cleanliness", val)}
            />
          </div>

          {/* Feedback Box */}
          <textarea
            placeholder="Share your thoughts or suggestions..."
            rows={4}
            className="w-full mt-8 border border-green-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all"
          ></textarea>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            {/* Upload Button */}
            <label className="cursor-pointer border border-green-200 px-4 py-2 rounded-lg bg-white/70 hover:bg-emerald-100 hover:shadow-md transition-all">
              Upload picture
              <input type="file" className="hidden" />
            </label>

            {/* Submit Button */}
            <button className="px-6 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-400 to-green-400 hover:from-green-500 hover:to-emerald-500 shadow-md hover:shadow-lg active:scale-95 transition-all duration-200">
              SUBMIT
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="hidden md:flex md:w-1/3 justify-center mt-8 md:mt-0 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-green-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
          <img
            src="/feedback_photo.webp"
            alt="Feedback illustration"
            className="relative w-72 h-72 object-contain rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
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
            className={`cursor-pointer text-2xl transition-transform duration-150 hover:scale-110 ${
              star <= value ? "text-emerald-400 drop-shadow-sm" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
