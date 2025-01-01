import React, { Component } from 'react'; 

import "bootstrap/dist/css/bootstrap.min.css"; 
import JLCHeader from './JLCHeader'; 
import JLCBody from './JLCBody'; 
import JLCFooter from './JLCFooter'; 
import { BrowserRouter as MyRouter } from 'react-router-dom'; 
 
class App extends Component { 
  render() { 
    return ( 
       <MyRouter> 
        <div className="card"> 
        <JLCHeader/> 
        <JLCBody/> 
        <JLCFooter/> 
        </div> 
      </MyRouter> 
      
    ); 
  } 
} 
 
export default App; 