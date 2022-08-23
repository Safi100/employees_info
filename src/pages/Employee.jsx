import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import FetchData from "../components/FetchData";
import img from "../assets/user-img.png"
const Employee = () => {
  const navigate = useNavigate();
  const { id } = useParams()
  const { data: employee, error, isPending } = FetchData('http://localhost:8000/employees/' + id);
  const HandleDelete = () => {
    fetch('http://localhost:8000/employees/' + employee.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/')
    })
  }
  return (
    <div>
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { employee && (
        <div className='emp'>
          <div className='employee_container'>
            <div className="img_container">
              <img className='emp_img' src={img} alt="emp_img" />
            </div>
            <div className="info_container">
              <p className='emp_name'>Name : {employee.name}</p>
              <p className='emp_age'>Age : {employee.age}</p>
              <p className='emp_salary'>Salary : {employee.salary}</p>
              <p className='emp_adress'>Adress : {employee.address}</p>
            </div>
          </div>
          <button className='btn delete_btn' onClick={HandleDelete}>Delete employee</button>
        </div>
      )}
    </div>
  )
}
export default Employee