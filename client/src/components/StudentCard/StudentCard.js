import React from 'react'
import './StudentCards.css'
import Form from '../../components/Form/Form'
import student from '../../pages/Student/student'

export default function StudentCard({students, handleDelete, handleUpdateStudent}) {

  return (
    <div>
        {students.map(student => {
            return (
                <div key={student._id}>
                    <div>
                            {/* we're using two functions here -> anon callback, that callback invokes the handle delete. We're passing the student id as our arugment to the handleDelete function */}
                        <p onClick={() => handleDelete(student._id)}>X</p>
                        <h3>{student.name}</h3>
                        {/* <img src={movie.img_url} />  */}
                        <p>{student.age}, {student.grade}</p>
                    </div>
                    <Form onSubmitFunc={handleUpdateStudent} student={student}/> 
                </div>
            )
        })}
    </div>
  )
}