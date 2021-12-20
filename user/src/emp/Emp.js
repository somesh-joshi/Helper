import React from  'react';
import { Outlet, Link } from 'react-router-dom';
import '../App.css';


const Emp = () => {
    return (
        <>
        <div className="sub-nav">
          <h1>Emp</h1>
          <p> Make a choose </p>
        </div>
        <div className="contener">
            <div className="row">
              <div className="col-md-4">
                <h1>Sign In</h1>
                <p>
                    plz log in
                </p>
                <Link className="btn btn-primary" to="/emp/signIn">Sign In</Link>
              </div>
              <div className="col-md-4">
                <h1>Sign Up</h1>
                <p>
                    plz sign up
                </p>
                <Link className="btn btn-success" to="/emp/signUp">Sign Up</Link>
              </div>
            </div>
          </div>
          <Outlet/>
        </>
    );
};


export default Emp;
