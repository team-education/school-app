const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Student = require("./Models/Students");
require("dotenv").config();
const bp = require("body-parser");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(bp.json());

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
    const newStudent = await Student.create(request.body);
    response.status(200).json(newStudent);
  } catch (error) {
    response.status(500).json(error);
  }

});

app.delete('/student/:id' , async (request, response) => {
  console.log(request)
  try {
      const id = request.params.id;
      console.log(id)
      const deletedStudent = await Student.findByIdAndDelete(id)
      response.status(200).json(deletedStudent)
  } catch (err) {
      response.status(500).json(err)
  }
})
app.listen(PORT, () => console.log(`listening on ${PORT}`));

