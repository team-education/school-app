import React, {useState, useEffect} from 'react'
import axios from 'axios'
import StudentCard from '../components/StudentCard/StudentCard'
import Form from './Form/Form'



export default function Main() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        getStudents()
    },[])


    // READ
    async function getStudents() {
        let API = 'http://localhost:8080/students'
        const result = await axios.get(API)
        console.log(result.data)
        setStudents(result.data)
    }

    // CREATE
    const handleAddStudent = async newStudentFormData => {
        const res = await axios.post('http://localhost:8080/students', newStudentFormData)
        setStudents([...students, res.data])
    }

    // delete Movie
    const handleDelete = async (id) => {
        console.log('clicked')
        const res = await axios.delete(`http://localhost:8080/students/${id}`)
        console.log(res)
        getStudents()
    }

    // UPDATE

    const handleUpdateStudate = async (student) => {
        await axios.put(`http://localhost:8080/students/${student._id}`, student)
        getMovies();
    }

    // talk about HTTP Request structure -> 

  return (
    <div>
        <Form onSubmitFunc={handleAddStudent}/>
        <h3>This is my Main!</h3>
        <StudentCard students={students} handleDelete={handleDelete} handleUpdateStudent={handleUpdateStudent}/>
    </div>
  )
}