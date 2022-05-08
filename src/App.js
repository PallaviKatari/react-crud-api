import React from 'react';  
import Addstudent from './Student/Addstudent';  
import Studentlist from './Student/Studentlist';  
import Editstudent from './Student/Editstudent';  
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
            </ul>  
          </div>  
        </nav> <br />  
        <Routes>  
          <Route exact path='/Addstudent' element={<Addstudent/>} />  
          <Route path='/edit/:id' element={<Editstudent/>} />  
          <Route path='/Studentlist' element={<Studentlist/>} />  
        </Routes>  
      </div>  
    </Router>  
  );  
}  
  
export default App;  