const express = require("express");
const cors = require("cors");

const { MongoClient, ServerApiVersion, ObjectId, Long } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Task management server is running");
});

app.listen(port, () => {
  console.log(`Task management server is running on ${port}`);
});
