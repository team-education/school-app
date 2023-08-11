import React, { useState } from "react";
import axios from "axios";

export default function AddStudent({ onStudentAdded }) {
  const [newStudent, setNewStudent] = useState({
    name: "",
    age: "",
    grade: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Submitting form:", newStudent); // Check the state before submitting

    try {
      const response = await axios.post(
        "http://localhost:8080/student",
        newStudent
      );
      //   if (onStudentAdded) {
      //     onStudentAdded(response.data); // Notify parent component
      //   }

      // Clear form fields
      setNewStudent({
        name: "",
        age: "",
        grade: "",
      });
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) =>
              setNewStudent({ ...newStudent, name: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Age"
            value={newStudent.age}
            onChange={(e) =>
              setNewStudent({ ...newStudent, age: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Grade"
            value={newStudent.grade}
            onChange={(e) =>
              setNewStudent({ ...newStudent, grade: e.target.value })
            }
          />
          <button type="submit">Add</button>
        </form>
     
    </div>
  );
}
