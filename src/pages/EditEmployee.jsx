import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import FetchData from "../components/FetchData"
const EditEmployee = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [name,setName] = useState("")
  const [salary,setSalary] = useState(null)
  const [email,setEmail] = useState("")
  const [age,setAge] = useState(null)
  const [address,setAdress] = useState("")
  const { data: employee, error, isPending } = FetchData('http://localhost:8000/employees/' + id);
  function setInputsToEmployeeInfo(){
    setName(employee.name)
    setSalary(employee.salary)
    setEmail(employee.email)
    setAge(employee.age)
    setAdress(employee.address)
  }

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
  const HandleUpdateEmployee = (e) => {
    e.preventDefault()
    const employee = {name, salary, email, age, address}
    fetch('http://localhost:8000/employees/' + id, {
    method: 'PUT',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee)
    }).then(() => {
      navigate('/');
    })
  }
  useEffect(()=>{
    employee && setInputsToEmployeeInfo()
  },[employee])
  return (
    <>
    {isPending && <div>Loading...</div>}
    {error && <div>{error}</div>}
    {employee && <>
    <h2>Edit Employee {employee.name}</h2>
    <form onSubmit={HandleUpdateEmployee} className='form'>
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
      <button className='btn add_btn'>Edit Employee</button>
    </form>
    </>}
    </>
  )
}

export default EditEmployee
