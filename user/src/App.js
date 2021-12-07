import React from  'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import './App.css';
import SignIn from "./comp/signIn";
import SignUp from "./comp/signUp";


function App() {
  return (
    <>
    <div className="nav">
      <h2>HELPER</h2>
    </div>
    <hr />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/auth" element={<Login/>}>
        <Route path="/auth/signIn" element={<SignIn/>} />
        <Route path="/auth/signUp" element={<SignUp/>} />
      </Route>
    </Routes>
    </>
  );
}

const Home = () => {
  return (
    <div>
      <div className="sub-nav">
      <h1>Home</h1>
      <p> Hello World </p>
      <Link className="btn btn-success" to="/auth">Login</Link>
      </div>
    </div>
  );
};


const Login = () => {

  return (
    <>
    <div className="sub-nav">
      <h1>Login</h1>
      <p> Make a choose </p>
    </div>
    <div className="contener">
        <div className="row">
          <div className="col-md-4">
            <h1>Sign In</h1>
            <p>
                plz log in
            </p>
            <Link className="btn btn-primary" to="/auth/signIn">Sign In</Link>
          </div>
          <div className="col-md-4">
            <h1>Sign Up</h1>
            <p>
                plz sign up
            </p>
            <Link className="btn btn-success" to="/auth/signUp">Sign Up</Link>
          </div>
        </div>
      </div>
      <Outlet/>
    </>
  );
};


export default App;
