import { useState } from "react";
import { FaStar } from "react-icons/fa";
import FeedbackNavbar from "./FeedbackNavbar";

export default function Academics() {
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
    <FeedbackNavbar/>
    <div className=" bg-gray-50">
    <div className="px-6 py-10">
        {/* Heading */}
        <h2 className="text-4xl font-bold font-mono mb-2">
        Feedback for Academics
        </h2>
        <p className="text-gray-600 mb-10 font-mono">
        Rate academics like you rate your favorite Netflix shows
        </p>
        </div>
   </div>
    
    <div className="flex flex-col md:flex-row items-center justify-center  bg-gray-50 px-6 ">
        
      {/* Feedback Form */}
      <div className="w-full md:w-2/3 lg:w-1/2 bg-white shadow-lg rounded-xl p-6 border">
        

        {/* Classrooms Title + Input */}

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
        <h3 className="text-3xl font-bold text-gray-800">Academics</h3>      
        </div>

        {/* Rating Categories */}
        <div className="space-y-6">
          {/* Seating */}
          <RatingRow
            label="Syllabus completion"
            value={ratings.seating}
            onChange={(val) => handleRating("seating", val)}
          />

          {/* Projectors */}
          <RatingRow
            label="Teaching methods"
            value={ratings.projectors}
            onChange={(val) => handleRating("projectors", val)}
          />

          {/* Cleanliness */}
          <RatingRow
            label="Doubt solving"
            value={ratings.cleanliness}
            onChange={(val) => handleRating("cleanliness", val)}
          />
        </div>

        {/* Feedback Box */}
        <textarea
          placeholder="Give specific feedback here"
          rows={4}
          className="w-full mt-6 border rounded-lg px-4 py-3 focus:outline-none"
        ></textarea>

        {/* Upload Button */}
        <div className="flex justify-end mt-4">
          <label className="cursor-pointer border px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">
            Upload picture
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>

      {/* Right Illustration (Responsive Hide on Small Screens) */}
      <div className="hidden md:flex md:w-1/3 justify-center mt-8 md:mt-0">
        <img
          src="/feedback_photo.webp"
          alt="Feedback illustration"
          className="w-64 h-64 object-contain"
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
            className={`cursor-pointer text-2xl ${
              star <= value ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

