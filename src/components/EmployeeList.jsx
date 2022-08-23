import React from 'react'
import {Link} from "react-router-dom"
import img from "../assets/user-img.png"
const Employee = ({employees}) => {
  return (
    <div className='employees_list'>
      {employees.map( employee => (
        <div className="employee" key={employee.id}>
          <div className="user_info">
            <img className='emp_img' src={img} alt="emp_img" />
            <span className='emp_name'>{employee.name}</span>
          </div>
          <div className="buttons">
            <Link to={`/edit_employee/${employee.id}`} className='btn edit_btn'>Edit</Link>
            <Link to={`/employee/${employee.id}`} className='btn profile_btn'>Profile</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Employee
