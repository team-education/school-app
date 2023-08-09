import axios from "axios";
import AddStudent from "../components/AddStudent";
import React, { useEffect, useState } from "react";

export default function StudentRegister() {
    const [students, setStudents] = useState([]);
  
    useEffect(() => {
      fetchStudents();
    }, []);
  
    async function fetchStudents() {
      try {
        const response = await axios.get("http://localhost:8098/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    }
  
    function handleStudentAdded(newStudent) {
      setStudents((prevStudents) => [...prevStudents, newStudent]);
    }
  
//     return (
//       <div>
//         <h2>Student Register</h2>
//         <AddStudent onStudentAdded={handleStudentAdded} />
//         {/* Display students */}
//       </div>
//     );
//   }

  return (
    <div>
      <h2>Student Register</h2>
      <AddStudent /> {/* Assuming this component allows adding new students */}
      {students.length > 0 ? (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              <strong>Name:</strong> {student.name}
              <br />
              <strong>Age:</strong> {student.age}
              <br />
              <strong>Grade:</strong> {student.grade}
            </li>
          ))}
        </ul>
      ) : 
      
      (
        <p>No students available.</p>
      )}
    </div>
  );}
