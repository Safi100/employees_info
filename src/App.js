import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from "./pages/Home"
import AddEmployee from "./pages/AddEmployee"
import EditEmployee from "./pages/EditEmployee"
import Employee from "./pages/Employee"
import NotFound from "./pages/NotFound_404"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./app.css"
const App = () => {
  return (
    <Router>
        <Navbar />
        <div className='content'>
          <div className='wrapper'>
              <Routes>
                  <Route exact path='/' element={<Home/>} />
                  <Route path='/add_employee' element={<AddEmployee/>} />
                  <Route path='/edit_employee/:id' element={<EditEmployee/>} />
                  <Route path='/employee/:id' element={<Employee/>} />
                  <Route path='*' element={<NotFound/>} />
              </Routes>
          </div>
        </div>
    </Router>
  )
}

export default App
