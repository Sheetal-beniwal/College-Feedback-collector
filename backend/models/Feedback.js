const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  category: String,
  feedbackText: String,
  image: String,
  ratings: Object, 
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model("Feedback", feedbackSchema);
