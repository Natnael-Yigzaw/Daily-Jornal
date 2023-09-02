const mongoose = require("mongoose");
require("dotenv").config();

const dbUrl = process.env.DATABASE_URL;
async function main() {
  try {
    await mongoose.connect(dbUrl);
    console.log("connected to mongoDB database");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
}
main();
