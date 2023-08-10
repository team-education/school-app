import axios from "axios";
import AddStudent from "../components/AddStudent";
import student from "../pages/Student/student";
import React, { useEffect, useState } from "react";

export default function StudentRegister() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    try {
      const response = await axios.get("http://localhost:8080/student");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  }

  async function handleDelete(id) {
    try {
      const response = await axios.delete(`http://localhost:8080/student/${id}`);
      console.log("Deleted student:", response.data);
      fetchStudents(); // Fetch updated student list after deletion
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  }

  function handleStudentAdded(newStudent) {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  }

  return (
    <div>
      <h2>Student Register</h2>
      (<div><AddStudent /> <handleDelete /> </div>) {/* Assuming this component allows adding new students */}
      {students.length > 0 ? (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              <strong>Name:</strong> {student.name}
              <br />
              <strong>Age:</strong> {student.age}
              <br />
              <strong>Grade:</strong> {student.grade}
              <p onClick={() => handleDelete(student._id)}>X</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No students available.</p>
      )}
    </div>
  );
}
