import React from 'react'
import "./navbar.css"
import {Link , Router} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <Link className="logo" to="/"><h1 >Fake Company</h1></Link>
        <ul className='list'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add_employee">Add Employee</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
