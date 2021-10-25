const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
router.use(express.json());

// MongoDB connection
require("../DB/DBConn/conn");

// MongoDB Schema and model
const Journal = require("../DB/DBmodel/journalSchema");

// Root page
router.get("/", (req, res) => {
  res.send("Home Page auth.js");
});

// Compose Page
router.post("/compose", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(422).json({ error: "Field not filled please fill" });
  }

  Journal.findOne({ title: title })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Title Already Exists" });
      }

      const journal = new Journal({ title, content });

      journal
        .save()
        .then(() => {
          res
            .status(201)
            .json({ message: "New DB document saved successfully" });
        })
        .catch((err) => {
          res.status(500).json({ message: "New DB saving failed" });
        });
    })
    .catch((err) => {
      console.log("Error in DB finding");
    });
});

module.exports = router;
