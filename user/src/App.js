import React from  'react';
import { Routes, Route, Link} from 'react-router-dom';
import './App.css';
import User from "./user/User.js";
import Employ from "./emp/Emp.js";
import Admin from "./admin/Admin.js";


function App() {
  return (
    <>
    <div className="nav">
      <h2>HELPER</h2>
    </div>
    <hr />
    <Routes>
      <Route index element={<Home/>} />
      <Route path="user/*" element={<User/>} />
      <Route path="emp/*" element={<Employ/>} />
      <Route path="admin/*" element={<Admin/>} />
    </Routes>
    </>
  );
}

const Home = () => {
  return (
    <>
    <div className="sub-nav">
      <h1>Home</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <Link className='btn btn-primary' to="/user">User</Link>
          </div>
          <div className='col-md-4'>
            <Link className='btn btn-primary' to="/emp">Employee</Link>
          </div>
          <div className='col-md-4'>
            <Link className='btn btn-primary' to="/admin">Admin</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};




export default App;
