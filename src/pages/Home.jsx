import React from 'react'
import FetchData from "../components/FetchData"
import EmployeeList from "../components/EmployeeList"
const Home = () => {
  const { error, isPending, data: employees } = FetchData("http://localhost:8000/employees")
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {employees && <EmployeeList employees={employees}/>}
    </div>
  )
}

export default Home
