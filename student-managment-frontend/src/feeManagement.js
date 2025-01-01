import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyTextInput from "./MyTextInput";
import axios from "axios";
import classnames from "classnames";
import { useParams, useNavigate } from "react-router-dom";

function FeeManagement() {
  const [state, setState] = useState({
    StudentId: 0,
    StudentName: "",
    yearofjoining: 0,
    branch:"",
    paidfee: 0,
    totalfee:0,
    balancefee:0,
    errors: {},
  });


  const { mystudentId } = useParams();
  const history = useNavigate();

  useEffect(() => {
    console.log("componentDidMount", mystudentId); // Should log the mybookId passed in the URL

    const URL = `http://localhost:5500/myapi/${mystudentId}`;
    axios.get(URL).then((myresponse) => {
      console.log(myresponse.data);
      setState({
        StudentId: myresponse.data.StudentId,
        StudentName: myresponse.data.StudentName,
        yearofjoining:myresponse.data.yearofjoining,
        branch: myresponse.data.branch,
        paidfee: myresponse.data.paidfee,
        totalfee: myresponse.data.totalfee,
        balancefee: myresponse.data.balancefee,
        errors: {},
      });
    });
  }, [mystudentId]);
  const onChangeHandler = (event) => {
    console.log("onChangeHandler");
    const newvalue=event.target.name==='paidfee'||event.target.name==='yearofjoining'?parseInt(event.target.value)||0:event.target.value;

  alert(state.StudentName);
    setState({
      ...state,
      [event.target.name]: newvalue,
    });

  };

  const onSubmitHandler = (event) => {
    alert(state.paidfee);
    event.preventDefault();
    console.log("onSubmitHandler");
    const { StudentName, yearofjoining,branch, paidfee, totalfee } = state;
    const balancefee=state.balancefee-paidfee;
    alert(balancefee);
    setState({balancefee:balancefee});
   // Do the Validations
    if (StudentName === "") {
      setState({
        ...state,
        errors: { StudentName: "Student Name is Required" },
      });
      return;
    }
    else{
      setState({
        ...state,
        errors: { StudentName: "" },
      });
    }
    if (branch ===""){
      setState({
        ...state,
        errors: {branch: "branch is required"},
      });
      return;
    }
    else{
      setState({
        ...state,
        errors: { branch: "" },
      });
    }

    if (yearofjoining < 0) {
      setState({
        ...state,
        errors: { yearofjoining: "year is Required" },
      });
      return;
    }
    else{
      setState({
        ...state,
        errors: { yearofjoining: "" },
      });
    }

    if (paidfee < 0) {
      setState({
        ...state,
        errors: { paidfee: "Paid fee is Required" },
      });
      return;
    }
    else{
      setState({
        ...state,
        errors: { paidfee: "" },
      });
    }

    if (totalfee <15000) {
      setState({
        ...state,
        errors: { totalfee: "total fee is Required" },
      });
      return;
    }
    else{
      setState({
        ...state,
        errors: { totalfee: "" },
      });
    }

    const studentData = {
      StudentId,
      StudentName,
      yearofjoining,
      branch,
      totalfee,
      paidfee,
      balancefee:balancefee,
    };

    // Make Call to Server
    const URL = "http://localhost:5500/myapi/mystu";
    axios.put(URL, studentData)
      .then((myresponse) => {
        console.log(1, myresponse.data);
        // Form Reset
        setState({
          StudentId: 0,
          StudentName: "",
          yearofjoining: 0,
          paidfee: 0,
          totalfee: 0,
          branch:"",
          balancefee:0,
          errors: {},
        });
        history('/');
      })
      .catch((myerror) => {
        console.log(2, myerror);
      });
  };
  const { StudentId, StudentName, yearofjoining,branch, paidfee, totalfee} = state;
  return (
    <div className="card-body container col-md-6">
      <h2 className="text-center"> Edit Student Form </h2>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="studentId"> Student Id </label>
          <input
            type="text"
            name="StudentId"
            value={StudentId}
            readOnly
            className={classnames("form-control form-control-lg")}
          />
        </div>
        <MyTextInput
          myname="StudentName"
          mylabel="Student Name"
          myvalue={StudentName}
          myerror={state.errors.StudentName}
          myOnChange={onChangeHandler}
        />
        <MyTextInput
          myname="yearofjoining"
          mylabel="Year-Of-Joining"
          myvalue={yearofjoining}
          myerror={state.errors.yearofjoining}
          myOnChange={onChangeHandler}
        />
        <MyTextInput
          myname="branch"
          mylabel="Branch"
          myvalue={branch}
          myerror={state.errors.branch}
          myOnChange={onChangeHandler}
        />
        <MyTextInput
          myname="paidfee"
          mylabel="Paid fee"
          myvalue={paidfee}
          myerror={state.errors.paidfee}
          myOnChange={onChangeHandler}
        />
        <MyTextInput
          myname="totalfee"
          mylabel="Totalfee"
          myvalue={totalfee}
          myerror={state.errors.totalfee}
          myOnChange={onChangeHandler}
        />
        <input
          type="submit"
          value="Update Student Now"
          className="btn btn-primary btn-lg"
        />
      </form>
    </div>
  );
}

export default FeeManagement;
