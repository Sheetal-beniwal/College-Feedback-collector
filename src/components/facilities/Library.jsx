import { useState } from "react";
import { FaStar } from "react-icons/fa";
import FeedbackNavbar from "../FeedbackNavbar";

export default function Library() {
  const [ratings, setRatings] = useState({
    seating: 0,
    projectors: 0,
    cleanliness: 0,
  });
  const [classNumber, setClassNumber] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  const handleRating = (category, value) => {
    setRatings({ ...ratings, [category]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any data is filled
    const isAnyRatingFilled = Object.values(ratings).some(rating => rating > 0);
    const isClassNumberFilled = classNumber.trim() !== "";
    const isFeedbackTextFilled = feedbackText.trim() !== "";

    if (!isAnyRatingFilled && !isClassNumberFilled && !isFeedbackTextFilled) {
      setPopupMessage("Please add some data before submitting.");
      setIsSuccess(false);
      // Show the popup
      setTimeout(() => {
        setPopupMessage("");
      }, 3000);
      return;
    }

    // Simulate sending data
    console.log("Submitting feedback:", {
      classNumber,
      ratings,
      feedbackText,
    });

    // Reset the form fields
    setRatings({
      seating: 0,
      projectors: 0,
      cleanliness: 0,
    });
    setClassNumber("");
    setFeedbackText("");

    // Show success popup
    setPopupMessage("Feedback Saved!");
    setIsSuccess(true);
    setTimeout(() => {
      setPopupMessage("");
    }, 3000);
  };

  return (
    <>
      <FeedbackNavbar />
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 px-6 py-12">
        {/* Feedback Form */}
        <div className="w-full md:w-2/3 lg:w-1/2 bg-white shadow-lg rounded-xl p-6 border relative">
          {popupMessage && (
            <div className={`absolute top-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg shadow-xl animate-fade-in-down z-10 ${isSuccess ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
              {popupMessage}
            </div>
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Feedback for Facilities
          </h2>
          <p className="text-gray-500 mb-6">
            Campus comfort check: cozy, chaotic, or somewhere in between? We’re
            listening!
          </p>

          {/* Classrooms Title + Input */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <h3 className="text-3xl font-bold text-gray-800">Library</h3>
            <input
              type="text"
              placeholder="Library block no."
              className="border rounded-lg px-4 py-2 w-full md:w-40"
              value={classNumber}
              onChange={(e) => setClassNumber(e.target.value)}
            />
          </div>

          {/* Rating Categories */}
          <div className="space-y-6">
            {/* Seating */}
            <RatingRow
              label="Comfort of seating, lighting and ventilation"
              value={ratings.seating}
              onChange={(val) => handleRating("seating", val)}
            />

            {/* Projectors */}
            <RatingRow
              label="Availability of projectors"
              value={ratings.projectors}
              onChange={(val) => handleRating("projectors", val)}
            />

            {/* Cleanliness */}
            <RatingRow
              label="Cleanliness and maintenance"
              value={ratings.cleanliness}
              onChange={(val) => handleRating("cleanliness", val)}
            />
          </div>

          {/* Feedback Box */}
          <textarea
            placeholder="Give specific feedback here"
            rows={4}
            className="w-full mt-6 border rounded-lg px-4 py-3 focus:outline-none"
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          ></textarea>

          {/* Upload and Submit Button */}
          <div className="flex justify-between items-center mt-4">
            <label className="cursor-pointer border px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">
              Upload picture
              <input type="file" className="hidden" />
            </label>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
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
      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px) translateX(-50%); }
          to { opacity: 1; transform: translateY(0) translateX(-50%); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.5s ease-out;
        }
      `}</style>
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