require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const dns = require("dns");
const nodemailer = require("nodemailer");
const Feedback = require("./models/Feedback");
const Contact = require("./models/Contact");

// ✅ Fix for DNS issues when connecting to MongoDB Atlas
dns.setServers(["8.8.8.8", "8.8.4.4"]);
if (dns.setDefaultResultOrder) {
  dns.setDefaultResultOrder('ipv4first');
}

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGODB_URI;

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
if (!MONGO_URL) {
  console.error("❌ MONGODB_URI is not defined in .env file");
}

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
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

// ✅ POST route for Contact Us messages
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email notification
    if (process.env.ADMIN_EMAIL && process.env.GMAIL_APP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.ADMIN_EMAIL,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.ADMIN_EMAIL,
        to: process.env.ADMIN_EMAIL,
        subject: `New Contact US Message - College Feedback Collector`,
        text: `You have received a new message from the "Contact Us" form.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n\nHave a great day!`,
      };

      await transporter.sendMail(mailOptions);
    }

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error sending message" });
  }
});
