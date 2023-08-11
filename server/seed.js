const mongoose = require("mongoose");
require("dotenv").config();
import student from "./Models/Student"

mongoose.connect(process.env.DATABASE_URL);
const News = require("./models/news.js");
const Student = require("./Models/Students")

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

  await Student.create({
    name: "chidi ononye",
    age: 10,
    grade: 5,
    attendance: True
})

await Student.create({
    name: "Qasim Aswan",
    age: 8,
    grade: 7,
    attendance: False
})

await Student.create({
    name: "Bernard Jaggart",
    age: 11,
    grade: 9,
    attendance: True
})
  console.log("All about the school");
  mongoose.disconnect();
}

seed();