const express = require("express");
const router = express.Router();
const Post = require("../model/Post");

router.get("/", (req, res) => {
  res.render("compose");
});

router.post("/", async (req, res) => {
  const { posttitle, postbody } = req.body;

  // Validate the input
  if (!posttitle || !postbody) {
    return res.status(400).send("Title and content are required.");
  }

  try {
    const newPost = new Post({
      title: posttitle,
      body: postbody,
    });

    await newPost.save();
    res.redirect("/");
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
