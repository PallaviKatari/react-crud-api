import React from 'react';  
import Addstudent from './Student/Addstudent';  
import Studentlist from './Student/Studentlist';  
import Editstudent from './Student/Editstudent';  
import Addcustomer from './AddCustomer';
import Customerlist from './Customers';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  
import './App.css';  
function App() {  
  return (  
    <Router>  
      <div className="container">  
        <nav className="navbar navbar-expand-lg navheader">  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
              <li className="nav-item">  
                <Link to={'/Addstudent'} className="nav-link">Addstudent</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/Studentlist'} className="nav-link">Student List</Link>  
              </li> 
              {/* <li className="nav-item">  
                <Link to={'/Addcustomer'} className="nav-link">Addcustomer</Link>  
              </li>   */}
              <li className="nav-item">  
                <Link to={'/Customerlist'} className="nav-link">CustomerList</Link>  
              </li> 
            </ul>  
          </div>  
        </nav> <br />  
        <Routes>  
          <Route exact path='/Addstudent' element={<Addstudent/>} />  
          <Route path='/edit/:id' element={<Editstudent/>} />  
          <Route path='/Studentlist' element={<Studentlist/>} />  
          <Route path='/Addcustomer' element={<Addcustomer/>}/>
          <Route path='/Customerlist' element={<Customerlist/>} /> 
        </Routes>  
      </div>  
    </Router>  
  );  
}  
  
export default App;  