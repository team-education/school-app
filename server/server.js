const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const bp = require("body-parser");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(bp.json());

const Student = require("./models/Students");
mongoose.connect(process.env.DATABASE_URL);
app.get("/", (request, response) => {
  response.status(200).json("test request received");
});

app.get("/student", async (request, response) => {
  const allStudents = await Student.find(request.query);
  console.log("I am a student");
  response.status(200).json(allStudents);
});

app.post("/student", async (request, response) => {
  try {
    const newStudent = await Book.create(request.body);
    response.status(200).json(newStudent);
  } catch (error) {
    response.status(500).json(error);
  }
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
