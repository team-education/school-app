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

//   return (
//     <div>
//       <h2>Student Register</h2>
//       (<div><AddStudent /> <handleDelete /> </div>) {/* Assuming this component allows adding new students */}
//       {students.length > 0 ? (
//         <ul>
//           {students.map((student, index) => (
//             <li key={index}>
//               <strong>Name:</strong> {student.name}
//               <br />
//               <strong>Age:</strong> {student.age}
//               <br />
//               <strong>Grade:</strong> {student.grade}
//               <p onClick={() => handleDelete(student._id)}>X</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No students available.</p>
//       )}
//     </div>
//   );
// }


return (
  <div className="student-register">
    <h2>Student Register</h2>
    <AddStudent />
    <div className="table-container">
      {students.length > 0 ? (
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
                <td>
                  <button onClick={() => handleDelete(student._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students available.</p>
      )}
    </div>
  </div>
);
      }