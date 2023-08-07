const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const News = require("./models/school-news");

async function seed() {
  await News.create({
    title: "School Shut down",
    date: "2023 / 8 / 20",
    news: "This summer holidays start on 7/09/2023 and reopens on 8/15/2023",
  });
  await News.create({
    title: "Road closure",
    date: "2023 / 8 / 15",
    news: "the access road will be closed between Monday and Friday",
  });
  console.log("well done news");
  mongoose.disconnect();
}

seed();
