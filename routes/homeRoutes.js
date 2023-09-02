const express = require("express");
const router = express.Router();
const Post = require("../model/Post");

const posts = [
  {
    title: "Blog 1",
    body: "This is the first blog",
  },
  {
    title: "Blog 2",
    body: "This is the second blog",
  },
];

router.get("/", async (req, res) => {
  try {
    const foundPosts = await Post.find({});

    if (foundPosts.length === 0) {
      await Post.insertMany(posts);
      res.redirect("/");
    } else {
      res.render("home", {
        posts: foundPosts,
      });
    }
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
