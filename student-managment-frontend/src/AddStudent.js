import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyTextInput from './MyTextInput';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const [StudentId, setStudentId] = useState(0);
  const [StudentName, setStudentName] = useState('');
  const [yearofjoining, setyoj] = useState(0);
  const [branch, setbranch] = useState('');
  const [totalfee, settf] = useState(0);
  const [paidfee, setpf] = useState(0);
  const [balancefee, setbf] = useState(0);
  const [errors,setErrors] = useState({});

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Clear error on change

    switch (name) {
      case 'StudentName':
        setStudentName(value);
        break;
      case 'yoj':
        setyoj(value);
        break;
      case 'tf':
        settf(value);
        break;
      case 'pf':
        setpf(value);
        break;
        case 'branch':
          setbranch(value);
      default:
        break;
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    alert("submit");

    // Validation
    const newErrors = {};
    alert(newErrors);
    if (StudentName === '') newErrors.StudentName = "Student Name is Required";
    if (yearofjoining === 0) newErrors.author = "year is Required";
    if ( totalfee < 15000) newErrors.price = "fee must be greater than 15000 as per standard";
    if (paidfee < 0) newErrors.category = "pay minimum paid fee";
    if (branch==="")newErrors.branch = "Branch is required";
    alert(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert("elell");
      console.log(errors);
      return;
    }
    alert("hello");
    console.log("hellok");

    try {
      // Fetch maxId
      const maxIdResponse = await axios.get(`http://localhost:5500/myapi/mystudents/maxid`);
      if(!maxIdResponse){
        maxId=0;
      }
      const maxId = maxIdResponse.data[0].StudentId + 1; // Increment maxId
      if(maxId==null){
        maxId=0;
      }
      alert("maxid:",maxId);
      setStudentId(maxId);
      alert(totalfee);
      alert(paidfee);
      console.log("StudentName=",maxIdResponse.data[0].StudentName)
      alert(maxId);
      const balancefee=totalfee-paidfee
      alert(balancefee);
      // Prepare student data
      const studentData = {
        StudentId: maxId,
        StudentName,
        yearofjoining,
        branch,
        totalfee,
        paidfee,
        balancefee
      };
      console.log("sdata",studentData);
      // Post student data
      try {
        const response = await axios.post("http://localhost:5500/myapi/mystudent", studentData);
        console.log("Student:", response.data);
        alert("Student Added Successfully");
      } catch (error) {
        console.error("Error adding Student:", error);
      }
      console.log("Student added successfully");
    

      // Reset form
      setStudentId(0);
      setStudentName('');
      setyoj(0);
      settf(0);
      setbranch('');
      setpf(0);
      setErrors({});

      // Navigate to home
      navigate("/");
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div className="card-body container col-md-6">
      <h2 className="text-center">Add Student Form</h2>
      <form onSubmit={onSubmitHandler}>
        <MyTextInput
          myname="StudentName"
          mylabel="Student Name"
          myvalue={StudentName}
          myerror={errors.StudentName}
          myOnChange={onChangeHandler}
        />
        <MyTextInput
          myname="yoj"
          mylabel="Year-Of-Joining"
          myvalue={yearofjoining}
          myerror={errors.yearofjoining}
          myOnChange={onChangeHandler}
        />
                <MyTextInput
          myname="branch"
          mylabel="Branch"
          myvalue={branch}
          myerror={errors.branch}
          myOnChange={onChangeHandler}
        />
        <MyTextInput
          myname="tf"
          mylabel="Total -Fees"
          myvalue={totalfee}
          myerror={errors.totalfee}
          myOnChange={onChangeHandler}
        />
        <MyTextInput
          myname="pf"
          mylabel="Paid -Fees"
          myvalue={paidfee}
          myerror={errors.paidfee}
          myOnChange={onChangeHandler}
        />
        <input
          type="submit"
          value="Add Student Now"
          className="btn btn-primary btn-lg"
        />
      </form>
    </div>
  );
};

export default AddStudent;