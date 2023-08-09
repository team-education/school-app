const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.DATABASE_URL);
const Student = require("./models/Students")

async function seed(){
await Student.create({
    name: "chidi ononye",
    age: 10,
    grade: 5
})

await Student.create({
    name: "Qasim Aswan",
    age: 8,
    grade: 7
})

await Student.create({
    name: "Bernard Jaggart",
    age: 11,
    grade: 9
})
console.log('Next Student');
mongoose.disconnect();
}
seed();
