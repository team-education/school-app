const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const bp = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 8086;
const News = require("./models/news.js");

const Student = require("./Models/Students");

const app = express();
app.use(cors());
app.use(bp.json());

mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
  response.status(200).json("test request received");
});

//Create
app.post("/news", async (request, response) => {
  const newNews = await News.create(request.body);
  response.status(200).json(newNews);
});

//Read
app.get("/news", async (request, response) => {
  try {
    const news = await News.find();
    response.status(200).json(news);
  } catch (error) {
    response.status(404).send(error);
  }
});

//delete
app.delete("/news/:id", async (request, response) => {
  const id = request.params.id;
  const deletedNews = await News.findByIdAndDelete(id);
  response.status(200).json(deletedNews);
});

//update
app.put("/news/:id", async (request, response) => {
  const id = request.params.id;
  await News.findByIdAndUpdate(id, request.body);
  response.status(204).send();
});

app.get("/student", async (request, response) => {
  const allStudents = await Student.find(request.query);
  console.log("I am a student");
  response.status(200).json(allStudents);
});

app.post("/student", async (request, response) => {
  try {
    const newStudent = await Student.create(request.body);
    response.status(200).json(newStudent);
  } catch (error) {
    response.status(500).json(error);
  }
});

app.delete("/student/:id", async (request, response) => {
  console.log(request);
  try {
    const id = request.params.id;
    console.log(id);
    const deletedStudent = await Student.findByIdAndDelete(id);
    response.status(200).json(deletedStudent);
  } catch (err) {
    response.status(500).json(err);
  }
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
