const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 8085;

// const News = mongoose.model(News, schoolNewsReport);
const News = require("./models/school-news");

mongoose.connect(process.env.DATABASE_URL);

const app = express();
app.use(cors());
app.use(bp.json());

//connect to mongoDB
// mongoose
//   .connect(process.env.DATABASE_url)
//   .then(() => console.log("DB connected"));
// //create an endpoint

app.get("/", (request, response) => {
  response.status(200).json({ welcome: "Just a check!" });
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
