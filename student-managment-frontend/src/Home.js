import { Link } from "react-router-dom";
import axios from "axios"; 
import { NavLink } from "react-router-dom"; 
import { Modal } from "react-bootstrap"; 
import Container from "react-bootstrap/Container"; 
import Button from "react-bootstrap/Button"; 
 function Home(){

    return (
        <div className="home">
            <h1 className="text-center text-success">Home</h1>
 
            <table className="table position-relative text-center table-hover table-striped 
                      table-bordered table-hover border border-grey" >
                <tr>
                <th colSpan-2>
            <div className="container text-center"       style={{ 
        color: 'white', 
        backgroundColor: 'grey', 
        fontSize: '16px', 
        padding: '10px' ,
        border: '1px solid black',
        borderRadius: '10px',
        width:'60%'

      }} > 
          <div className="myfloat-center "> 
          </div> 
          <div className="myfloat-right " style={{backgroundColor:'rgba(2, 6, 14, 0.495)' }}> 
            <img src="" alt="Logo"></img>
            <p className="center text-small">College is a transformative period in a person's life, a time of intellectual exploration, personal growth, and newfound freedom. </p>
            <NavLink   to={"/about"}  
              className="btn btn-primary mytext-large mymargin1 rounded-pill" exact > 
              About colloge
            </NavLink> 
          </div> 
        </div>
        <br></br>
            </th>
            <th colSpan-2>
            <div className="container text-center"       style={{ 
        color: 'white', 
        backgroundColor: 'grey', 
        fontSize: '16px', 
        padding: '10px' ,
        border: '1px solid black',
        borderRadius: '10px',
        width:'60%'

      }} > 
          <div className="myfloat-center "> 
          </div> 
          <div className="myfloat-right bg-dark"> 
            <img src="" alt="Logo"></img>
            <p className="center text-small">College is a transformative period in a person's life, a time of intellectual exploration, personal growth, and newfound freedom. </p>
            <NavLink   to={"/contact"}  
              className="btn btn-primary mytext-large mymargin1 rounded-pill" exact > 
              Contact
            </NavLink> 
          </div> 
        </div>
        <br></br>
            </th>
</tr>
<tr>
<th>
            <div className="container text-center"       style={{ 
        color: 'white', 
        backgroundColor: 'lightgray', 
        fontSize: '16px', 
        padding: '10px' ,
        border: '1px solid black',
        borderRadius: '10px',
        width:'60%'

      }} > 
          <div className="myfloat-center "> 
          </div> 
          <div className="myfloat-right" style={{backgroundColor:'rgba(2, 6, 14, 0.495)' }}> 
            <img src="" alt="Logo"></img>
            <p className="center text-small">College is a transformative period in a person's life, a time of intellectual exploration, personal growth, and newfound freedom. </p>
            <NavLink   to={"/register"}  
              className="btn btn-primary mytext-large mymargin1 rounded-pill" exact > 
            Register
            </NavLink> 
          </div> 
        </div>
        <br></br>
            </th>
            <th>
            <div className="container text-center"       style={{ 
        color: 'white', 
        backgroundColor: 'lightgray', 
        fontSize: '16px', 
        padding: '10px' ,
        border: '1px solid black',
        borderRadius: '10px',
        width:'60%'

      }} > 
          <div className="myfloat-center "> 
          </div> 
          <div className="myfloat-right bg-dark"> 
            <img src="" alt="Logo"></img>
            <p className="center text-small">College is a transformative period in a person's life, a time of intellectual exploration, personal growth, and newfound freedom. </p>
            <NavLink   to={"/studentlist"}  
              className="btn btn-primary mytext-large mymargin1 rounded-pill" exact > 
              Student List
            </NavLink> 
          </div> 
        </div>
        <br></br>
            </th>
        </tr><tr>
        <th>
            <div className="container text-center"       style={{ 
        color: 'white', 
        backgroundColor: 'lightgray', 
        fontSize: '16px', 
        padding: '10px' ,
        border: '1px solid black',
        borderRadius: '10px',
        width:'60%'

      }} > 
          <div className="myfloat-center "> 
          </div> 
          <div className="myfloat-right" style={{backgroundColor:'rgba(2, 6, 14, 0.495)' }}> 
            <img src="" alt="Logo"></img>
            <p className="center text-small">College is a transformative period in a person's life, a time of intellectual exploration, personal growth, and newfound freedom. </p>
            <NavLink   to={"/attendence"}  
              className="btn btn-primary mytext-large mymargin1 rounded-pill" exact > 
              Attendence
            </NavLink> 
          </div> 
        </div>
        <br></br>
            </th>
            <th>
            <div className="container text-center"       style={{ 
        color: 'white', 
        backgroundColor: 'lightgray', 
        fontSize: '16px', 
        padding: '10px' ,
        border: '1px solid black',
        borderRadius: '10px',
        width:'60%'

      }} > 
          <div className="myfloat-center "> 
          </div> 
          <div className="myfloat-right" style={{backgroundColor:'rgba(2, 6, 14, 0.495)' }}> 
            <img src="" alt="Logo"></img>
            <p className="center text-small">College is a transformative period in a person's life, a time of intellectual exploration, personal growth, and newfound freedom. </p>
            <NavLink   to={"/add-student"}  
              className="btn btn-primary mytext-large mymargin1 rounded-pill" exact > 
              Add Student
            </NavLink> 
          </div> 
        </div>
        <br></br>
            </th>
            </tr>
            </table>
<hr></hr>
<br></br>

<table className="table" >
               
<th>
            <div className="container text-center"       style={{ 
        color: 'white', 
        backgroundColor: 'lightgray', 
        fontSize: '16px', 
        padding: '10px' ,
        border: '1px solid black',
        borderRadius: '10px',
        width:'60%'

      }} > 
          <div className="myfloat-center text-center "style={{justifyContent:'center',textAlign:'center', alignContent:'center'}}> 
          </div> 
          <div className="myfloat-right" style={{backgroundColor:'rgba(2, 6, 14, 0.495)' }}> 
            <img src="" alt="Logo"></img>
            <p className="center text-small">College is a transformative period in a person's life, a time of intellectual exploration, personal growth, and newfound freedom. </p>
            <NavLink   to={"/add-student"}  
              className="btn btn-primary mytext-large mymargin1 rounded-pill" exact > 
              Manage Student data
            </NavLink> 
          </div> 
        </div>
        <br></br>
            </th>

</table>
            </div>
    )
}

export default Home;