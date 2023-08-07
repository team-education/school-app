const mongoose = require("mongoose");
const { Schema } = mongoose;
const schoolNewsSchema = new Schema({
  title: String,
  date: String,
  news: String,
});
const News = mongoose.model("News", schoolNewsSchema);

module.exports = News;
