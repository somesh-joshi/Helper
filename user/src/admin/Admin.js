import React from  'react';
import { Outlet, Link } from 'react-router-dom';
import '../App.css';


const Admin = () => {
    return (
        <>
        <div className="sub-nav">
          <h1>Admin</h1>
          <p> Make a choose </p>
        </div>
        <div className="contener">
            <div className="row">
              <div className="col-md-4">
                <h1>Sign In</h1>
                <p>
                    plz log in
                </p>
                <Link className="btn btn-primary" to="/admin/signIn">Sign In</Link>
              </div>
            </div>
          </div>
          <Outlet/>
        </>
    );
};


export default Admin;
