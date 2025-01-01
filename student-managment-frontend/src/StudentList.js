import React, { Component } from "react"; 
 
import axios from "axios"; 
import { NavLink } from "react-router-dom"; 
import { Modal } from "react-bootstrap"; 
import Container from "react-bootstrap/Container"; 
import Button from "react-bootstrap/Button"; 
 
class StudentsList extends Component { 
  state = { 
    mystudents: [], 
    showConfirm: false, 
    myStudentIdToDelete: "", 
  }; 
 
  componentDidMount() { 
    console.log("componentDidMount"); 
    this.getAllStudents(); 
  } 
 
 
  getAllStudents = () => { 
    const URL = "http://localhost:5500/myapi/all"; 
    console.log(URL); 
    axios.get(URL).then((myresponse) => { 
      console.log(myresponse.data,"hello"); 
      // console.log(myresponse.headers); 
      this.setState({ 
        mystudents: myresponse.data, 
      }); 
      console.log(this.state.mystudents);
    }); 
  }; 
 
  showDeleteConfim = (myStudentId) => { 
    console.log("showDeleteConfim", myStudentId); 
    this.setState({ 
      showConfirm: true, 
      myStudentIdToDelete: myStudentId, 
    }); 
  }; 
 
  hideDeleteConfim = () => { 
    console.log("hideDeleteConfim"); 
    this.setState({ 
      showConfirm: false, 
    }); 
  }; 
handleDelete = () => { 
console.log("handleDelete", this.state.myStudentIdToDelete); 
 
const URL = `http://localhost:5500/myapi/mystudents/${this.state.myStudentIdToDelete}`; 
axios.delete(URL) 
.then((myresponse) => { 
console.log(1, myresponse.data); 
this.hideDeleteConfim(); 
this.getAllStudents(); 
this.props.history('/'); 
}) 
.catch((myerror) => { 
console.log(2, myerror); 
}); 
}; 
 
 
 
 
 
 
  render() { 
    const mystudentsList = this.state.mystudents.map((student) => { 
      return ( 
        
        <tr key={student.StudentId}> 
          <td> {student.StudentId} </td> 
          <td> {student.StudentName} </td> 
          <td> {student.yearofjoining} </td> 
          <td> {student.branch}</td>
          <td> {student.totalfee} </td> 
          <td> {student.paidfee} </td> 
          <td> {student.balancefee} </td>
 
          <td> 
            <NavLink key={student.StudentId} to={`/edit-student/${student.StudentId}`} 
              className="btn btn-primary mytext-large mymargin1" exact> 
              Edit {student.StudentId}
            </NavLink> 
 
            <button   type="button"  data-toggle="modal"  
              data-target="#StudentDeleteConfirmation" 
              onClick={this.showDeleteConfim.bind(this, student.StudentId)} 
              className="btn btn-danger mytext-large mymargin1"    > 
              Delete Student
            </button> 
          </td> 
        </tr> 
      ); 
    }); 
 
    return ( 
      <Container className="span-viewport d-flex flex-column align-items-center"> 
        <br /> 
        <div className="container"> 
          <div className="myfloat-left"> 
            <span className="text-center mytext-extra-large"> 
              Students @ Java Learning Center 
            </span> 
          </div> 
          <div className="myfloat-right"> 
            <NavLink   to={"/add-student"}  
              className="btn btn-primary mytext-large mymargin1" exact > 
              Add Student
            </NavLink> 
          </div> 
        </div> 
 
 
      <table className="table"> 
          <thead> 
            <tr> 
              <th> Student ID</th> 
              <th> Student Name</th> 
              <th> Year of Joining</th> 
              <th> Branch</th>
              <th> Total Fee</th> 
              <th> Paid Fee</th>
              <th> Balance Fee </th> 
            </tr> 
          </thead> 
          <tbody>{mystudentsList}</tbody> 
        </table> 
 
        <Modal show={this.state.showConfirm} onHide={this.hideDeleteConfim}> 
          <Modal.Header closeButton> 
            <Modal.Title>Confirmation</Modal.Title> 
          </Modal.Header> 
          <Modal.Body> 
            <p>Are you sure to delete?</p> 
            <b>{this.state.myStudentIdToDelete}</b> 
          </Modal.Body> 
          <Modal.Footer> 
            <Button variant="secondary" onClick={this.hideDeleteConfim}> 
              Close 
            </Button> 
            <Button variant="danger" onClick={this.handleDelete}> 
              Delete 
            </Button> 
          </Modal.Footer> 
        </Modal> 
      </Container> 
    ); 
  } 
} 
export default StudentsList; 
