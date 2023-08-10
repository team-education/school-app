import Addstudent from "../../components/AddStudent";
import StudentRegister from "../../components/StudentRegister";
import axios from "axios";
import React from "react";

export default function student() {
    const handleDelete = async (id) => {
        console.log('clicked')
        const res = await axios.delete(`http://localhost:8080/student/${id}`)
        console.log(res)
        // getStudent()
    }
  return (
    <div>
     <StudentRegister />
    </div>
  );
}
