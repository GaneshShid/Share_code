import './App.css';
import { MySideNav } from './site files/MySideNav';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import { Home } from './site files/Home';
import { Messages } from './site files/Messages';
import { Openings } from './site files/Openings';
import { Codes } from './site files/Codes';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { TopNavbar } from './site files/NavBar';
import { Sidenav } from './site files/SideNav';
import { useState } from 'react';
import "./site files/all.css"
function App() {

  return (
    <div className="bg-secondary">

    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Sidenav/>} >
            <Route index path="home" element={<Home/>} />
            <Route path="codes" element={<Codes/>}/>
            <Route path="openings" element={<Openings/>} />
            <Route path="messages" element={<Messages/>} />
          </Route>
        </Routes>
      </Router>
    </div>





      {/* <div>
          <div className="row" >
          <Top  Navbar />
          <Router>
          
            <div className="col-lg-6" >
            <MySideNav />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/openings" element={<Openings />} />
                <Route path="/codes" element={<Codes />} />
              </Routes>
            </div>
            <div className="col-lg-6" >
              <Outlet/>
              <h1>ganesh</h1>
            </div>
            </Router>
          </div>
      </div> */}



    </div>
  );
}

export default App;
