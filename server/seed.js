const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);
const News = require("./models/news.js");

async function seed() {
  await News.create({
    title: "Local woman fixed 50 bugs one day",
    date: "09-08-2023",
    newsItem: "Wow I love react and working with images in react",
  });

  await News.create({
    title: "School launches School App",
    date: "09-08-2023",
    newsItem:
      "Launching of incomplete School-app takes place on 11 August 2023. This page is meant have only the news that public has access to.  The feeder, form is to be housed in an access controlled area",
  });

  console.log("Created a new news item");
  mongoose.disconnect();
}

seed();
