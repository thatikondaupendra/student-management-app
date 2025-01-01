import React, { Component } from "react"; 
 
import { Route, Routes } from "react-router-dom"; 
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";
import FeeManagement from "./feeManagement";
import Home from "./Home";
import Schedules from "./Schedules";
import Attendence from "./Attendence";
class JLCBody extends Component { 
  render() { 
    return ( 
        <div> 
          <Routes>
            <Route path="/" element={<Home/> }/>
            <Route path='/attendence'element = {<Attendence/>}/>
            <Route path='/schedules' element = {<Schedules/>}/>
            <Route path="/studentlist" element={<StudentList />} /> 
            <Route path="/add-student" element={<AddStudent />} /> 
            <Route path="/edit-student/:mystudentId" element={<FeeManagement />} /> 
          </Routes>
        </div> 
    ); 
  } 
} 
export default JLCBody; 
