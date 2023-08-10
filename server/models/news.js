const mongoose = require("mongoose");
const { Schema } = mongoose;

const newsSchema = new Schema({
  title: String,
  date: String,
  newsItem: String,
});

const News = mongoose.model("News", newsSchema);
module.exports = News;
