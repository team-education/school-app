const mongoose = require("mongoose");

const { Schema } = mongoose;

const studentSchema = new Schema({
  name: String,
  age: Number,
  grade: Number,
  attendance: Boolean,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;




