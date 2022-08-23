import React, { useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
const AddEmployee = () => {
  const navigate = useNavigate();
  
  const [name,setName] = useState("")
  const [salary,setSalary] = useState(null)
  const [email,setEmail] = useState("")
  const [age,setAge] = useState(null)
  const [address,setAdress] = useState("")
  
  const HandleNameChange = (e) => {
    const text = e.target.value.trimStart()
    setName(text)
  }
  const HandleSalaryChange = (e) => {
    const text = e.target.value.trimStart()
    setSalary(text)
  }
  const HandleEmailChange = (e) => {
    const text = e.target.value.trimStart()
    setEmail(text)
  }
  const HandleAgeChange = (e) => {
    const text = e.target.value.trimStart()
    setAge(text)
  }
  const HandleAddressChange = (e) => {
    const text = e.target.value.trimStart()
    setAdress(text)
  }
  const HandleAddEmployee = (e) => { // submit form
    e.preventDefault()
    const employee = {name, salary, email, age, address}
    fetch('http://localhost:8000/employees/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee)
    }).then(() => {
      navigate("/")
    })
  }
  const id = useParams()
  return (
    <>
    <h2>Add Employee</h2>
    <form onSubmit={HandleAddEmployee} className='form'>
      <div className='row'>
        <span className='title'>Name :</span>
        <input onChange={HandleNameChange} value={name} className='input' type="text" required/>
      </div>
      <div className='row'>
        <span className='title'>Salary :</span>
        <input onChange={HandleSalaryChange} value={salary} className='input' type="number" required/>
      </div>
      <div className='row'>
        <span className='title'>Email :</span>
        <input onChange={HandleEmailChange} value={email} className='input' type="email" required/>
      </div>
      <div className='row'>
        <span className='title'>Age :</span>
        <input onChange={HandleAgeChange} value={age} className='input' type="number" required/>
      </div>
      <div className='row'>
        <span className='title'>Address :</span>
        <input onChange={HandleAddressChange} value={address} className='input' type="text" required/>
      </div>
      <button className='btn add_btn'>Add Employee</button>
    </form>
    </>
  )
}

export default AddEmployee