const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 8086;
const News = require("./models/news.js");

mongoose.connect(process.env.DATABASE_URL);

const app = express();
app.use(cors());
app.use(bp.json());

app.get("/", (request, response) => {
  response.status(200).json({ welcome: "Just a check!" });
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

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
