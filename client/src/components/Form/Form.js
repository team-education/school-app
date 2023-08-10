import React, {useState} from 'react'

export default function Form({onSubmitFunc, student}) {
  const [formData, setFormData] = useState(student ?? {
    name: '',
    age: '',
    grade: '',
    attendance: ''
})

  // Dealing with FORM DATA
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name] : event.target.value})
    console.log(formData)
  }  

  // helper function 
  // use this handle different functions using whatever was passed to the prop. 

  const submit = event => {
    event.preventDefault()
    // whatever was passed as tthe prop 
    onSubmitFunc(formData)
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input placeholder='student name' onChange={handleChange} name='name' value={formData.name}></input>
        <input placeholder='age' onChange={handleChange} name='age' value={formData.age}></input>
        <input placeholder='grade' onChange={handleChange} name='grade' value={formData.grade}></input>
        <input placeholder='attendance' onChange={handleChange} name='attendance' value={formData.attendance}></input >
        <button type='submit'>{student ? 'Update' : 'Add Student'}</button>
      </form>
    </div>
  )
}