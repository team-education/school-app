const mongoose = require("mongoose");
require('dotenv').config();

const Student = require("./models/Students")

mongoose.connect(process.env.DATABASE_URL);


async function seed(){

// create a new instance of a 'movie' and add it to the Database. We can think of this like using constructors from ealier in vanilla js
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
console.log('Next Student');
mongoose.disconnect();
}

seed();