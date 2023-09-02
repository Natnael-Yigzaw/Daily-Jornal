const express = require("express");
const router = express.Router();
const Post = require("../model/Post");

router.get("/:postTitle", async (req, res) => {
  try {
    const requestedPostTitle = req.params.postTitle;

    // Use async/await with findOne to fetch the post by title
    const post = await Post.findOne({ title: requestedPostTitle });

    if (post) {
      res.render("post", {
        posttitle: post.title,
        postcontent: post.body,
      });
    } else {
      // Handle the case where the post does not exist
      res.status(404).send("Post not found");
    }
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
