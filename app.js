const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
require("./config/connection");
require("mongoose");
require("./model/Post");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Import routes
const homeRoutes = require("./routes/homeRoutes");
const postRoutes = require("./routes/postRoutes");
const composeRoutes = require("./routes/composeRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const contactRoutes = require("./routes/contactRoutes");

// Use the imported routes
app.use("/", homeRoutes);
app.use("/posts", postRoutes);
app.use("/compose", composeRoutes);
app.use("/about", aboutRoutes);
app.use("/contact", contactRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
