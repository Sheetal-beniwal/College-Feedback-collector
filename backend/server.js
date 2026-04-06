const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const dns = require("dns");
const Feedback = require("./models/Feedback");

// ✅ Fix for DNS issues when connecting to MongoDB Atlas
dns.setServers(["8.8.8.8", "8.8.4.4"]);
if (dns.setDefaultResultOrder) {
  dns.setDefaultResultOrder('ipv4first');
}

const app = express();

// ✅ Ensure uploads directory exists
const fs = require("fs");
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads", express.static("uploads")); // to serve uploaded images

// ✅ MongoDB Connection
const MONGO_URL =
  "mongodb+srv://sheetalbeniwal60_db_user:kRprYnjFAA05lYFI@cluster0.vuurh1x.mongodb.net/?appName=Cluster0";

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  })
  .catch((err) => console.log(err));

// ✅ Multer setup (for image upload)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

const upload = multer({ storage });

// ✅ POST route for all feedback types
app.post("/api/feedback", upload.single("image"), async (req, res) => {

  try {
    const { category, feedbackText } = req.body;
    const ratings = {};

    // take all rating fields dynamically
    for (const key in req.body) {
      if (!["category", "feedbackText"].includes(key)) {
        ratings[key] = req.body[key];
      }
    }

    const newFeedback = new Feedback({
      category,
      feedbackText,
      ratings,
      image: req.file ? req.file.filename : null,
    });

    await newFeedback.save();
    res.json({ success: true, message: "Feedback saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error saving feedback" });
  }
});



//  Get all feedbacks (with optional category filter)
app.get("/api/feedback", async (req, res) => {
  try {
    const category = req.query.category; // e.g. /api/feedback?category=Academics
    let feedbacks;

    if (category) {
      feedbacks = await Feedback.find({ category }).sort({ createdAt: -1 });
    } else {
      feedbacks = await Feedback.find().sort({ createdAt: -1 });
    }

    res.status(200).json(feedbacks);
  } catch (err) {
    console.error("Error fetching feedbacks:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

